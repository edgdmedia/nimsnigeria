import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

import nodemailer from "nodemailer";

import { buildRegistrationEmail } from "../src/lib/registration-email.ts";

function loadDevVars(): void {
  try {
    const content = readFileSync(".dev.vars", "utf8");
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

const SMTP_HOST = process.env.SMTP_HOST ?? "mail.nimsnigeria.org";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM ?? "no-reply@nimsnigeria.org";
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME ?? "NIMS 2026";
const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO ?? "registration@nimsnigeria.org";
const PROVIDER = process.env.PROVIDER ?? "smtp";
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LIMIT = Number(process.env.LIMIT ?? 0);
const THROTTLE_MS = Number(process.env.THROTTLE_MS ?? 1000);
const BATCH_UPDATE_SIZE = 50;

if (PROVIDER === "smtp" && (!SMTP_USER || !SMTP_PASS)) {
  console.error("SMTP_USER and SMTP_PASS environment variables are required for PROVIDER=smtp");
  process.exit(1);
}

if (PROVIDER === "brevo" && !BREVO_API_KEY) {
  console.error("BREVO_API_KEY is required when PROVIDER=brevo");
  process.exit(1);
}

if (PROVIDER === "mailjet" && (!MAILJET_API_KEY || !MAILJET_SECRET_KEY)) {
  console.error("MAILJET_API_KEY and MAILJET_SECRET_KEY are required when PROVIDER=mailjet");
  process.exit(1);
}

if (PROVIDER === "resend" && !RESEND_API_KEY) {
  console.error("RESEND_API_KEY is required when PROVIDER=resend");
  process.exit(1);
}

function d1Query(sql: string): { results: Array<Record<string, unknown>> }[] {
  const output = execFileSync(
    "npx",
    ["wrangler", "d1", "execute", "nims-registrations", "--remote", "--json", "--command", sql],
    { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
  );
  return JSON.parse(output);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const transporter =
  PROVIDER === "smtp"
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        name: process.env.SMTP_CLIENT_NAME ?? "mail.nimsnigeria.org",
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        tls: process.env.SMTP_TLS_INSECURE === "1" ? { rejectUnauthorized: false } : undefined,
      })
    : null;

async function sendOne(to: string, mail: { subject: string; text: string; html: string }): Promise<string> {
  if (PROVIDER === "resend") {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${EMAIL_FROM_NAME} <no-reply@send.nimsnigeria.org>`,
        reply_to: EMAIL_REPLY_TO,
        to: [to],
        subject: mail.subject,
        text: mail.text,
        html: mail.html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Resend ${res.status}: ${detail.slice(0, 200)}`);
    }
    const data = (await res.json()) as { id?: string };
    return data.id ?? "accepted";
  }

  if (PROVIDER === "mailjet") {
    const auth = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString("base64");
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: EMAIL_FROM, Name: EMAIL_FROM_NAME },
            ReplyTo: { Email: EMAIL_REPLY_TO },
            To: [{ Email: to }],
            Subject: mail.subject,
            TextPart: mail.text,
            HTMLPart: mail.html,
          },
        ],
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Mailjet ${res.status}: ${detail.slice(0, 200)}`);
    }
    const data = (await res.json()) as { Messages?: Array<{ Status?: string; MessageID?: string }> };
    return String(data.Messages?.[0]?.MessageID ?? "accepted");
  }

  if (PROVIDER === "brevo") {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: EMAIL_FROM_NAME, email: EMAIL_FROM },
        replyTo: { email: EMAIL_REPLY_TO },
        to: [{ email: to }],
        subject: mail.subject,
        textContent: mail.text,
        htmlContent: mail.html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Brevo ${res.status}: ${detail.slice(0, 200)}`);
    }
    const data = (await res.json()) as { messageId?: string };
    return data.messageId ?? "accepted";
  }

  const info = await transporter!.sendMail({
    from: `"${EMAIL_FROM_NAME}" <${EMAIL_FROM}>`,
    replyTo: EMAIL_REPLY_TO,
    to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
  return info.messageId;
}

interface PendingRow {
  id: number;
  first_name: string;
  email: string;
}

async function main(): Promise<void> {
  if (process.env.TEST_MODE) {
    const testTo = process.env.TEST_TO ?? "edgdmedia@gmail.com";
    const mail = buildRegistrationEmail("Test", testTo);
    const id = await sendOne(testTo, mail);
    console.log(`test email via ${PROVIDER} -> ${testTo} (id: ${id})`);
    return;
  }

  const [{ results }] = d1Query(
    `SELECT id, first_name, email FROM registrations WHERE email_sent = 0 ORDER BY id${LIMIT > 0 ? ` LIMIT ${LIMIT}` : ""}`
  );
  const pending = results as unknown as PendingRow[];

  console.log(`${pending.length} registration(s) pending email`);
  if (pending.length === 0) return;

  let sentIds: number[] = [];
  let sent = 0;
  let failed = 0;

  const markSent = async (ids: number[]): Promise<void> => {
    if (ids.length === 0) return;
    d1Query(`UPDATE registrations SET email_sent = 1, email_provider = '${PROVIDER}' WHERE id IN (${ids.join(",")})`);
  };

  for (const row of pending) {
    const mail = buildRegistrationEmail(row.first_name, row.email);
    try {
      await sendOne(row.email, mail);
      sent += 1;
      sentIds.push(row.id);
    } catch (err) {
      failed += 1;
      console.error(`FAILED id=${row.id} ${row.email}: ${err instanceof Error ? err.message : err}`);
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
