import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { sendMail, type EmailEnv } from "../src/lib/email/index.ts";
import { buildInvitationEmail } from "../src/lib/invitation-email.ts";

const ROOT = new URL("..", import.meta.url).pathname;

function loadDevVars(): void {
  try {
    const content = readFileSync(join(ROOT, ".dev.vars"), "utf8");
    for (const line of content.split("\n")) {
      const match = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!match) continue;
      const key = match[1];
      const value = match[2].replace(/^(["'])(.*)\1$/, "$2");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    /* no .dev.vars file */
  }
}

loadDevVars();

const CSV_PATH = process.env.CSV ?? join(ROOT, "docs/registration/NIMS 2026 REGISTRANT-updated.xlsx - Sheet1 (1).csv");
const FIXES_PATH = process.env.FIXES ?? join(ROOT, "docs/registration/email-fixes.json");
const TEST_TO = process.env.TEST_TO ?? "edgdmedia@gmail.com";
const LIMIT = Number(process.env.LIMIT ?? 0);
const THROTTLE_MS = Number(process.env.THROTTLE_MS ?? 1000);
const BATCH_UPDATE_SIZE = 50;

interface CsvRow {
  reg_no: string;
  first_name: string;
  last_name: string;
  email: string;
}

function parseCsv(text: string): CsvRow[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += ch;
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(field); field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some((c) => c !== "")) rows.push(row);
      row = [];
    } else field += ch;
  }
  row.push(field);
  if (row.some((c) => c !== "")) rows.push(row);
  const header = rows.shift()!.map((h) => h.trim().toLowerCase());
  const idx = (name: string) => header.indexOf(name);
  return rows
    .map((r) => ({
      reg_no: r[idx("reg_no")]?.trim() ?? "",
      first_name: r[idx("first_name")]?.trim() ?? "",
      last_name: r[idx("last_name")]?.trim() ?? "",
      email: r[idx("email")]?.trim().toLowerCase() ?? "",
    }))
    .filter((r) => r.email && r.reg_no);
}

function d1Query(sql: string): { results: Array<Record<string, unknown>> }[] {
  const output = execFileSync(
    "npx",
    ["wrangler", "d1", "execute", "nims-registrations", "--remote", "--json", "--command", sql],
    { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
  );
  return JSON.parse(output);
}

function d1File(sql: string): void {
  const path = join(tmpdir(), `nims-invite-${Date.now()}.sql`);
  writeFileSync(path, sql);
  execFileSync("npx", ["wrangler", "d1", "execute", "nims-registrations", "--remote", "--file", path], {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  });
}

function sqlStr(v: string): string {
  return `'${v.replace(/'/g, "''")}'`;
}

function levenshtein(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 2) return 99;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let last = prev[0];
    prev[0] = i;
    let anyNear = false;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, last + (a[i - 1] === b[j - 1] ? 0 : 1));
      last = tmp;
      if (prev[j] <= 2) anyNear = true;
    }
    if (!anyNear) return 99;
  }
  return prev[b.length];
}

interface DbRow {
  id: number;
  email: string;
  first_name: string;
}

function loadDbEmails(): Map<string, DbRow[]> {
  const [{ results }] = d1Query("SELECT id, lower(email) AS email, first_name FROM registrations");
  const map = new Map<string, DbRow[]>();
  for (const r of results as unknown as DbRow[]) {
    const list = map.get(r.email) ?? [];
    list.push(r);
    map.set(r.email, list);
  }
  return map;
}

function loadFixes(): Record<string, string> {
  if (!existsSync(FIXES_PATH)) return {};
  return JSON.parse(readFileSync(FIXES_PATH, "utf8")) as Record<string, string>;
}

function loadConfirmed(): Map<string, CsvRow[]> {
  const csv = parseCsv(readFileSync(CSV_PATH, "utf8"));
  const fixes = loadFixes();
  const byEmail = new Map<string, CsvRow[]>();
  for (const row of csv) {
    const email = fixes[row.email] ?? row.email;
    const list = byEmail.get(email) ?? [];
    list.push({ ...row, email });
    byEmail.set(email, list);
  }
  return byEmail;
}

function report(): void {
  const byEmail = loadConfirmed();
  const db = loadDbEmails();
  const dbEmails = [...db.keys()];
  let matched = 0;
  const suggestions: Array<{ regNos: string; email: string; guess: string; dist: number }> = [];
  const unmatched: Array<{ regNos: string; email: string; reason: string }> = [];

  for (const [email, rows] of byEmail) {
    const regNos = rows.map((r) => r.reg_no).join(",");
    if (db.has(email)) { matched++; continue; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      unmatched.push({ regNos, email, reason: "invalid address (contains spaces)" });
      continue;
    }
    let best = { guess: "", dist: 3 };
    for (const cand of dbEmails) {
      const d = levenshtein(email, cand);
      if (d < best.dist) best = { guess: cand, dist: d };
    }
    if (best.guess) suggestions.push({ regNos, email, ...best });
    else unmatched.push({ regNos, email, reason: "no similar address in DB" });
  }

  console.log(`Confirmed list: ${byEmail.size} unique emails, ${matched} matched in DB`);
  if (suggestions.length) {
    console.log(`\nLikely typos (edit distance <= 2) — add to ${FIXES_PATH} as {"confirmed-email": "db-email"}:`);
    for (const s of suggestions.sort((a, b) => a.dist - b.dist)) {
      console.log(`  [${s.regNos}] ${s.email}  ->  ${s.guess} (d=${s.dist})`);
    }
  }
  if (unmatched.length) {
    console.log(`\nUnmatched (${unmatched.length}):`);
    for (const u of unmatched) console.log(`  [${u.regNos}] ${u.email} — ${u.reason}`);
  }
}

function sync(): void {
  const byEmail = loadConfirmed();
  const db = loadDbEmails();
  const stmts: string[] = [];
  const skipped: string[] = [];
  for (const [email, rows] of byEmail) {
    const dbRows = db.get(email);
    if (!dbRows) { skipped.push(email); continue; }
    for (let i = 0; i < rows.length; i++) {
      const target = dbRows[i % dbRows.length];
      stmts.push(`UPDATE registrations SET reg_no = ${sqlStr(rows[i].reg_no)} WHERE id = ${target.id};`);
    }
  }
  for (let i = 0; i < stmts.length; i += 100) {
    d1File(stmts.slice(i, i + 100).join("\n"));
    console.log(`synced ${Math.min(i + 100, stmts.length)}/${stmts.length}`);
  }
  console.log(`reg_no assigned on ${stmts.length} registration rows; ${skipped.length} confirmed emails not in DB (skipped)`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function send(): Promise<void> {
  const env = process.env as EmailEnv;
  const [{ results }] = d1Query(
    `SELECT id, lower(email) AS email, first_name, reg_no FROM registrations WHERE reg_no IS NOT NULL AND invite_sent = 0 ORDER BY CAST(reg_no AS INTEGER)${LIMIT > 0 ? ` LIMIT ${LIMIT * 4}` : ""}`
  );
  const rows = results as unknown as Array<{ id: number; email: string; first_name: string; reg_no: string }>;

  const byEmail = new Map<string, { ids: number[]; firstName: string; regNos: string[] }>();
  for (const r of rows) {
    const entry = byEmail.get(r.email) ?? { ids: [], firstName: r.first_name, regNos: [] };
    entry.ids.push(r.id);
    entry.regNos.push(...r.reg_no.split(",").map((n) => n.trim()).filter(Boolean));
    byEmail.set(r.email, entry);
  }

  const recipients = [...byEmail.entries()].slice(0, LIMIT > 0 ? LIMIT : undefined);
  console.log(`${recipients.length} invitation(s) to send (${rows.length} unsent rows)`);

  let sent = 0;
  let failed = 0;
  let sentIds: number[] = [];

  const markSent = async (ids: number[]): Promise<void> => {
    if (ids.length === 0) return;
    d1File(`UPDATE registrations SET invite_sent = 1, invited_at = datetime('now') WHERE id IN (${ids.join(",")});`);
  };

  for (const [email, entry] of recipients) {
    const mail = buildInvitationEmail({ firstName: entry.firstName, regNos: entry.regNos, to: email });
    try {
      await sendMail(env, mail);
      sent += 1;
      sentIds = sentIds.concat(entry.ids);
    } catch (err) {
      failed += 1;
      console.error(`FAILED ${email} [${entry.regNos.join(",")}]: ${err instanceof Error ? err.message : err}`);
      continue;
    }

    if (sentIds.length >= BATCH_UPDATE_SIZE) {
      await markSent(sentIds);
      sentIds = [];
      console.log(`progress: ${sent} sent, ${failed} failed`);
    }

    await sleep(THROTTLE_MS);
  }

  await markSent(sentIds);
  console.log(`done: ${sent} sent, ${failed} failed`);
}

async function main(): Promise<void> {
  const mode = process.argv[2] ?? "report";
  if (mode === "report") report();
  else if (mode === "sync") sync();
  else if (mode === "test") {
    const env = process.env as EmailEnv;
    const mail = buildInvitationEmail({ firstName: "Test", regNos: ["000", "492"], to: TEST_TO });
    await sendMail(env, mail);
    console.log(`test invitation sent to ${TEST_TO}`);
  } else if (mode === "send") await send();
  else throw new Error(`unknown mode: ${mode} (use report|sync|test|send)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
