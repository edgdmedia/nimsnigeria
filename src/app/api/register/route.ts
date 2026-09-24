import { getCloudflareContext } from "@opennextjs/cloudflare";

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "company",
  "jobTitle",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const field of REQUIRED_FIELDS) {
    const value = typeof body[field] === "string" ? (body[field] as string).trim() : "";
    if (!value) {
      return Response.json({ error: "All fields are compulsory." }, { status: 400 });
    }
    values[field] = value;
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const { env } = await getCloudflareContext();
    await env.DB.prepare(
      "INSERT INTO registrations (first_name, last_name, email, phone, company, job_title) VALUES (?, ?, ?, ?, ?, ?)"
    )
      .bind(values.firstName, values.lastName, values.email, values.phone, values.company, values.jobTitle)
      .run();
  } catch (err) {
    console.error("Failed to save registration:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or contact registration@nimsnigeria.org." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
