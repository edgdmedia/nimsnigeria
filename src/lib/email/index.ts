import { brevoProvider } from "./brevo";
import { mailjetProvider } from "./mailjet";
import { resendProvider } from "./resend";
import { smtpProvider } from "./smtp";
import type { EmailEnv, EmailProvider, MailMessage } from "./types";

export type { EmailEnv, MailMessage } from "./types";

const providerRegistry: Record<string, EmailProvider> = {
  resend: resendProvider,
  mailjet: mailjetProvider,
  brevo: brevoProvider,
  smtp: smtpProvider,
};

function resolveProviders(env: EmailEnv): EmailProvider[] {
  const order = (env.EMAIL_PROVIDERS ?? "resend,brevo,mailjet")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
  return order
    .map((name) => providerRegistry[name])
    .filter((provider): provider is EmailProvider => Boolean(provider));
}

export async function sendMail(env: EmailEnv, message: MailMessage): Promise<string> {
  const failures: string[] = [];

  for (const provider of resolveProviders(env)) {
    if (!provider.isConfigured(env)) {
      continue;
    }
    try {
      await provider.send(env, message);
      return provider.name;
    } catch (err) {
      failures.push(`${provider.name}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  if (failures.length === 0) {
    throw new Error("No email providers configured");
  }
  throw new Error(`All email providers failed — ${failures.join(" | ")}`);
}
