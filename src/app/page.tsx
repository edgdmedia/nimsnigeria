import Image from "next/image";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export default function Home() {
  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-brand-deep min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            {/* We can use a single hero image or implement the slider later. For now, one image */}
            <Image 
              src="/assets/photos/p414.jpg" 
              alt="Hero background" 
              fill 
              className="object-cover grayscale opacity-30" 
              priority 
            />
          </div>
          
          <div className="absolute inset-0 z-10 bg-linear-to-br from-brand-deep/90 via-brand-dark/80 to-brand/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none z-10"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 w-full pt-16 pb-24">
            <div className="max-w-250">
              <h1 className="font-display font-black uppercase tracking-tight leading-[0.98] text-5xl md:text-6xl text-white">
                National Industrial Manpower Summit <span className="text-accent">2026</span>
              </h1>
            </div>
            
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.04fr] gap-8 lg:gap-14 items-center mt-6 lg:mt-14">
              <div className="w-full">
                <p className="text-[15px] lg:text-lg leading-relaxed text-white/90 mb-2 lg:mb-8">
                  <span className="font-display font-bold tracking-widest text-[11px] lg:text-xs uppercase text-[#79c088] block mb-1.5 lg:mb-2">Theme</span>
                  Unlocking Nigeria's Human Capital for Industrial Transformation: Building Skills, Driving Innovation and Creating Prosperity
                </p>
                
                {/* Video - Mobile Only (inserted between Theme and Date/Venue) */}
                <div className="relative mt-5 mb-5 lg:hidden">
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-2 border-white/90 bg-black aspect-video">
                    <iframe 
                      src="https://www.youtube.com/embed/xnuup7rmxMA?autoplay=1&mute=1&loop=1&playlist=xnuup7rmxMA&controls=1&modestbranding=1&rel=0" 
                      title="NIMS 2025 recap" 
                      frameBorder="0" 
                      allow="autoplay; encrypted-media; picture-in-picture" 
                      allowFullScreen 
                      className="absolute inset-0 w-full h-full border-0"
                    ></iframe>
                  </div>
                  <div className="absolute z-20 -bottom-3 -left-3 bg-accent text-white px-3 py-2 rounded-md shadow-lg font-display font-extrabold text-[10px] tracking-widest uppercase">
                    Relive NIMS 2025
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2.5 md:gap-4 md:px-5 md:py-4 rounded-lg md:bg-white/10 md:border md:border-white/20 text-white font-display font-bold text-[13.5px] lg:text-[14px] tracking-wide w-full">
                  <span className="flex items-center gap-2.5 p-3 rounded-lg bg-white/10 border border-white/20 md:bg-transparent md:border-0 md:p-0 w-full md:w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#79c088] shrink-0"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> 15–16 October 2026</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden md:block shrink-0"></span>
                  <span className="flex items-start gap-2.5 p-3 rounded-lg bg-white/10 border border-white/20 md:bg-transparent md:border-0 md:p-0 w-full md:w-auto leading-[1.4]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#79c088] shrink-0 mt-0.5 md:mt-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> <span>State House Banquet Hall,<br className="md:hidden"/> Presidential Villa, Abuja</span></span>
                </div>
                
                <div className="mt-8 hidden md:block">
                  <CountdownTimer label="Counting down to the summit" onDark={true} />
                </div>
                
                <div className="flex flex-col md:flex-row gap-2.5 md:gap-4 mt-5 md:mt-8 w-full">
                  <div className="w-full md:w-auto"><Button href="/sponsors-exhibitors" variant="accent" size="lg" className="w-full justify-center">Become a Partner</Button></div>
                  <div className="w-full md:w-auto"><Button href="/about" variant="on-dark" size="lg" className="w-full justify-center">Learn About NIMS</Button></div>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0 hidden lg:block">
                <div className="absolute -inset-4 border border-white/20 rounded-2xl z-0 hidden lg:block"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/90 bg-black aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/xnuup7rmxMA?autoplay=1&mute=1&loop=1&playlist=xnuup7rmxMA&controls=1&modestbranding=1&rel=0" 
                    title="NIMS 2025 recap" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media; picture-in-picture" 
                    allowFullScreen 
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="absolute z-20 -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-accent text-white px-5 py-3 rounded-lg shadow-lg font-display font-extrabold text-[13px] tracking-widest uppercase">
                  Relive NIMS 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR SECTION */}
        <section className="bg-surface-alt border-b border-border py-12 px-5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-display font-bold text-xs tracking-[0.18em] uppercase text-ink-500 m-0">Convened by</p>
            <p className="text-base text-ink-700 max-w-205 mx-auto mt-3 leading-relaxed">Office of the Senior Special Assistant to the President on Industrial Training and Development, Federal Republic of Nigeria</p>
            
            <div className="flex flex-wrap gap-12 items-center justify-center mt-8 opacity-90">
              <Image src="/assets/logos/sponsor-itf.png" alt="ITF" width={100} height={52} className="object-contain h-13 grayscale opacity-75" />
              <Image src="/assets/logos/sponsor-nsitf.png" alt="NSITF" width={100} height={52} className="object-contain h-13 grayscale opacity-75" />
              <Image src="/assets/logos/sponsor-boi.png" alt="BOI" width={100} height={52} className="object-contain h-13 grayscale opacity-75" />
              <Image src="/assets/logos/ggg-1.png" alt="Partner" width={100} height={52} className="object-contain h-13 grayscale opacity-75" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-shell bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="About NIMS" 
                title="Where Nigeria's Industrial Workforce Comes Together" 
                intro="NIMS is a Presidential initiative dedicated to developing the skilled workforce needed to power Nigeria's industrial future. It brings together policymakers, business leaders, educators, investors and development partners to tackle the country's most pressing workforce challenges and create practical solutions that support industrial growth."
              />
              <div className="mt-8">
                <Button href="/about" variant="primary" size="md">Learn About NIMS</Button>
              </div>
            </div>
            
            <div className="relative">
              <Image src="/assets/photos/INGENIOUS_485.jpg" alt="NIMS 2025 delegates" width={600} height={480} className="w-full h-120 object-cover rounded-xl shadow-lg" />
              <div className="absolute -bottom-6 -left-6 bg-brand text-white p-6 rounded-xl shadow-xl max-w-57.5">
                <div className="font-display font-black text-4xl leading-none">2026</div>
                <div className="text-[13px] tracking-widest uppercase mt-2 text-white/85">The vision, in execution</div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section-shell bg-surface-alt">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-205 mx-auto text-center">
              <SectionHeading 
                eyebrow="NIMS 2025 at a Glance"
                title="Building on a Strong Foundation"
                intro="The inaugural National Industrial Manpower Summit established NIMS as a national platform for industrial workforce development, bringing together key stakeholders from across Nigeria and around the world to shape the future of industrial skills and human capital."
                align="center"
              />
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { val: "2500", label: "Delegates" },
                { val: "120", label: "Speakers" },
                { val: "10", label: "Countries Represented" },
                { val: "5", label: "Strategic MOUs Signed" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-border border-t-[3px] border-t-accent rounded-lg p-8 text-center shadow-sm">
                  <div className="font-display font-black text-5xl text-brand-dark leading-none">
                    {stat.val}<span className="text-accent">+</span>
                  </div>
                  <div className="mt-4 font-display font-bold text-sm uppercase tracking-widest text-ink-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/nims-2025" variant="secondary" size="md">NIMS 2025 Highlights</Button>
            </div>
          </div>
        </section>

        {/* QUOTE BANNER */}
        <section className="relative py-32 px-8">
          <div className="absolute inset-0 bg-linear-to-br from-[#10301d]/82 to-[#10301d]/86 z-10"></div>
          <Image 
            src="/assets/photos/p368.jpg" 
            alt="Networking" 
            fill 
            className="object-cover object-center fixed z-0" 
          />
          <div className="relative z-20 max-w-250 mx-auto text-center text-white">
            <div className="font-display text-8xl leading-none text-accent font-black">"</div>
            <p className="font-display font-bold text-4xl leading-[1.28] tracking-tight m-0">
              We are no longer introducing the concept. We are executing the vision.
            </p>
            <p className="mt-7 text-base tracking-[0.04em] text-white/80">
              — Hon. Adamson Ayinde, Senior Special Assistant to the President on Industrial Training & Development
            </p>
          </div>
        </section>

        {/* NIMS 2026 */}
        <section id="programme" className="section-shell bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-205">
              <SectionHeading 
                eyebrow="From Dialogue to Action"
                title="NIMS 2026"
              />
              <p className="text-lg leading-[1.7] text-ink-800 mt-6">
                This year's summit builds on the momentum of the inaugural edition with a stronger focus on implementation, collaboration and measurable impact. Under the theme <strong>"Unlocking Nigeria's Human Capital for Industrial Transformation,"</strong> NIMS 2026 will explore practical strategies for developing the workforce needed to support industrialisation, innovation and long-term economic prosperity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {[
                { num: "01", title: "National Industrial Workforce Strategy", desc: "A comprehensive 10-year roadmap for developing Nigeria's industrial talent." },
                { num: "02", title: "Policy Recommendations", desc: "Actionable recommendations to inform workforce development, TVET reform and industrial skills policy." },
                { num: "03", title: "Strategic Partnerships", desc: "New collaborations between government, industry, academia and international development partners." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-8 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-[#eef4ef] text-brand flex items-center justify-center font-display font-black text-xl">
                    {item.num}
                  </div>
                  <h3 className="font-display font-extrabold text-[21px] mt-5 mb-2.5 text-ink-900">{item.title}</h3>
                  <p className="text-base leading-[1.6] text-ink-600 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-9">
              <span className="text-base text-ink-500 italic">… and more</span>
              <div className="flex-1 h-px bg-border"></div>
              <Button href="/programme" variant="primary" size="md">Explore NIMS 2026</Button>
            </div>
          </div>
        </section>

        {/* SPEAKERS COMING SOON */}
        <section id="speakers" className="section-shell bg-[#16301d] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-250 mx-auto text-center text-white">
            <SectionHeading 
              eyebrow="Speakers"
              title="Distinguished Voices, Coming Soon"
              align="center"
              onDark={true}
            />
            <p className="text-lg leading-[1.7] text-white/85 max-w-180 mx-auto mt-6">
              We're curating a distinguished lineup of national and international speakers for NIMS 2026. Confirmed speakers will be announced in the lead-up to the summit. In the meantime, explore the leaders, policymakers and industry experts who contributed to the success of our inaugural summit.
            </p>
            <div className="mt-8">
              <Button href="/nims-2025" variant="on-dark" size="md">View NIMS 2025 Speakers</Button>
            </div>
          </div>
        </section>

        {/* PARTNER CTA */}
        <section id="partner" className="section-shell bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image src="/assets/photos/p208.jpg" alt="NIMS 2025 partnership" width={600} height={440} className="w-full h-110 object-cover rounded-xl shadow-xl" />
            </div>
            <div>
              <SectionHeading 
                eyebrow="Partnership"
                title="Partner With NIMS"
              />
              <p className="text-lg leading-[1.7] text-ink-800 mt-6">
                NIMS provides organisations with a unique opportunity to engage directly with policymakers, industry leaders, investors, development partners and the wider industrial ecosystem.
              </p>
              <p className="text-lg leading-[1.7] text-ink-800 mt-4">
                Whether you're looking to showcase innovation, build strategic relationships or support workforce development, NIMS offers meaningful partnership opportunities with lasting national impact.
              </p>
              <div className="mt-8">
                <Button href="/sponsors-exhibitors" variant="accent" size="lg">View Partnership Opportunities</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FOLLOW / STAY CONNECTED */}
        <section className="py-24 px-5 bg-surface-alt border-t border-border">
          <div className="max-w-190 mx-auto text-center">
            <SectionHeading 
              eyebrow="Stay Connected"
              title="The Journey to NIMS 2026 Has Begun"
              align="center"
            />
            <p className="text-lg leading-[1.7] text-ink-800 mt-5">
              Follow NIMS for speaker announcements, programme updates, partnership opportunities and the latest news as we count down to this year's summit.
            </p>
            <div className="flex gap-3.5 justify-center mt-7">
              <a href="https://linkedin.com/company/nimsnigeria" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-12 h-12 rounded-full border border-ink-300 flex items-center justify-center font-display font-bold text-brand bg-white hover:bg-surface-alt transition-colors">in</a>
              <a href="https://instagram.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-12 h-12 rounded-full border border-ink-300 flex items-center justify-center font-display font-bold text-brand bg-white hover:bg-surface-alt transition-colors">IG</a>
              <a href="https://facebook.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-12 h-12 rounded-full border border-ink-300 flex items-center justify-center font-display font-bold text-brand bg-white hover:bg-surface-alt transition-colors">f</a>
              <a href="https://x.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="X" className="w-12 h-12 rounded-full border border-ink-300 flex items-center justify-center font-display font-bold text-brand bg-white hover:bg-surface-alt transition-colors">X</a>
            </div>
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </>
  );
}
