import type { MailMessage } from "./email";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface InvitationDetails {
  firstName: string;
  regNos: string[];
  to: string;
}

const DAY1_STREAM = "https://youtube.com/live/XNLPUWhUi1U?feature=share";
const DAY2_STREAM = "https://youtube.com/live/4qPUlAgs0o4?feature=share";

function section(title: string, body: string): string {
  return `<h3 style="margin:28px 0 12px;font-size:15px;color:#16661F;text-transform:uppercase;letter-spacing:0.5px;">${title}</h3>${body}`;
}

export function buildInvitationEmail({ firstName, regNos, to }: InvitationDetails): MailMessage {
  const name = firstName.trim().replace(/[\r\n]+/g, " ") || "Guest";
  const numbers = regNos.map((n) => n.trim()).filter(Boolean);
  const numbersLabel = numbers.join(", ");
  const one = numbers.length === 1;

  const subject = "Your Invitation to NIMS 2026";
  const preview = "Your unique invitation number and important check-in information for 15\u201316 October.";

  const text = `Dear ${name},

We are pleased to confirm your registration and invitation to the National Industrial Manpower Summit (NIMS 2026), scheduled for Thursday, 15 October and Friday, 16 October 2026, at the State House Banquet Hall, Presidential Villa, Abuja.

YOUR UNIQUE INVITATION NUMBER${one ? "" : "S"}: ${numbersLabel}

This invitation number is assigned exclusively to you and grants access to both days of the summit, subject to successful accreditation.

CHECK-IN & ACCREDITATION
Location: Eagle Square, Shehu Shagari Way, Central Business District, Abuja, FCT.

Day 1 \u2013 Thursday, 15 October 2026
- Accreditation & Check-in: From 8:00 a.m.
- Summit Commencement: 10:00 a.m.

Day 2 \u2013 Friday, 16 October 2026
- Accreditation & Check-in: From 8:00 a.m.
- Summit Commencement: 10:00 a.m.

Important Check-in Requirements
For successful accreditation, all attendees must present:
1. Registration Confirmation: This email, either in digital or printed format, displaying your unique invitation number.
2. Valid Photo Identification: A government-issued photo ID bearing the same name used during registration.

Please retain this email and have the required identification readily available upon arrival. Invitation numbers are non-transferable, and accreditation will be subject to verification.

We encourage all attendees to arrive early to allow sufficient time for accreditation and transportation to the summit venue.

TRANSPORTATION
Official NIMS 2026 shuttle buses will convey accredited attendees from Eagle Square to the State House Banquet Hall, Presidential Villa, Abuja, with return transportation provided at the conclusion of each day's proceedings.
Attendees are required to use the designated shuttle services and comply with all transportation and security arrangements.

ACCESS & SECURITY
Due to the venue's security requirements, attendees must remain within designated event areas and comply with all access, movement, and security instructions throughout the summit. Movement outside authorised areas will not be permitted.

NIMS 2026 LIVE STREAM
The summit proceedings will also be streamed live on YouTube. Feel free to share the links below with colleagues and other interested participants who wish to follow the discussions remotely.
Day 1 \u2013 Thursday, 15 October 2026: ${DAY1_STREAM}
Day 2 \u2013 Friday, 16 October 2026: ${DAY2_STREAM}

We look forward to welcoming you to NIMS 2026.
For enquiries, please contact registration@nimsnigeria.org.

Kind regards,
National Industrial Manpower Summit (NIMS 2026)`;

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f4f5f4;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preview)}</div>
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background-color:#16661F;border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;">NIMS 2026</h1>
      <p style="margin:8px 0 0;color:#d7ecda;font-size:14px;">National Industrial Manpower Summit</p>
      <p style="margin:14px 0 0;color:#ffffff;font-size:15px;font-weight:bold;">Your Invitation to NIMS 2026</p>
      <p style="margin:4px 0 0;color:#d7ecda;font-size:13px;">15&ndash;16 October 2026 &middot; State House Banquet Hall, Presidential Villa, Abuja</p>
    </div>
    <div style="background-color:#ffffff;border-radius:0 0 12px 12px;padding:32px;border:1px solid #e5e7eb;border-top:none;">
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Dear ${escapeHtml(name)},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">We are pleased to confirm your registration and invitation to the National Industrial Manpower Summit (NIMS 2026), scheduled for Thursday, 15 October and Friday, 16 October 2026, at the State House Banquet Hall, Presidential Villa, Abuja.</p>
      <div style="background-color:#16661F;border-radius:12px;padding:20px 24px;text-align:center;margin:0 0 16px;">
        <p style="margin:0;color:#d7ecda;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Your Unique Invitation Number${one ? "" : "s"}</p>
        <p style="margin:8px 0 0;color:#ffffff;font-size:28px;font-weight:bold;letter-spacing:2px;">${escapeHtml(numbersLabel)}</p>
      </div>
      <p style="margin:0 0 8px;font-size:15px;line-height:1.6;">${one ? "This invitation number is" : "These invitation numbers are"} assigned exclusively to you and grant${one ? "s" : ""} access to both days of the summit, subject to successful accreditation.</p>

      ${section("Check-in &amp; Accreditation", `
      <p style="margin:0 0 12px;font-size:15px;line-height:1.6;"><strong>Location:</strong> Eagle Square, Shehu Shagari Way, Central Business District, Abuja, FCT.</p>
      <p style="margin:0 0 4px;font-size:15px;line-height:1.6;"><strong>Day 1 &ndash; Thursday, 15 October 2026</strong></p>
      <ul style="margin:0 0 12px;padding-left:20px;font-size:15px;line-height:1.7;">
        <li>Accreditation &amp; Check-in: From 8:00 a.m.</li>
        <li>Summit Commencement: 10:00 a.m.</li>
      </ul>
      <p style="margin:0 0 4px;font-size:15px;line-height:1.6;"><strong>Day 2 &ndash; Friday, 16 October 2026</strong></p>
      <ul style="margin:0 0 16px;padding-left:20px;font-size:15px;line-height:1.7;">
        <li>Accreditation &amp; Check-in: From 8:00 a.m.</li>
        <li>Summit Commencement: 10:00 a.m.</li>
      </ul>
      <p style="margin:0 0 8px;font-size:15px;line-height:1.6;"><strong>Important Check-in Requirements</strong><br/>For successful accreditation, all attendees must present:</p>
      <ol style="margin:0 0 16px;padding-left:20px;font-size:15px;line-height:1.7;">
        <li><strong>Registration Confirmation:</strong> This email, either in digital or printed format, displaying your unique invitation number.</li>
        <li><strong>Valid Photo Identification:</strong> A government-issued photo ID bearing the same name used during registration.</li>
      </ol>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6;background-color:#f9fafb;border-left:4px solid #16661F;padding:12px 16px;">Please retain this email and have the required identification readily available upon arrival. Invitation numbers are non-transferable, and accreditation will be subject to verification.</p>
      <p style="margin:0;font-size:15px;line-height:1.6;">We encourage all attendees to arrive early to allow sufficient time for accreditation and transportation to the summit venue.</p>`)}

      ${section("Transportation", `
      <p style="margin:0 0 8px;font-size:15px;line-height:1.6;">Official NIMS 2026 shuttle buses will convey accredited attendees from Eagle Square to the State House Banquet Hall, Presidential Villa, Abuja, with return transportation provided at the conclusion of each day&apos;s proceedings.</p>
      <p style="margin:0;font-size:15px;line-height:1.6;">Attendees are required to use the designated shuttle services and comply with all transportation and security arrangements.</p>`)}

      ${section("Access &amp; Security", `
      <p style="margin:0;font-size:15px;line-height:1.6;">Due to the venue&apos;s security requirements, attendees must remain within designated event areas and comply with all access, movement, and security instructions throughout the summit. Movement outside authorised areas will not be permitted.</p>`)}

      ${section("NIMS 2026 Live Stream", `
      <p style="margin:0 0 12px;font-size:15px;line-height:1.6;">The summit proceedings will also be streamed live on YouTube. Feel free to share the links below with colleagues and other interested participants who wish to follow the discussions remotely.</p>
      <p style="margin:0 0 6px;font-size:15px;line-height:1.6;">Day 1 &ndash; Thursday, 15 October 2026:<br/><a href="${DAY1_STREAM}" style="color:#16661F;word-break:break-all;">${DAY1_STREAM}</a></p>
      <p style="margin:0;font-size:15px;line-height:1.6;">Day 2 &ndash; Friday, 16 October 2026:<br/><a href="${DAY2_STREAM}" style="color:#16661F;word-break:break-all;">${DAY2_STREAM}</a></p>`)}

      <p style="margin:28px 0 8px;font-size:15px;line-height:1.6;">We look forward to welcoming you to NIMS 2026.</p>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">For enquiries, please contact <a href="mailto:registration@nimsnigeria.org" style="color:#16661F;">registration@nimsnigeria.org</a>.</p>
      <p style="margin:0;font-size:15px;line-height:1.6;">Kind regards,<br/><strong>National Industrial Manpower Summit (NIMS 2026)</strong></p>
    </div>
  </div>
</body>
</html>`;

  return { to, subject, text, html };
}
