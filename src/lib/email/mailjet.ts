import {
  DEFAULT_FROM,
  DEFAULT_FROM_NAME,
  DEFAULT_REPLY_TO,
  type EmailEnv,
  type EmailProvider,
  type MailMessage,
} from "./types";

const MAILJET_API_URL = "https://api.mailjet.com/v3.1/send";

export const mailjetProvider: EmailProvider = {
  name: "mailjet",

  isConfigured(env: EmailEnv): boolean {
    return Boolean(env.MAILJET_API_KEY && env.MAILJET_SECRET_KEY);
  },

  async send(env: EmailEnv, message: MailMessage): Promise<void> {
    const from = env.EMAIL_FROM ?? DEFAULT_FROM;
    const fromName = env.EMAIL_FROM_NAME ?? DEFAULT_FROM_NAME;
    const replyTo = env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO;

    const auth = btoa(`${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`);

    const res = await fetch(MAILJET_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: from, Name: fromName },
            ReplyTo: { Email: replyTo },
            To: [{ Email: message.to }],
            Subject: message.subject,
            TextPart: message.text,
            HTMLPart: message.html,
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Mailjet ${res.status}: ${detail.slice(0, 200)}`);
    }

    const data = (await res.json()) as {
      Messages?: Array<{ Status?: string; ErrorMessage?: string }>;
    };
    const result = data.Messages?.[0];
    if (result && result.Status !== "sent") {
      throw new Error(`Mailjet rejected: ${result.ErrorMessage ?? result.Status}`);
    }
  },
};
