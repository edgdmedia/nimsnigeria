import { PageBanner } from "@/components/layout/page-banner";

export default function PartnersPage() {
  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">
    {/*  Banner Section  */}
    <PageBanner
      title="Partner with Nigeria's Premier Industrial Workforce Summit"
      description={
        <><strong>15–16 October 2026</strong><br />State House Banquet Hall, Presidential Villa, Abuja</>
      }
      bgImage="/images/INGENIOUS_607.webp"
    />

    {/*  Section 1: Sponsorship Opportunities  */}
    <section id="sponsor-sec" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Sponsorship Opportunities</h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Become a valued partner in delivering one of Nigeria's leading national conversations on industrial workforce development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Brand Visibility</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Increase your organisation's visibility through prominent branding across summit communications, event materials and digital platforms.</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Thought Leadership</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Position your organisation as an industry leader through speaking opportunities, panel participation and knowledge-sharing sessions.</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Strategic Networking</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Connect directly with senior government officials, industry executives, development partners, investors and international delegates.</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Business Development</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Generate new opportunities through direct engagement with decision-makers, potential partners and prospective clients.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Section 2: Exhibition Opportunities (Split Column)  */}
    <section className="w-full py-8 md:py-8 bg-white ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="w-full lg:w-1/2 h-100 lg:h-auto bg-[url('/images/INGENIOUS_607.webp')] bg-cover bg-center min-h-100"></div>
            <div className="w-full lg:w-1/2 px-8 lg:px-16 py-16 flex flex-col justify-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Exhibition Opportunities</h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                Showcase your products, services and innovations to an audience of professionals and decision-makers actively shaping Nigeria's industrial ecosystem.
            </p>
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

    {/*  Section 3: Become a Sponsor (Centered Banner)  */}
    <section className="w-full py-16 md:py-24 px-5">
        <div className="relative flex flex-col py-20 px-5 md:px-12.5 max-w-7xl mx-auto w-full items-center text-center rounded-[20px] overflow-hidden shadow-xl">
            {/*  Background Image  */}
            <div className="absolute inset-0 bg-[url('/images/pexels-pixabay-459728.webp')] bg-center bg-cover -z-20"></div>
            {/*  Primary Color Overlay with 90% Opacity  */}
            <div className="absolute inset-0 bg-primary opacity-90 -z-10"></div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 z-10">Become a Sponsor or Exhibitor</h2>
            <div className="w-20 h-1 bg-white mb-8 mx-auto z-10"></div>

            <p className="font-sans text-lg text-gray-100 leading-relaxed mb-6 max-w-3xl z-10">
                Interested in partnering with NIMS 2026?
            </p>
            <p className="font-sans text-lg text-gray-100 leading-relaxed mb-10 max-w-3xl z-10">
                Our team will be happy to discuss sponsorship opportunities, exhibition packages and customised partnership options.
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
                    <a href="mailto:registration@nimsnigeria.org" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> registration@nimsnigeria.org</a>
                    <a href="mailto:sponsorship@nimsnigeria.org" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> sponsorship@nimsnigeria.org</a>
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
                <div className="ml-14"><a href="tel:08066065900" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2 "><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Dr. Bashir Taiwo: 08066065900</a>
                    <a href="tel:08035870090" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2 "><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Mohammed Ahmed: 08035870090</a>
                  <a href="tel:08033525308" className="font-sans font-medium text-gray-700 hover:text-primary transition-colors text-lg flex items-center gap-2 "><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Omotola Olateju: 08033525308</a>
                </div>
                </div>
            </div>
        </div>
    </section>

  </main>
    </>
  );
}
