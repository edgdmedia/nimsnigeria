import {
  DEFAULT_FROM_NAME,
  DEFAULT_REPLY_TO,
  type EmailEnv,
  type EmailProvider,
  type MailMessage,
} from "./types";

const RESEND_API_URL = "https://api.resend.com/emails";

export const resendProvider: EmailProvider = {
  name: "resend",

  isConfigured(env: EmailEnv): boolean {
    return Boolean(env.RESEND_API_KEY);
  },

  async send(env: EmailEnv, message: MailMessage): Promise<void> {
    const replyTo = env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO;
    const from = env.RESEND_FROM ?? "no-reply@send.nimsnigeria.org";
    const fromName = env.EMAIL_FROM_NAME ?? DEFAULT_FROM_NAME;

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${fromName} <${from}>`,
        reply_to: replyTo,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        html: message.html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Resend ${res.status}: ${detail.slice(0, 200)}`);
    }
  },
};
