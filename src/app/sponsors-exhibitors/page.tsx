import Image from "next/image";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function SponsorsExhibitorsPage() {
  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* BANNER */}
        <section className="relative overflow-hidden pt-37.5 px-8 pb-22">
          <div className="absolute inset-0 bg-linear-to-br from-[#10301d]/95 to-[#163c25]/80 z-10"></div>
          <Image 
            src="/assets/photos/INGENIOUS_607.jpg" 
            alt="Strategic conversations at the summit" 
            fill 
            className="object-cover object-center z-0" 
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none z-10"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088] mb-3.5">Sponsors & Exhibitors</p>
            <h1 className="font-display font-black uppercase tracking-tight leading-none text-5xl m-0 text-white max-w-225">Partner with Nigeria's Premier Industrial Workforce Summit</h1>
            
            <div className="flex flex-wrap gap-3 mt-6.5">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white font-display font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#79c088]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                15–16 October 2026
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white font-display font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#79c088]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                State House Banquet Hall, Presidential Villa, Abuja
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 1 — SPONSORSHIP */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-190">
              <SectionHeading 
                eyebrow="Sponsorship"
                title="Sponsorship Opportunities"
                intro="Become a valued partner in delivering one of Nigeria's leading national conversations on industrial workforce development."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-11">
              {[
                { title: "Brand Visibility", desc: "Increase your organisation's visibility through prominent branding across summit communications, event materials and digital platforms." },
                { title: "Thought Leadership", desc: "Position your organisation as an industry leader through speaking opportunities, panel participation and knowledge-sharing sessions." },
                { title: "Strategic Networking", desc: "Connect directly with senior government officials, industry executives, development partners, investors and international delegates." },
                { title: "Business Development", desc: "Generate new opportunities through direct engagement with decision-makers, potential partners and prospective clients." }
              ].map((item, i) => (
                <div key={i} className="bg-surface-alt border border-border rounded-xl p-8">
                  <div className="w-11 h-1 bg-brand mb-4.5"></div>
                  <h3 className="font-display font-extrabold text-xl m-0 mb-2.5 text-ink-900">{item.title}</h3>
                  <p className="text-base leading-relaxed text-ink-600 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — EXHIBITION */}
        <section className="py-24 px-5 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading 
                eyebrow="Exhibition"
                title="Exhibition Opportunities"
              />
              <p className="text-lg leading-relaxed text-ink-800 mt-5 mb-6">
                Showcase your products, services and innovations to an audience of professionals and decision-makers actively shaping Nigeria's industrial ecosystem. Exhibitors will have the opportunity to:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Showcase products and services",
                  "Demonstrate innovative solutions",
                  "Connect with prospective clients and partners",
                  "Build valuable business relationships",
                  "Increase brand awareness among a targeted audience"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span className="text-brand font-black">✓</span>
                    <span className="text-base text-ink-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative w-full h-110">
              <Image 
                src="/assets/photos/INGENIOUS_607.jpg" 
                alt="NIMS 2025 exhibition" 
                fill 
                className="object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* 2025 PARTNERS STRIP */}
        <section className="py-16 px-5 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto text-center px-5 md:px-8">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-ink-500 mb-6.5">Trusted by our 2025 partners & exhibitors</p>
            <div className="flex flex-wrap gap-12 items-center justify-center">
              <Image src="/assets/logos/sponsor-itf.png" alt="ITF" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
              <Image src="/assets/logos/sponsor-nsitf.png" alt="NSITF" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
              <Image src="/assets/logos/sponsor-boi.png" alt="BOI" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
              <Image src="/assets/logos/exhibitor-innoson.png" alt="Innoson" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
              <Image src="/assets/logos/exhibitor-naddc.png" alt="NADDC" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
              <Image src="/assets/logos/exhibitor-smedan.png" alt="SMEDAN" width={100} height={50} className="object-contain h-12.5 grayscale opacity-70" />
            </div>
          </div>
        </section>

        {/* SECTION 3 — BECOME A SPONSOR */}
        <section className="py-24 px-5 bg-[#16301d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-225 mx-auto px-5 md:px-8 text-center text-white">
            <SectionHeading 
              eyebrow="Get Involved"
              title="Become a Sponsor or Exhibitor"
              align="center"
              onDark={true}
            />
            <p className="text-lg leading-relaxed text-white/85 max-w-160 mx-auto mt-5">
              Interested in partnering with NIMS 2026? Our team will be happy to discuss sponsorship opportunities, exhibition packages and customised partnership options.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 min-w-65 text-left">
                <div className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088]">Email</div>
                <a href="mailto:info@nimsnigeria.org" className="block text-xl font-bold text-white mt-2 hover:text-[#79c088] transition-colors">info@nimsnigeria.org</a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 min-w-65 text-left">
                <div className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088]">Telephone</div>
                <div className="mt-2.5 text-white text-base leading-relaxed">
                  Barr. Ghani Arobo — 0806 675 2120<br/>
                  Dr. Shem Ikoojo Ayegba — 0703 209 3508<br/>
                  Dr. Bashir Taiwo — 0806 606 5909
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
