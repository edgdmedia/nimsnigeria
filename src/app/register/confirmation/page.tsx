import { PageBanner } from "@/components/layout/page-banner";

export const metadata = {
  title: "Registration Received | NIMS 2026",
};

export default function RegisterConfirmationPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <PageBanner title="Registration Received" />

      <div className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Thank you for registering for the National Industrial Manpower Summit (NIMS 2026).
          </h2>

          <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-6 text-left">
            <p>
              Please note that <strong>registration does not automatically confirm attendance.</strong>{" "}
              Due to limited capacity and the high-security nature of the venue, attendance is
              subject to invitation and confirmation by the NIMS team.
            </p>
            <p>
              If you are invited to attend, you will receive an invitation and further information
              via the email address provided during registration. If you do not receive further
              communication from the NIMS team, your registration should not be considered a
              confirmation of attendance.
            </p>
            <p>
              Further information will be shared with invited delegates closer to the event,
              including the access instructions and on-site logistics.
            </p>
            <p>
              For enquiries, please contact{" "}
              <a href="mailto:registration@nimsnigeria.org" className="text-primary font-semibold hover:underline">
                registration@nimsnigeria.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
