import {
  DEFAULT_FROM,
  DEFAULT_FROM_NAME,
  DEFAULT_REPLY_TO,
  type EmailEnv,
  type EmailProvider,
  type MailMessage,
} from "./types";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const brevoProvider: EmailProvider = {
  name: "brevo",

  isConfigured(env: EmailEnv): boolean {
    return Boolean(env.BREVO_API_KEY);
  },

  async send(env: EmailEnv, message: MailMessage): Promise<void> {
    const from = env.BREVO_FROM ?? env.EMAIL_FROM ?? DEFAULT_FROM;
    const fromName = env.EMAIL_FROM_NAME ?? DEFAULT_FROM_NAME;
    const replyTo = env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO;

    const res = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: fromName, email: from },
        replyTo: { email: replyTo },
        to: [{ email: message.to }],
        subject: message.subject,
        textContent: message.text,
        htmlContent: message.html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Brevo ${res.status}: ${detail.slice(0, 200)}`);
    }
  },
};
