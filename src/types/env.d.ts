declare global {
  interface CloudflareEnv {
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
}

export {};
