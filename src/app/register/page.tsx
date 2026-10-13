import { PageBanner } from "@/components/layout/page-banner";

export default function RegisterPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <PageBanner
        title="Register for NIMS 2026"
        description={
          <>15&ndash;16 October 2026<br />State House Banquet Hall, Presidential Villa, Abuja</>
        }
      />

      <div className="w-full bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 md:p-14 shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Registration Closed</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
              Thank you for your overwhelming interest in the National Industrial Manpower Summit 2026. Registration is now closed.
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
              Confirmed delegates have received their invitation and unique invitation number by email. Please check your inbox (and spam folder) for your check-in details.
            </p>
            <p className="font-sans text-base text-gray-600">
              For enquiries, please contact <a href="mailto:registration@nimsnigeria.org" className="text-primary font-semibold hover:underline">registration@nimsnigeria.org</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
