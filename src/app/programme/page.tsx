import { PageBanner } from "@/components/layout/page-banner";

export default function ProgrammePage() {
  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">
    {/*  Banner Section  */}
    <PageBanner 
      title="What to Expect at NIMS 2026" 
      bgImage="/images/photos/INGENIOUS_700.webp"
    />
    
    {/*  Section 1: Intro  */}
    <section id="intro-sec" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
            <p className="font-sans text-md md:text-lg text-gray-700 leading-relaxed font-medium">
                <strong>The National Industrial Manpower Summit (NIMS) 2026</strong> will take place on <strong>15–16 October 2026</strong> at the <strong>State House Banquet Hall, Presidential Villa, Abuja</strong>.<br /><br />
                Bringing together government, industry, academia, development partners and international stakeholders, the two-day summit will explore practical solutions to Nigeria's workforce and industrial development challenges.
            </p>
        </div>
    </section>

    {/*  Section 2: Expected Deliverables (Cards)  */}
    <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Expected Deliverables</h2>
                <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Card 1  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">National Industrial Workforce Strategy</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">A comprehensive 10-year roadmap to guide the development of Nigeria's industrial talent, align workforce planning with national priorities and strengthen long-term industrial competitiveness.</p>
                </div>
                {/*  Card 2  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Policy Recommendations</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Actionable recommendations to inform workforce development, Technical and Vocational Education and Training (TVET) reform, industrial skills policy and broader human capital development.</p>
                </div>
                {/*  Card 3  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Strategic Partnerships</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">New collaborations between government, industry, academia and development partners that accelerate workforce development, knowledge exchange and industrial innovation.</p>
                </div>
                {/*  Card 4  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">International Collaboration</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Stronger partnerships with international governments, multilateral organisations, development agencies and global industry leaders to share best practices, encourage investment and strengthen Nigeria's position within the global industrial ecosystem.</p>
                </div>
                {/*  Card 5  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Investment Frameworks</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Practical frameworks that encourage investment in workforce development, skills infrastructure, innovation and industrial capacity-building across priority sectors.</p>
                </div>
                {/*  Card 6  */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Sector Roadmaps</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">Industry-specific roadmaps that identify emerging workforce needs, critical skills gaps and collaborative opportunities across key sectors of Nigeria's economy.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Section 3: Who Should Attend  */}
    <section className="w-full bg-primary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Who Should Attend?</h2>
                <div className="w-20 h-1 bg-accent mb-6"></div>
                <p className="font-sans text-lg text-gray-200 leading-relaxed">
                    NIMS 2026 welcomes stakeholders from across Nigeria and around the world who are committed to strengthening industrial workforce development.
                </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Government Ministries, Departments and Agencies</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Manufacturers and Industry Leaders</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Small and Medium-Sized Enterprises (SMEs)</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Academic and Research Institutions</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">TVET and Skills Development Organisations</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Development Partners</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">International Organisations</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Investors and Financial Institutions</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20 md:col-span-2">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-sans text-lg">Young Professionals and Emerging Leaders</span>
                </div>
            </div>
        </div>
    </section>

    {/*  Section 4: Programme Overview (Table)  */}
    <section className="hidden w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Programme Overview</h2>
                <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm md:hidden">
                <div className="border-b border-gray-200 bg-gray-50 p-6 text-gray-900">
                    <span className="text-secondary block mb-1 text-sm uppercase tracking-wider">Day 1</span>
                    <h3 className="font-heading font-bold text-xl">Thursday 15</h3>
                </div>
                <div className="bg-white p-6">
                    <div className="mb-8">
                        <h4 className="font-bold text-primary mb-4 text-lg">Presidential Opening & National Dialogue</h4>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-semibold mb-4">MORNING</span>
                        <ul className="space-y-4 font-sans text-gray-700">
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Presidential Opening Ceremony</strong>
                                His Excellency, President Bola Ahmed Tinubu, GCFR
                            </li>
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Presidential Keynote Address</strong>
                                "Unlocking Nigeria's Human Capital for Industrial Transformation"
                            </li>
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Industry Keynote — Aliko Dangote</strong>
                                "Building a World-Class Industrial Workforce"
                            </li>
                            <li className="pl-4 border-l-2 border-secondary font-semibold">Official Opening</li>
                            <li className="pl-4 border-l-2 border-secondary font-semibold">Industrial Innovation & Technology Exhibition</li>
                        </ul>
                    </div>

                    <div>
                        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold mb-4">AFTERNOON</span>
                        <ul className="space-y-4 font-sans text-gray-700">
                            <li className="pl-4 border-l-2 border-gray-300">Technical Paper I: Reimagining Nigeria's Industrial Workforce Development System</li>
                            <li className="pl-4 border-l-2 border-gray-300">Technical Paper II: AI, Advanced Manufacturing & Future Technologies</li>
                            <li className="pl-4 border-l-2 border-gray-300">Executive Plenary Panel: The State of Nigeria's Industrial Workforce</li>
                            <li className="pl-4 border-l-2 border-gray-300">Exhibition Tour & Industrial Innovation Showcase</li>
                            <li className="pl-4 border-l-2 border-gray-300 font-semibold text-primary mt-6">Networking Reception</li>
                        </ul>
                    </div>
                </div>

                <div className="border-y border-gray-200 bg-gray-50 p-6 text-gray-900">
                    <span className="text-secondary block mb-1 text-sm uppercase tracking-wider">Day 2</span>
                    <h3 className="font-heading font-bold text-xl">Friday 16</h3>
                </div>
                <div className="bg-white p-6">
                    <div className="mb-8">
                        <h4 className="font-bold text-primary mb-4 text-lg">Innovation, Implementation & Commitments</h4>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-semibold mb-4">MORNING</span>
                        <ul className="space-y-4 font-sans text-gray-700">
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Technology & Innovation Keynote — Ridwan Olalere, CEO LemFi</strong>
                                "Preparing Nigeria's Workforce for the Global Digital Economy"
                            </li>
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Entrepreneurship & Human Capital Keynote — Tony Elumelu, CFR</strong>
                                "From Skills to Prosperity: Building Entrepreneurs & Industries"
                            </li>
                            <li className="pl-4 border-l-2 border-secondary">Technical Paper III: From Skills to Industrial Prosperity</li>
                            <li className="pl-4 border-l-2 border-secondary">
                                <strong className="block text-gray-900">Strategic Roundtable Discussions</strong>
                                Four parallel sessions on the summit sub-themes
                            </li>
                        </ul>
                    </div>

                    <div>
                        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold mb-4">AFTERNOON</span>
                        <ul className="space-y-4 font-sans text-gray-700">
                            <li className="pl-4 border-l-2 border-gray-300">Presentation of Roundtable Reports</li>
                            <li className="pl-4 border-l-2 border-gray-300">National Policy Dialogue & Investment Matchmaking</li>
                            <li className="pl-4 border-l-2 border-gray-300">Partnership & Collaboration Signing Ceremony</li>
                            <li className="pl-4 border-l-2 border-gray-300">Presentation of Summit Outcomes</li>
                            <li className="pl-4 border-l-2 border-gray-300">Adoption of NIMS 2026 Communiqué</li>
                            <li className="pl-4 border-l-2 border-gray-300 font-semibold text-primary mt-6">Gala Night & Awards Ceremony</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hidden overflow-hidden rounded-xl border border-gray-200 shadow-sm md:block">
                <table className="w-full text-left border-collapse md:table">
                    <thead className="md:table-header-group">
                        <tr className="md:table-row bg-gray-50 text-gray-900 border-b border-gray-200">
                            <th className="md:table-cell p-6 font-heading font-bold text-xl w-1/2 border-r border-gray-200">
                                <span className="text-secondary block mb-1 text-sm uppercase tracking-wider">Day 1</span>
                                Thursday 15
                            </th>
                            <th className="md:table-cell p-6 font-heading font-bold text-xl w-1/2">
                                <span className="text-secondary block mb-1 text-sm uppercase tracking-wider">Day 2</span>
                                Friday 16
                            </th>
                        </tr>
                    </thead>
                    <tbody className="md:table-row-group align-top">
                        <tr className="md:table-row">
                            <td className="md:table-cell p-6 border-r border-gray-200 bg-white align-top">
                                <div className="mb-8">
                                    <h4 className="font-bold text-primary mb-4 text-lg">Presidential Opening & National Dialogue</h4>
                                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-semibold mb-4">MORNING</span>
                                    <ul className="space-y-4 font-sans text-gray-700">
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Presidential Opening Ceremony</strong>
                                            His Excellency, President Bola Ahmed Tinubu, GCFR
                                        </li>
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Presidential Keynote Address</strong>
                                            "Unlocking Nigeria's Human Capital for Industrial Transformation"
                                        </li>
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Industry Keynote — Aliko Dangote</strong>
                                            "Building a World-Class Industrial Workforce"
                                        </li>
                                        <li className="pl-4 border-l-2 border-secondary font-semibold">Official Opening</li>
                                        <li className="pl-4 border-l-2 border-secondary font-semibold">Industrial Innovation & Technology Exhibition</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold mb-4">AFTERNOON</span>
                                    <ul className="space-y-4 font-sans text-gray-700">
                                        <li className="pl-4 border-l-2 border-gray-300">Technical Paper I: Reimagining Nigeria's Industrial Workforce Development System</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Technical Paper II: AI, Advanced Manufacturing & Future Technologies</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Executive Plenary Panel: The State of Nigeria's Industrial Workforce</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Exhibition Tour & Industrial Innovation Showcase</li>
                                        <li className="pl-4 border-l-2 border-gray-300 font-semibold text-primary mt-6">Networking Reception</li>
                                    </ul>
                                </div>
                            </td>
                            <td className="md:table-cell p-6 bg-white w-1/2 align-top">
                                <div className="mb-8">
                                    <h4 className="font-bold text-primary mb-4 text-lg">Innovation, Implementation & Commitments</h4>
                                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-semibold mb-4">MORNING</span>
                                    <ul className="space-y-4 font-sans text-gray-700">
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Technology & Innovation Keynote — Ridwan Olalere, CEO LemFi</strong>
                                            "Preparing Nigeria's Workforce for the Global Digital Economy"
                                        </li>
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Entrepreneurship & Human Capital Keynote — Tony Elumelu, CFR</strong>
                                            "From Skills to Prosperity: Building Entrepreneurs & Industries"
                                        </li>
                                        <li className="pl-4 border-l-2 border-secondary">Technical Paper III: From Skills to Industrial Prosperity</li>
                                        <li className="pl-4 border-l-2 border-secondary">
                                            <strong className="block text-gray-900">Strategic Roundtable Discussions</strong>
                                            Four parallel sessions on the summit sub-themes
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold mb-4">AFTERNOON</span>
                                    <ul className="space-y-4 font-sans text-gray-700">
                                        <li className="pl-4 border-l-2 border-gray-300">Presentation of Roundtable Reports</li>
                                        <li className="pl-4 border-l-2 border-gray-300">National Policy Dialogue & Investment Matchmaking</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Partnership & Collaboration Signing Ceremony</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Presentation of Summit Outcomes</li>
                                        <li className="pl-4 border-l-2 border-gray-300">Adoption of NIMS 2026 Communiqué</li>
                                        <li className="pl-4 border-l-2 border-gray-300 font-semibold text-primary mt-6">Gala Night & Awards Ceremony</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    
    {/*  Section 5: Programme Schedule CTA  */}
    <section className="w-full bg-gray-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">Full Agenda Coming Soon</h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                The detailed programme, including keynote speakers, panel discussions, breakout sessions and networking events, will be announced closer to the summit.<br /><br />
                Stay connected for updates as the agenda is finalised.
            </p>
            <div className="flex gap-4 justify-center">
                <a href="https://facebook.com/nimsnigeria" target="_blank" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                    <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 320 512"><path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/company/nimsnigeria" target="_blank" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                    <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </a>
                <a href="https://www.instagram.com/nimsnigeria" target="_blank" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                    <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                <a href="https://x.com/nimsnigeria" target="_blank" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                    <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                </a>
            </div>
        </div>
    </section>
    
  </main>
    </>
  );
}
