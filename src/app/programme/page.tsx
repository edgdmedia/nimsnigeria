import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ProgrammePage() {
  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* BANNER */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#16301d] via-[#204027] to-[#2b5533] pt-37.5 px-8 pb-22">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088] mb-3">Programme</p>
            <h1 className="font-display font-black uppercase tracking-tight leading-none text-5xl md:text-[58px] text-white max-w-225 m-0">What to Expect at NIMS 2026</h1>
            <div className="flex flex-wrap gap-3 mt-7">
              <span className="inline-flex items-center px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white font-display font-bold text-sm">15–16 October 2026</span>
              <span className="inline-flex items-center px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white font-display font-bold text-sm">State House Banquet Hall, Presidential Villa, Abuja</span>
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="pt-24 pb-12 px-5 bg-white">
          <div className="max-w-225 mx-auto px-5 md:px-8">
            <p className="text-xl leading-relaxed text-ink-800 m-0">
              <strong className="text-brand-dark font-semibold">The National Industrial Manpower Summit (NIMS) 2026 will take place on 15–16 October 2026 at the State House Banquet Hall, Presidential Villa, Abuja.</strong> Bringing together government, industry, academia, development partners and international stakeholders, the two-day summit will explore practical solutions to Nigeria's workforce and industrial development challenges.
            </p>
          </div>
        </section>

        {/* SECTION 2 — DELIVERABLES */}
        <section className="py-16 pb-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-180">
              <SectionHeading 
                eyebrow="Outcomes"
                title="Expected Deliverables"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
              {[
                { num: "01", title: "National Industrial Workforce Strategy", desc: "A comprehensive 10-year roadmap to guide the development of Nigeria's industrial talent, align workforce planning with national priorities and strengthen long-term industrial competitiveness." },
                { num: "02", title: "Policy Recommendations", desc: "Actionable recommendations to inform workforce development, Technical and Vocational Education and Training (TVET) reform, industrial skills policy and broader human capital development." },
                { num: "03", title: "Strategic Partnerships", desc: "New collaborations between government, industry, academia and development partners that accelerate workforce development, knowledge exchange and industrial innovation." },
                { num: "04", title: "International Collaboration", desc: "Stronger partnerships with international governments, multilateral organisations, development agencies and global industry leaders to share best practices, encourage investment and strengthen Nigeria's position within the global industrial ecosystem." },
                { num: "05", title: "Investment Frameworks", desc: "Practical frameworks that encourage investment in workforce development, skills infrastructure, innovation and industrial capacity-building across priority sectors." },
                { num: "06", title: "Sector Roadmaps", desc: "Industry-specific roadmaps that identify emerging workforce needs, critical skills gaps and collaborative opportunities across key sectors of Nigeria's economy." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border border-t-[3px] border-t-accent rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-display font-black text-lg text-brand mb-3">{item.num}</div>
                  <h3 className="font-display font-extrabold text-xl m-0 text-ink-900 mb-2.5">{item.title}</h3>
                  <p className="text-base leading-relaxed text-ink-600 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHO SHOULD ATTEND */}
        <section className="py-24 px-5 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
            <div>
              <SectionHeading 
                eyebrow="Audience"
                title="Who Should Attend?"
              />
              <p className="text-lg leading-relaxed text-ink-800 mt-5">
                NIMS 2026 welcomes stakeholders from across Nigeria and around the world who are committed to strengthening industrial workforce development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Government Ministries, Departments & Agencies",
                "Manufacturers and Industry Leaders",
                "Small and Medium-Sized Enterprises (SMEs)",
                "Academic and Research Institutions",
                "TVET and Skills Development Organisations",
                "Development Partners",
                "International Organisations",
                "Investors and Financial Institutions",
                "Young Professionals and Emerging Leaders"
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-lg px-5 py-4 flex gap-3 items-center shadow-sm">
                  <span className="text-accent font-black">✓</span>
                  <span className="text-base text-ink-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — PROGRAMME OVERVIEW */}
        <section className="py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="max-w-180">
              <SectionHeading 
                eyebrow="Two Days"
                title="Programme Overview"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-11">
              {/* Day 1 */}
              <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-linear-to-br from-[#204027] to-[#37703f] text-white p-7 md:p-8">
                  <div className="font-display font-black text-sm tracking-widest uppercase text-[#79c088]">Day 1 · Thursday 15</div>
                  <div className="font-display font-black text-2xl mt-2">Presidential Opening & National Dialogue</div>
                </div>
                <div className="p-7 md:p-8 bg-white">
                  <div className="font-display font-extrabold text-xs tracking-widest uppercase text-accent mb-3">Morning</div>
                  <ul className="list-disc pl-5 mb-6 text-base leading-relaxed text-ink-800 marker:text-ink-300">
                    <li className="pl-1 mb-1">Presidential Opening Ceremony — H.E. President Bola Ahmed Tinubu, GCFR</li>
                    <li className="pl-1 mb-1">Presidential Keynote: "Unlocking Nigeria's Human Capital for Industrial Transformation"</li>
                    <li className="pl-1 mb-1">Industry Keynote — Aliko Dangote: "Building a World-Class Industrial Workforce"</li>
                    <li className="pl-1">Official Opening — Industrial Innovation & Technology Exhibition</li>
                  </ul>
                  
                  <div className="font-display font-extrabold text-xs tracking-widest uppercase text-accent mb-3">Afternoon</div>
                  <ul className="list-disc pl-5 text-base leading-relaxed text-ink-800 marker:text-ink-300">
                    <li className="pl-1 mb-1">Technical Paper I: Reimagining Nigeria's Industrial Workforce Development System</li>
                    <li className="pl-1 mb-1">Technical Paper II: AI, Advanced Manufacturing & Future Technologies</li>
                    <li className="pl-1 mb-1">Executive Plenary Panel: The State of Nigeria's Industrial Workforce</li>
                    <li className="pl-1 mb-1">Exhibition Tour & Industrial Innovation Showcase</li>
                    <li className="pl-1">Networking Reception</li>
                  </ul>
                </div>
              </div>

              {/* Day 2 */}
              <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-linear-to-br from-[#16301d] to-[#204027] text-white p-7 md:p-8">
                  <div className="font-display font-black text-sm tracking-widest uppercase text-[#79c088]">Day 2 · Friday 16</div>
                  <div className="font-display font-black text-2xl mt-2">Innovation, Implementation & Commitments</div>
                </div>
                <div className="p-7 md:p-8 bg-white">
                  <div className="font-display font-extrabold text-xs tracking-widest uppercase text-accent mb-3">Morning</div>
                  <ul className="list-disc pl-5 mb-6 text-base leading-relaxed text-ink-800 marker:text-ink-300">
                    <li className="pl-1 mb-1">Technology & Innovation Keynote — Ridwan Olalere, CEO LemFi: "Preparing Nigeria's Workforce for the Global Digital Economy"</li>
                    <li className="pl-1 mb-1">Entrepreneurship & Human Capital Keynote — Tony Elumelu, CFR: "From Skills to Prosperity: Building Entrepreneurs & Industries"</li>
                    <li className="pl-1 mb-1">Technical Paper III: From Skills to Industrial Prosperity</li>
                    <li className="pl-1">Strategic Roundtable Discussions — four parallel sessions on the summit sub-themes</li>
                  </ul>
                  
                  <div className="font-display font-extrabold text-xs tracking-widest uppercase text-accent mb-3">Afternoon</div>
                  <ul className="list-disc pl-5 text-base leading-relaxed text-ink-800 marker:text-ink-300">
                    <li className="pl-1 mb-1">Presentation of Roundtable Reports</li>
                    <li className="pl-1 mb-1">National Policy Dialogue & Investment Matchmaking</li>
                    <li className="pl-1 mb-1">Partnership & Collaboration Signing Ceremony</li>
                    <li className="pl-1 mb-1">Presentation of Summit Outcomes & Adoption of NIMS 2026 Communiqué</li>
                    <li className="pl-1">Gala Night & Awards Ceremony</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — SCHEDULE COMING SOON */}
        <section className="pt-20 pb-24 px-5 bg-surface-alt">
          <div className="max-w-205 mx-auto bg-white border border-border border-t-4 border-t-accent rounded-2xl p-10 md:p-14 text-center shadow-sm">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-brand m-0">Programme Schedule</p>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-ink-900 mt-3.5 mb-0">Full Agenda Coming Soon</h3>
            <p className="text-lg leading-relaxed text-ink-600 max-w-150 mx-auto mt-4 mb-0">
              The detailed programme — including keynote speakers, panel discussions, breakout sessions and networking events — will be announced closer to the summit. Stay connected for updates as the agenda is finalised.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/registration" variant="accent" size="md">
                Stay Connected
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
