import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* BANNER */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#16301d] via-[#204027] to-[#2b5533] pt-37.5 px-8 pb-22">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088] mb-3">About NIMS</p>
            <h1 className="font-display font-black uppercase tracking-tight leading-none text-5xl md:text-[60px] text-white m-0">About the Summit</h1>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Who We Are"
                title="Nigeria's Premier Platform for Industrial Workforce Development"
              />
              <p className="text-lg leading-relaxed text-ink-800 mt-6">
                The National Industrial Manpower Summit (NIMS) is a high-level Presidential initiative established under the Office of <strong className="text-brand-dark">Hon. Adamson Ayinde, the Senior Special Assistant to the President on Industrial Training & Development.</strong>
              </p>
              <p className="text-lg leading-relaxed text-ink-800 mt-4">
                As Nigeria's foremost platform for industrial workforce development, NIMS convenes government leaders, industry, academia, development partners, investors and international organisations to address the country's most pressing workforce challenges and shape the future of industrial growth.
              </p>
              <p className="text-lg leading-relaxed text-ink-800 mt-4">
                NIMS is a national platform for collaboration, policy development and strategic partnerships that strengthen Nigeria's industrial workforce and position the country for sustainable economic transformation.
              </p>
            </div>
            <div>
              <Image 
                src="/assets/photos/INGENIOUS_485.jpg" 
                alt="NIMS delegates networking" 
                width={600} 
                height={520} 
                className="w-full h-130 object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHY */}
        <section className="py-24 px-5 bg-surface-alt">
          <div className="max-w-225 mx-auto px-5 md:px-8">
            <SectionHeading 
              eyebrow="The Challenge"
              title="Why NIMS?"
            />
            <p className="text-lg leading-relaxed text-ink-800 mt-6">
              Nigeria is home to one of the world's largest and youngest populations, presenting an extraordinary opportunity for economic growth. Yet many industries continue to face a shortage of skilled talent, while millions of young Nigerians remain unemployed or underemployed.
            </p>
            <p className="text-lg leading-relaxed text-ink-800 mt-4">
              Bridging the gap between education, skills development and industry demand is essential to building a competitive industrial economy.
            </p>
            <p className="text-lg leading-relaxed text-ink-800 mt-4">
              NIMS was established to bring together the people, ideas and partnerships needed to address this challenge. Through meaningful dialogue and practical collaboration, the summit supports the development of policies, programmes and investments that strengthen industrial capability and create pathways to employment, innovation and long-term prosperity.
            </p>
          </div>
        </section>

        {/* SECTION 3 — VISION / MISSION */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-linear-to-br from-brand-dark to-brand text-white rounded-2xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
              <div className="relative">
                <div className="w-11 h-1 bg-accent mb-6"></div>
                <h3 className="font-display font-black text-3xl uppercase tracking-tight m-0">Our Vision</h3>
                <p className="text-lg leading-relaxed text-white/90 mt-5">
                  To establish Nigeria as Africa's hub for industrial talent and innovation, with a world-class workforce capable of driving sustainable economic growth and global competitiveness.
                </p>
              </div>
            </div>
            <div className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-10 md:p-12">
              <div className="w-11 h-1 bg-brand mb-6"></div>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight m-0 text-ink-900">Our Mission</h3>
              <p className="text-lg leading-relaxed text-ink-800 mt-5">
                To convene national and international stakeholders to develop, align and implement strategies that transform Nigeria's human capital into industrial capability, creating prosperity for all Nigerians.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT NIMS DELIVERS */}
        <section className="py-24 px-5 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-205">
              <SectionHeading 
                eyebrow="Impact"
                title="What NIMS Delivers"
                intro="NIMS is designed to translate dialogue into measurable action. By bringing together government, industry, academia and development partners, the summit creates practical outcomes that strengthen Nigeria's industrial workforce and support long-term economic growth."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
              {[
                "Shape workforce development policy",
                "Advance TVET reform",
                "Strengthen public-private collaboration",
                "Promote investment in industrial skills",
                "Encourage innovation and emerging technologies",
                "Build strategic national and international partnerships"
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-lg p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-accent text-xl font-black leading-tight">✓</span>
                  <span className="text-base leading-relaxed text-ink-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — JOURNEY */}
        <section className="py-24 px-5 bg-[#16301d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-250 mx-auto px-5 md:px-8">
            <div className="text-center">
              <SectionHeading 
                eyebrow="Timeline"
                title="Our Journey"
                align="center"
                onDark={true}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <div className="bg-white/5 border border-white/10 rounded-xl p-9">
                <div className="font-display font-black text-5xl text-[#ff5a4d] leading-none">2025</div>
                <p className="text-base leading-relaxed text-white/85 mt-4">
                  The inaugural National Industrial Manpower Summit established NIMS as Nigeria's premier platform for industrial workforce development, bringing together delegates, policymakers, industry leaders and international partners to begin shaping a national agenda for workforce transformation.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 border-t-4 border-t-accent rounded-xl p-9">
                <div className="font-display font-black text-5xl text-white leading-none">2026</div>
                <p className="text-base leading-relaxed text-white/85 mt-4">
                  NIMS enters its second edition with a renewed focus on implementation. Building on the momentum of the inaugural summit, this year's edition aims to strengthen partnerships, accelerate workforce development initiatives and deliver practical outcomes that support Nigeria's industrial future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — EXPLORE */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-175 mx-auto">
              <SectionHeading 
                eyebrow="Keep Exploring"
                title="Explore NIMS"
                align="center"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Link href="/programme" className="block bg-white border border-border rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-display font-extrabold text-xl m-0 text-ink-900 group-hover:text-brand transition-colors">NIMS 2026</h3>
                <p className="text-base leading-relaxed text-ink-600 my-3">Learn about this year's theme, programme and expected outcomes.</p>
                <span className="font-display font-bold text-sm tracking-widest uppercase text-accent">View Programme &rarr;</span>
              </Link>
              <Link href="/nims-2025" className="block bg-white border border-border rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-display font-extrabold text-xl m-0 text-ink-900 group-hover:text-brand transition-colors">NIMS 2025</h3>
                <p className="text-base leading-relaxed text-ink-600 my-3">Explore highlights, speakers, gallery and key outcomes from the inaugural summit.</p>
                <span className="font-display font-bold text-sm tracking-widest uppercase text-accent">Revisit 2025 &rarr;</span>
              </Link>
              <Link href="/sponsors-exhibitors" className="block bg-white border border-border rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-display font-extrabold text-xl m-0 text-ink-900 group-hover:text-brand transition-colors">Partners & Sponsors</h3>
                <p className="text-base leading-relaxed text-ink-600 my-3">Discover opportunities to partner with NIMS and support Nigeria's industrial transformation.</p>
                <span className="font-display font-bold text-sm tracking-widest uppercase text-accent">Get Involved &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
