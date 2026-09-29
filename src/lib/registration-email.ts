import type { MailMessage } from "./email";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildRegistrationEmail(firstName: string, to: string): MailMessage {
  const name = firstName.trim().replace(/[\r\n]+/g, " ") || "there";
  const subject = "NIMS 2026 Registration Received";
  const preview = "Please note, registration does not confirm attendance.";

  const text = `Hello ${name}

Thank you for registering for the National Industrial Manpower Summit (NIMS 2026).

Please note that registration does not automatically confirm attendance. Due to limited capacity and the high-security nature of the venue, attendance is subject to invitation and confirmation by the NIMS team.

If you are invited to attend, you will receive an invitation and further information via the email address provided during registration. If you do not receive further communication from the NIMS team, your registration should not be considered a confirmation of attendance.

Further information will be shared with invited delegates closer to the event, including the access instructions and on-site logistics.

For enquiries, please contact registration@nimsnigeria.org`;

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f4f5f4;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preview)}</div>
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background-color:#16661F;border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;">NIMS 2026</h1>
      <p style="margin:8px 0 0;color:#d7ecda;font-size:14px;">National Industrial Manpower Summit</p>
    </div>
    <div style="background-color:#ffffff;border-radius:0 0 12px 12px;padding:32px;border:1px solid #e5e7eb;border-top:none;">
      <h2 style="margin:0 0 16px;font-size:20px;color:#111827;">Registration Received</h2>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Hello ${escapeHtml(name)},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Thank you for registering for the National Industrial Manpower Summit (NIMS 2026).</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;background-color:#f9fafb;border-left:4px solid #16661F;padding:12px 16px;">Please note that <strong>registration does not automatically confirm attendance.</strong> Due to limited capacity and the high-security nature of the venue, attendance is subject to invitation and confirmation by the NIMS team.</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">If you are invited to attend, you will receive an invitation and further information via the email address provided during registration. If you do not receive further communication from the NIMS team, your registration should not be considered a confirmation of attendance.</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Further information will be shared with invited delegates closer to the event, including the access instructions and on-site logistics.</p>
      <p style="margin:0;font-size:15px;line-height:1.6;">For enquiries, please contact <a href="mailto:registration@nimsnigeria.org" style="color:#16661F;">registration@nimsnigeria.org</a></p>
    </div>
  </div>
</body>
</html>`;

  return { to, subject, text, html };
}
