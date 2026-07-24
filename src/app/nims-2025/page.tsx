import Image from "next/image";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { Button } from "@/components/ui/Button";

const speakers = [
  { name: "Distinguished Senator John Owan Enoh", role: "Minister of State for Industry", image: "/assets/speakers/john-owan-enoh.png" },
  { name: "Alhaji Mohammed Maigari Dingyadi", role: "Minister of Labour and Employment", image: "/assets/speakers/amd.png" },
  { name: "Hon. Adamson Oluwatosin Ayinde", role: "Senior Special Assistant to the President on Industrial Training & Development", image: "/assets/speakers/ssa.png" },
  { name: "Amb. Nura Abba Rimi", role: "Permanent Secretary, Federal Ministry of Industry, Trade & Investment", image: "/assets/speakers/amb-nura.png" },
  { name: "Alhaji Aliko Dangote, GCON", role: "Founder & President/CE, Dangote Group", image: "/assets/speakers/dangote.png" },
  { name: "Professor Wole Soyinka, GCON", role: "Author, Playwright & Poet", image: "/assets/speakers/wole-soyinka.png" },
  { name: "Mr. Anthony Onyemaechi Elumelu, CFR", role: "Founder & Chairman, Heirs Holdings", image: "/assets/speakers/anthony-elumelu.png" },
  { name: "Alhaji Abdul Samad Isyaku Rabiu, CFR", role: "Owner & Founder, BUA Group", image: "/assets/speakers/abdul-rabiu.png" },
  { name: "Wale Tinubu, CON", role: "Group Chief Executive, Oando PLC", image: "/assets/speakers/wale-tinubu.png" },
  { name: "Mr. Roosevelt Ogbonna, FCA, CFA", role: "MD/CEO, Access Bank Plc", image: "/assets/speakers/roosevelt-ogbonna.png" },
  { name: "Dr. Stella Chinyelu Okoli, OON", role: "Founder & GMD, Emzor Pharmaceuticals", image: "/assets/speakers/stella-okoli.png" },
  { name: "Chief Dr. Innocent I. Chukwuma, CON", role: "Founder & CEO, Innoson Vehicle Manufacturing", image: "/assets/speakers/innocent-chukwuma.png" },
  { name: "Chief (Dr.) Razaq Akanni Okoya, CON", role: "Founder, Eleganza Group", image: "/assets/speakers/razaq-okoya.png" },
  { name: "Dr. Olasupo Olusi", role: "MD/CEO, Bank of Industry (BOI)", image: "/assets/speakers/olasupo-olusi.png" },
  { name: "Dr. Zacch Adedeji", role: "Executive Chairman, FIRS", image: "/assets/speakers/zacch-adedeji.png" },
  { name: "Dr. Afiz Ogun Oluwatoyin", role: "Director-General, Industrial Training Fund (ITF)", image: "/assets/speakers/dg-itf.png" },
  { name: "Mr. Faleye Oluwaseun Mayomi", role: "MD/CEO, NSITF", image: "/assets/speakers/faleye.png" },
  { name: "Dr. Charles Odii", role: "CEO/Director-General, SMEDAN", image: "/assets/speakers/charles-odii.png" },
  { name: "Mr. Oluwemimo Joseph Osanipin", role: "Director-General, NADDC", image: "/assets/speakers/osanipin.png" },
  { name: "Bamanga Usman Jada", role: "MD/CE, Oil & Gas Free Zones Authority", image: "/assets/speakers/bamanga-jada.png" },
  { name: "Abba Abubakar Aliyu", role: "MD/CEO, Rural Electrification Agency (REA)", image: "/assets/speakers/abba-aliyu.png" },
];

export default function Nims2025Page() {
  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* BANNER */}
        <section className="relative overflow-hidden pt-[150px] px-8 pb-[88px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10301d]/94 to-[#163c25]/78 z-10"></div>
          <Image 
            src="/assets/photos/p189.jpg" 
            alt="The Inaugural Summit" 
            fill 
            className="object-cover object-center z-0" 
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none z-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-5 md:px-8 z-20">
            <p className="font-display font-bold text-xs tracking-[0.18em] uppercase text-[#79c088] mb-3.5">The Inaugural Summit</p>
            <h1 className="font-display font-black uppercase tracking-tight leading-[0.98] text-[64px] m-0 text-white">NIMS 2025</h1>
            <p className="text-xl text-white/90 mt-4.5 max-w-[640px]">Manpower Development: The Bridge Between Potential and Productivity</p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Where It Began"
                title="Nigeria's Inaugural National Industrial Manpower Summit"
              />
              <p className="text-lg leading-[1.7] text-ink-800 mt-6">
                The inaugural National Industrial Manpower Summit (NIMS) marked the beginning of a national platform dedicated to advancing industrial workforce development in Nigeria.
              </p>
              <p className="text-lg leading-[1.7] text-ink-800 mt-4">
                Convened under the Office of the Senior Special Assistant to the President on Industrial Training and Development, the summit brought together government leaders, industry stakeholders, academia, development partners and international organisations to address Nigeria's workforce challenges and explore practical solutions for industrial growth.
              </p>
              <p className="text-lg leading-[1.7] text-ink-800 mt-4">
                Beyond the conversations, NIMS 2025 established the foundation for long-term collaboration, informed national discussions on workforce development and reinforced the importance of human capital in driving industrial transformation.
              </p>
            </div>
            <div>
              <Image 
                src="/assets/photos/p414.jpg" 
                alt="NIMS 2025 plenary" 
                width={600} 
                height={520} 
                className="w-full h-[520px] object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — STATS */}
        <section className="py-24 px-5 bg-[#16301d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <SectionHeading 
                eyebrow="By the Numbers"
                title="NIMS 2025 at a Glance"
                align="center"
                onDark={true}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: "2500", label: "Delegates" },
                { val: "120", label: "Speakers" },
                { val: "10", label: "Countries Represented" },
                { val: "5", label: "Strategic MOUs Signed" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-black text-5xl text-white leading-none">
                    {stat.val}<span className="text-[#ff5a4d]">+</span>
                  </div>
                  <div className="mt-2.5 font-display font-bold text-[13px] uppercase tracking-[0.1em] text-[#79c088]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — HIGHLIGHTS */}
        <section className="py-24 px-5 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-[720px]">
              <SectionHeading 
                eyebrow="Highlights"
                title="Summit Highlights"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-11">
              {[
                { title: "Presidential Leadership", desc: "NIMS 2025 welcomed high-level government leaders, reinforcing the Federal Government's commitment to industrial workforce development and human capital as a driver of economic growth.", img: "/assets/photos/p208.jpg" },
                { title: "Global Collaboration", desc: "Delegates from Nigeria and around the world came together to exchange knowledge, share best practices and strengthen international partnerships.", img: "/assets/photos/p171.jpg" },
                { title: "Meaningful Conversations", desc: "Through keynote addresses, panel discussions and stakeholder engagements, participants explored practical solutions to Nigeria's workforce and industrial development challenges.", img: "/assets/photos/p625.jpg" },
                { title: "Strategic Partnerships", desc: "The summit strengthened collaboration between government, industry, academia and development partners, laying the groundwork for future workforce development initiatives.", img: "/assets/photos/p697.jpg" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image src={item.img} alt={item.title} width={600} height={240} className="w-full h-[240px] object-cover" />
                  <div className="p-7 md:p-8">
                    <h3 className="font-display font-extrabold text-[21px] m-0 text-ink-900">{item.title}</h3>
                    <p className="text-base leading-[1.6] text-ink-600 mt-2.5 m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-11">
              <Button href="/gallery" variant="primary" size="md">View NIMS 2025 Gallery</Button>
            </div>
          </div>
        </section>

        {/* KEYNOTE */}
        <section id="speakers" className="pt-24 pb-10 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-[720px]">
              <SectionHeading 
                eyebrow="Distinguished Voices"
                title="NIMS 2025 Speakers"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-center mt-10 bg-gradient-to-br from-[#204027] to-[#37703f] rounded-2xl overflow-hidden">
              <Image 
                src="/assets/speakers/tinubu.jpg" 
                alt="President Bola Ahmed Tinubu" 
                width={500} 
                height={480} 
                className="w-full h-full min-h-[380px] object-cover grayscale" 
              />
              <div className="py-11 pr-12 pl-2 text-white">
                <span className="inline-block bg-accent text-white font-display font-extrabold text-[11px] tracking-[0.14em] uppercase py-1.5 px-3 rounded">Keynote Address</span>
                <h3 className="font-display font-black text-3xl leading-[1.1] mt-4.5 mb-1.5">His Excellency, President Bola Ahmed Tinubu, GCFR</h3>
                <p className="text-[17px] text-white/85 m-0">President of the Federal Republic of Nigeria</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKERS CAROUSEL */}
        <section className="pt-5 pb-24 px-5 bg-white">
          <div className="flex gap-5 overflow-x-auto md:px-8 pb-8 snap-x snap-mandatory max-w-[1400px] mx-auto no-scrollbar" style={{ scrollbarWidth: "thin", scrollbarColor: "#c6c6c6 transparent" }}>
            {speakers.map((speaker, i) => (
              <div key={i} className="flex-none w-[260px] snap-start">
                <SpeakerCard {...speaker} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
