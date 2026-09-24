import { PageBanner } from "@/components/layout/page-banner";
import { RegistrationForm } from "./registration-form";

export default function RegisterPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <PageBanner
        title="Register for NIMS 2026"
        description={
          <>15&ndash;16 October 2026 &middot; State House Banquet Hall, Presidential Villa, Abuja</>
        }
      />

      <div className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-10">
            Please complete the form below to register for the National Industrial Manpower Summit 2026.
          </p>

          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
