export interface MailMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface EmailEnv {
  EMAIL_FROM?: string;
  EMAIL_FROM_NAME?: string;
  EMAIL_REPLY_TO?: string;
  EMAIL_PROVIDERS?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM?: string;
  BREVO_API_KEY?: string;
  BREVO_FROM?: string;
  MAILJET_API_KEY?: string;
  MAILJET_SECRET_KEY?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
}

export interface EmailProvider {
  name: string;
  isConfigured(env: EmailEnv): boolean;
  send(env: EmailEnv, message: MailMessage): Promise<void>;
}

export const DEFAULT_FROM = "no-reply@nimsnigeria.org";
export const DEFAULT_FROM_NAME = "NIMS 2026";
export const DEFAULT_REPLY_TO = "registration@nimsnigeria.org";
