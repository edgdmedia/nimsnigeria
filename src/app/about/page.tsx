import { PageBanner } from "@/components/layout/page-banner";

export default function AboutPage() {
  return (
    <>
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        <PageBanner title="About the Summit" bgImage="/images/photos/INGENIOUS_485.webp" />

    {/*  Section: Nigeria's Premier Platform  */}
    <div id="content-sec" className="w-full px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center text-left">
        {/*  Left Side: Text  */}
        <div className="w-full md:w-[60%] flex flex-col">
            <h4 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-8">
                Nigeria's Premier Platform for Industrial Workforce Development
            </h4>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                The National Industrial Manpower Summit (NIMS) is a high-level Presidential initiative established under the Office of <strong className="text-gray-900 font-bold">Hon. Adamson Ayinde, the Senior Special Assistant to the President on Industrial Training & Development.</strong>
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                As Nigeria's foremost platform for industrial workforce development, NIMS convenes government leaders, industry, academia, development partners, investors and international organisations to address the country's most pressing workforce challenges and shape the future of industrial growth.
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
                NIMS is a national platform for collaboration, policy development and strategic partnerships that strengthen Nigeria's industrial workforce and position the country for sustainable economic transformation.
            </p>
        </div>
        
        {/*  Right Side: Image  */}
        <div className="w-full md:w-[40%] flex justify-center">
            <div className="w-full max-w-100 h-125 rounded-[5px] overflow-hidden shadow-xl">
                <img src="/images/INGENIOUS_485.webp" alt="Hon. Adamson Ayinde" className="w-full h-full object-cover object-center" />
            </div>
        </div>
    </div>

    {/*  Section 2: Why NIMS?  */}
    <div className="relative w-full bg-[#e8f7ee] pt-24 pb-16 md:py-24">
        {/*  Top Shape Divider  */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="block w-full h-7.5 md:h-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0 0v1.4c.6.7 1.1 1.4 1.4 2 2 3.8 2.2 6.6 1.8 10.8-.3 3.3-2.4 9.4 0 12.3 1.7 2 3.7 1.4 4.6-.9 1.4-3.8-.7-8.2-.6-12 .1-3.7 3.2-5.5 6.9-4.9 4 .6 4.8 4 4.9 7.4.1 1.8-1.1 7 0 8.5.6.8 1.6 1.2 2.4.5 1.4-1.1.1-5.4.1-6.9.1-3.7.3-8.6 4.1-10.5 5-2.5 6.2 1.6 5.4 5.6-.4 1.7-1 9.2 2.9 6.3 1.5-1.1.7-3.5.5-4.9-.4-2.4-.4-4.3 1-6.5.9-1.4 2.4-3.1 4.2-3 2.4.1 2.7 2.2 4 3.7 1.5 1.8 1.8 2.2 3 .1 1.1-1.9 1.2-2.8 3.6-3.3 1.3-.3 4.8-1.4 5.9-.5 1.5 1.1.6 2.8.4 4.3-.2 1.1-.6 4 1.8 3.4 1.7-.4-.3-4.1.6-5.6 1.3-2.2 5.8-1.4 7 .5 1.3 2.1.5 5.8.1 8.1s-1.2 5-.6 7.4c1.3 5.1 4.4.9 4.3-2.4-.1-4.4-2-8.8-.5-13 .9-2.4 4.6-6.6 7.7-4.5 2.7 1.8.5 7.8.2 10.3-.2 1.7-.8 4.6.2 6.2.9 1.4 2 1.5 2.6-.3.5-1.5-.9-4.5-1-6.1-.2-1.7-.4-3.7.2-5.4 1.8-5.6 3.5 2.4 6.3.6 1.4-.9 4.3-9.4 6.1-3.1.6 2.2-1.3 7.8.7 8.9 4.2 2.3 1.5-7.1 2.2-8 3.1-4 4.7 3.8 6.1 4.1 3.1.7 2.8-7.9 8.1-4.5 1.7 1.1 2.9 3.3 3.2 5.2.4 2.2-1 4.5-.6 6.6 1 4.3 4.4 1.5 4.4-1.7 0-2.7-3-8.3 1.4-9.1 4.4-.9 7.3 3.5 7.8 6.9.3 2-1.5 10.9 1.3 11.3 4.1.6-3.2-15.7 4.8-15.8 4.7-.1 2.8 4.1 3.9 6.6 1 2.4 2.1 1 2.3-.8.3-1.9-.9-3.2 1.3-4.3 5.9-2.9 5.9 5.4 5.5 8.5-.3 2-1.7 8.4 2 8.1 6.9-.5-2.8-16.9 4.8-18.7 4.7-1.2 6.1 3.6 6.3 7.1.1 1.7-1.2 8.1.6 9.1 3.5 2 1.9-7 2-8.4.2-4 1.2-9.6 6.4-9.8 4.7-.2 3.2 4.6 2.7 7.5-.4 2.2 1.3 8.6 3.8 4.4 1.1-1.9-.3-4.1-.3-6 0-1.7.4-3.2 1.3-4.6 1-1.6 2.9-3.5 5.1-2.9 2.5.6 2.3 4.1 4.1 4.9 1.9.8 1.6-.9 2.3-2.1 1.2-2.1 2.1-2.1 4.4-2.4 1.4-.2 3.6-1.5 4.9-.5 2.3 1.7-.7 4.4.1 6.5.6 1.5 2.1 1.7 2.8.3.7-1.4-1.1-3.4-.3-4.8 1.4-2.5 6.2-1.2 7.2 1 2.3 4.8-3.3 12-.2 16.3 3 4.1 3.9-2.8 3.8-4.8-.4-4.3-2.1-8.9 0-13.1 1.3-2.5 5.9-5.7 7.9-2.4 2 3.2-1.3 9.8-.8 13.4.5 4.4 3.5 3.3 2.7-.8-.4-1.9-2.4-10 .6-11.1 3.7-1.4 2.8 7.2 6.5.4 2.2-4.1 4.9-3.1 5.2 1.2.1 1.5-.6 3.1-.4 4.6.2 1.9 1.8 3.7 3.3 1.3 1-1.6-2.6-10.4 2.9-7.3 2.6 1.5 1.6 6.5 4.8 2.7 1.3-1.5 1.7-3.6 4-3.7 2.2-.1 4 2.3 4.8 4.1 1.3 2.9-1.5 8.4.9 10.3 4.2 3.3 3-5.5 2.7-6.9-.6-3.9 1-7.2 5.5-5 4.1 2.1 4.3 7.7 4.1 11.6 0 .8-.6 9.5 2.5 5.2 1.2-1.7-.1-7.7.1-9.6.3-2.9 1.2-5.5 4.3-6.2 4.5-1 7.7 1.5 7.4 5.8-.2 3.5-1.8 7.7-.5 11.1 1 2.7 3.6 2.8 5 .2 1.6-3.1 0-8.3-.4-11.6-.4-4.2-.2-7 1.8-10.8 0 0-.1.1-.1.2-.2.4-.3.7-.4.8v.1c-.1.2-.1.2 0 0v-.1l.4-.8c0-.1.1-.1.1-.2.2-.4.5-.8.8-1.2V0H0zM282.7 3.4z"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center gap-12 mt-8 md:mt-0">
            {/*  Left Side: Image  */}
            <div className="w-full md:w-[45%] flex justify-center">
                <div className="w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img src="/images/photos/INGENIOUS_461.webp" alt="Why NIMS" className="w-full h-full object-cover object-center" />
                </div>
            </div>

            {/*  Right Side: Text  */}
            <div className="w-full md:w-[55%] flex flex-col items-start text-left">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">Why NIMS?</h2>
                <div className="font-sans text-gray-700 leading-relaxed mb-6 space-y-4">
                    <p>
                        Nigeria is home to one of the world's largest and youngest populations, presenting an extraordinary opportunity for economic growth. Yet many industries continue to face a shortage of skilled talent, while millions of young Nigerians remain unemployed or underemployed.
                    </p>
                    <p>
                        Bridging the gap between education, skills development and industry demand is essential to building a competitive industrial economy.
                    </p>
                    <p>
                        NIMS was established to bring together the people, ideas and partnerships needed to address this challenge. Through meaningful dialogue and practical collaboration, the summit supports the development of policies, programmes and investments that strengthen industrial capability and create pathways to employment, innovation and long-term prosperity.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/*  Section 3: Vision & Mission  */}
    <div className="w-full px-5 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="relative w-full rounded-[20px] overflow-hidden flex flex-col md:flex-row p-8 md:p-12 items-stretch gap-8 md:gap-0">
            {/*  Background Image with Overlay  */}
            <div className="absolute inset-0 bg-[url('/images/pexels-thomas-parker-1272388137-24246926-scaled.webp')] bg-cover bg-top -z-20"></div>
            <div className="absolute inset-0 bg-primary opacity-85 -z-10 mix-blend-normal"></div>
            
            {/*  Left Side (Vision)  */}
            <div className="w-full md:w-1/2 text-white md:pr-12 flex flex-col justify-center">
                <h4 className="font-sans font-bold text-2xl md:text-3xl mb-4">Our Vision</h4>
                <div className="w-full border-t border-white/30 mb-6"></div>
                <p className="font-sans text-lg leading-relaxed">
                    To establish Nigeria as Africa's hub for industrial talent and innovation, with a world-class workforce capable of driving sustainable economic growth and global competitiveness.
                </p>
            </div>
            
            {/*  Divider  */}
            <div className="hidden md:block w-px bg-white/30 my-4"></div>
            <div className="block md:hidden h-px w-full bg-white/30"></div>

            {/*  Right Side (Mission)  */}
            <div className="w-full md:w-1/2 text-white md:pl-12 flex flex-col justify-center">
                <h4 className="font-sans font-bold text-2xl md:text-3xl mb-4">Our Mission</h4>
                <div className="w-full border-t border-white/30 mb-6"></div>
                <p className="font-sans text-lg leading-relaxed">
                    To convene national and international stakeholders to develop, align and implement strategies that transform Nigeria's human capital into industrial capability, creating prosperity for all Nigerians.
                </p>
            </div>
        </div>
    </div>

    {/*  Section 4: What NIMS Delivers  */}
    <div className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">What NIMS Delivers</h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                NIMS is designed to translate dialogue into measurable action. By bringing together government, industry, academia and development partners, the summit creates practical outcomes that strengthen Nigeria's industrial workforce and support long-term economic growth. Through NIMS, stakeholders work together to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/*  Card 1  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Shape workforce development policy</h5>
                </div>
                {/*  Card 2  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Advance TVET reform</h5>
                </div>
                {/*  Card 3  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Strengthen public-private collaboration</h5>
                </div>
                {/*  Card 4  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Promote investment in industrial skills</h5>
                </div>
                {/*  Card 5  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Encourage innovation and emerging technologies</h5>
                </div>
                {/*  Card 6  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <h5 className="font-sans font-bold text-lg text-gray-900">Build strategic national and international partnerships</h5>
                </div>
            </div>
        </div>
    </div>

    {/*  Section 5: Our Journey  */}
    <div className="relative w-full py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/INGENIOUS_607.webp')] bg-cover bg-center -z-20"></div>
        <div className="absolute inset-0 bg-gray-900/85 -z-10"></div>

        <div className="max-w-7xl mx-auto px-5 md:px-12 text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12">Our Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                {/*  2025  */}
                <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-sans font-bold text-4xl text-accent mb-4">2025</h3>
                    <p className="font-sans text-lg leading-relaxed text-gray-200">
                        The inaugural National Industrial Manpower Summit established NIMS as Nigeria's premier platform for industrial workforce development, bringing together delegates, policymakers, industry leaders and international partners to begin shaping a national agenda for workforce transformation.
                    </p>
                </div>
                {/*  2026  */}
                <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-sans font-bold text-4xl text-accent mb-4">2026</h3>
                    <p className="font-sans text-lg leading-relaxed text-gray-200">
                        NIMS enters its second edition with a renewed focus on implementation. Building on the momentum of the inaugural summit, this year's edition aims to strengthen partnerships, accelerate workforce development initiatives and deliver practical outcomes that support Nigeria's industrial future.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/*  Section 6: Explore NIMS  */}
    <div className="w-full bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 text-center flex flex-col items-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-2">Explore NIMS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
                {/* Card 1 */}
                <a href="/programme" className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-left">
                    <h3 className="font-heading font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors mb-3 flex items-center justify-between">
                        NIMS 2026
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </h3>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        Learn about this year's theme, programme and expected outcomes.
                    </p>
                </a>
                
                {/* Card 2 */}
                <a href="/nims-2025" className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-left">
                    <h3 className="font-heading font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors mb-3 flex items-center justify-between">
                        NIMS 2025
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </h3>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        Explore highlights, speakers, gallery and key outcomes from the inaugural summit.
                    </p>
                </a>
                
                {/* Card 3 */}
                <a href="/partners" className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-left">
                    <h3 className="font-heading font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors mb-3 flex items-center justify-between">
                        Partners & Sponsors
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </h3>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        Discover opportunities to partner with NIMS and support Nigeria's industrial transformation.
                    </p>
                </a>
            </div>
        </div>
    </div>
  </main>
    </>
  );
}
