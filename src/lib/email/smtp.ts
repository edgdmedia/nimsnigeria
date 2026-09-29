import {
  DEFAULT_FROM,
  DEFAULT_FROM_NAME,
  DEFAULT_REPLY_TO,
  type EmailEnv,
  type EmailProvider,
  type MailMessage,
} from "./types";

const SMTP_TIMEOUT_MS = 15_000;

function encodeBase64(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function withTimeout<T>(promise: Promise<T>, label: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  return Promise.race([
    promise.finally(() => clearTimeout(timer)),
    new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error(`SMTP ${label} timed out`)), SMTP_TIMEOUT_MS);
    }),
  ]);
}

class SmtpConnection {
  private buffer = "";
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private decoder = new TextDecoder();

  constructor(readable: ReadableStream<Uint8Array>, writable: WritableStream<Uint8Array>) {
    this.reader = readable.getReader();
    this.writer = writable.getWriter();
  }

  async readResponse(): Promise<string> {
    return withTimeout(this.readResponseInner(), "read");
  }

  private async readResponseInner(): Promise<string> {
    for (;;) {
      const match = this.buffer.match(/^(?:\d{3}-[^\r\n]*\r\n)*\d{3} [^\r\n]*\r\n/);
      if (match) {
        const response = match[0];
        this.buffer = this.buffer.slice(response.length);
        return response.trim();
      }
      const { value, done } = await this.reader.read();
      if (done) throw new Error("SMTP connection closed unexpectedly");
      this.buffer += this.decoder.decode(value, { stream: true });
    }
  }

  async send(input: string): Promise<void> {
    await withTimeout(this.writer.write(new TextEncoder().encode(input)), "write");
  }

  async command(input: string): Promise<string> {
    await this.send(input);
    return this.readResponse();
  }
}

function buildWireMessage(from: string, fromName: string, replyTo: string, message: MailMessage): string {
  const boundary = `nims-${crypto.randomUUID()}`;
  const headers = [
    `From: ${fromName} <${from}>`,
    `Reply-To: <${replyTo}>`,
    `To: <${message.to}>`,
    `Subject: =?UTF-8?B?${encodeBase64(message.subject)}?=`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@nimsnigeria.org>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];

  const parts = [
    `--${boundary}\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n\r\n${encodeBase64(message.text)}`,
    `--${boundary}\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n\r\n${encodeBase64(message.html)}`,
  ];

  return `${headers.join("\r\n")}\r\n\r\n${parts.join("\r\n")}\r\n--${boundary}--\r\n.\r\n`;
}

async function sendViaSmtp(env: EmailEnv, message: MailMessage): Promise<void> {
  const importSockets = new Function("return import('cloudflare:sockets')") as () => Promise<{
    connect: (
      address: { hostname: string; port: number },
      options: { secureTransport: string; allowHalfOpen: boolean }
    ) => {
      readable: ReadableStream<Uint8Array>;
      writable: WritableStream<Uint8Array>;
      close(): Promise<void>;
    };
  }>;
  const { connect } = await importSockets();

  const host = env.SMTP_HOST ?? "mail.nimsnigeria.org";
  const port = Number(env.SMTP_PORT ?? 465);
  const from = env.EMAIL_FROM ?? DEFAULT_FROM;
  const fromName = env.EMAIL_FROM_NAME ?? DEFAULT_FROM_NAME;
  const replyTo = env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO;

  const socket = connect(
    { hostname: host, port },
    { secureTransport: "on", allowHalfOpen: false }
  );
  const conn = new SmtpConnection(socket.readable, socket.writable);

  try {
    await conn.readResponse();

    const ehlo = await conn.command(`EHLO nimsnigeria.org\r\n`);
    if (!ehlo.startsWith("250")) throw new Error(`SMTP EHLO failed: ${ehlo}`);

    await conn.command("AUTH LOGIN\r\n");
    await conn.command(`${encodeBase64(env.SMTP_USER!)}\r\n`);
    const auth = await conn.command(`${encodeBase64(env.SMTP_PASS!)}\r\n`);
    if (!auth.startsWith("235")) throw new Error(`SMTP auth failed: ${auth}`);

    const mailFrom = await conn.command(`MAIL FROM:<${from}>\r\n`);
    if (!mailFrom.startsWith("250")) throw new Error(`SMTP MAIL FROM failed: ${mailFrom}`);

    const rcpt = await conn.command(`RCPT TO:<${message.to}>\r\n`);
    if (!rcpt.startsWith("250") && !rcpt.startsWith("251")) {
      throw new Error(`SMTP RCPT TO failed: ${rcpt}`);
    }

    const data = await conn.command("DATA\r\n");
    if (!data.startsWith("354")) throw new Error(`SMTP DATA failed: ${data}`);

    await conn.send(buildWireMessage(from, fromName, replyTo, message));
    const queued = await conn.readResponse();
    if (!queued.startsWith("250")) throw new Error(`SMTP message rejected: ${queued}`);

    await conn.command("QUIT\r\n").catch(() => undefined);
  } finally {
    try {
      socket.close();
    } catch {
      /* socket already closed */
    }
  }
}

export const smtpProvider: EmailProvider = {
  name: "smtp-vps",

  isConfigured(env: EmailEnv): boolean {
    return Boolean(env.SMTP_USER && env.SMTP_PASS);
  },

  send(env: EmailEnv, message: MailMessage): Promise<void> {
    return sendViaSmtp(env, message);
  },
};
