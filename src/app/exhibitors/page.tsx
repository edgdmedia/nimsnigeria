import { PageBanner } from "@/components/layout/page-banner";

export default function ExhibitorsPage() {
  return (
    <main className="grow">
      <PageBanner
        title="Partner with Nigeria&apos;s Premier Industrial Workforce Summit"
        description={
          <><strong>15&ndash;16 October 2026</strong><br />State House Banquet Hall, Presidential Villa, Abuja</>
        }
        bgImage="/images/INGENIOUS_607.webp"
      />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Exhibition Opportunities</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Showcase your products, services and innovations to an audience of professionals and decision-makers actively shaping Nigeria&apos;s industrial ecosystem.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h4 className="font-heading font-semibold text-xl text-gray-900 mb-6">Exhibitors will have the opportunity to:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-sans text-lg text-gray-700">Showcase products and services</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-sans text-lg text-gray-700">Demonstrate innovative solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-sans text-lg text-gray-700">Connect with prospective clients and partners</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-sans text-lg text-gray-700">Build valuable business relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-sans text-lg text-gray-700">Increase brand awareness among a targeted audience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-5">
        <div className="relative flex flex-col py-20 px-5 md:px-12.5 max-w-7xl mx-auto w-full items-center text-center rounded-[20px] overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('/images/pexels-pixabay-459728.webp')] bg-center bg-cover -z-20"></div>
          <div className="absolute inset-0 bg-primary opacity-90 -z-10"></div>

          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 z-10">Become an Exhibitor</h2>
          <div className="w-20 h-1 bg-white mb-8 mx-auto z-10"></div>

          <p className="font-sans text-lg text-gray-100 leading-relaxed mb-6 max-w-3xl z-10">
            Interested in partnering with NIMS 2026?
          </p>
          <p className="font-sans text-lg text-gray-100 leading-relaxed mb-10 max-w-3xl z-10">
            Our team will be happy to discuss exhibition packages and customised partnership options.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 z-10 w-full max-w-4xl justify-center mx-auto text-left">
            <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow-lg w-full sm:w-1/2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Email Us</h3>
              </div>
              <div className="ml-14">
                <a href="mailto:exhibition@nimsnigeria.org" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> exhibition@nimsnigeria.org</a>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow-lg w-full sm:w-1/2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Call Us</h3>
              </div>
              <div className="ml-14">
                <a href="tel:08066065900" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Dr. Bashir Taiwo: 08066065900</a>
                <a href="tel:08035870090" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Mohammed Ahmed: 08035870090</a>
                <a href="tel:08033525308" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Omotola Olateju: 08033525308</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
