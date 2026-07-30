import { Countdown } from "@/components/Countdown";
import { CountUp } from "@/components/CountUp";
import { HeroSlideshow } from "@/components/layout/hero-slideshow";
import { BackgroundVideo } from "@/components/BackgroundVideo";

export default function HomePage() {
  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">

    {/*  Hero Section  */}
    <div className="relative flex min-h-[100vh] flex-row p-8 lg:p-12 items-center overflow-hidden" id="fefd2c2">
      <HeroSlideshow />
      {/*  Overlay - Darker gradient for better text readability  */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 -z-10 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto w-full z-10 pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/*  Hero Text Content (Left Column)  */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center z-10">

            {/* Main Titles */}
            <div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[53px] font-bold text-white leading-tight m-0 uppercase drop-shadow-md">NATIONAL INDUSTRIAL MANPOWER SUMMIT</h1>
          </div>
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-[53px] font-semibold text-accent tracking-[2.5px] m-0 drop-shadow-md">NIMS 2026</h1>
          </div>

            {/* Theme Block (Glassmorphic) */}
            <div className="relative pl-6 py-2 mb-10 border-l-4 border-accent bg-gradient-to-r from-white/10 to-transparent rounded-r-2xl backdrop-blur-sm pr-6">
              <h6 className="font-heading font-bold tracking-[0.15em] text-accent/90 uppercase text-xs mb-2">Theme</h6>
              <h4 className="font-sans font-medium text-gray-100 text-lg md:text-xl leading-relaxed m-0 drop-shadow-md">
                Unlocking Nigeria's Human Capital for Industrial Transformation: <span className="font-semibold text-white">Building Skills, Driving Innovation and Creating Prosperity</span>
              </h4>
            </div>

            {/* Event Info (Badges) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-inner">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                   <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                </div>
                <div>
                  <p className="text-white font-sans text-sm font-semibold">15–16 Oct 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-inner">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                   <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                </div>
                <div>
                  <p className="text-white font-sans text-sm font-semibold line-clamp-1">State House Banquet Hall, Abuja</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-5 items-center mb-3">
              <a className="bg-primary text-white font-sans font-bold text-sm md:text-base rounded-full px-10 py-4 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] hover:bg-green-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.6)] transition-all duration-300 w-full sm:w-auto text-center border border-green-500/50" href="/partners">
                Become a Partner
              </a>
              <a className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-sans font-semibold text-sm md:text-base rounded-full px-10 py-4 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group" href="/about">
                Learn About NIMS
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>

            {/* Countdown Integration */}
            <div className="w-full pt-4 border-t border-white/10 mt-auto">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3 ml-1">Event Starts In</p>
              <Countdown />
            </div>


          </div>

          {/*  Hero Video (Right Column)  */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 relative">
            {/* Decorative elements behind video */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse mix-blend-screen"></div>

            <div className="w-full max-w-lg rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/20 relative z-10 group bg-black">
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

              <BackgroundVideo
                src="/videos/IMG_0403-compressed.mp4"
                className="w-full h-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  Trust Bar Section  */}
    <section className="bg-gray-50 border-b border-gray-200 py-12 px-5 z-20 relative">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 m-0">Convened by</p>
        <p className="text-base text-gray-700 max-w-2xl mx-auto mt-3 leading-relaxed">
          Office of the Senior Special Assistant to the President on Industrial Training and Development, Federal Republic of Nigeria
        </p>
        <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center mt-8 opacity-90">
          <img src="/images/logo-5-edited.png" alt="ITF" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
          <img src="/images/cropped-cropped-nsitf-logo-300x297-1.png" alt="NSITF" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
          <img src="/images/cropped-boi-logo-color-01-1536x381-1-1024x254.png" alt="BOI" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
          <img src="/images/ggg-1.png" alt="Partner" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
          <img src="/images/download-1.webp" alt="Partner" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
          <img src="/images/whatsap-image-2025-07-10-at-9-11-03-e2-80-afpm.webp" alt="Partner" className="object-contain h-12  opacity-75 hover:grayscale hover:opacity-100 transition-all mix-blend-multiply" />
        </div>
      </div>
    </section>

    {/*  About NIMS Section  */}
    <div className="flex flex-col md:flex-row px-8 py-8 md:px-12.5 md:py-12.5 gap-8 max-w-7xl mx-auto w-full items-center">
        {/*  Left Content  */}
        <div className="flex flex-col flex-1 w-full justify-center">
            <h4 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900 mb-4">Where Nigeria's Industrial Workforce Comes Together</h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6 first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:text-primary first-letter:font-heading first-letter:leading-none">
                NIMS is a Presidential initiative dedicated to developing the skilled workforce needed to power Nigeria's industrial future. It brings together policymakers, business leaders, educators, investors and development partners to tackle the country's most pressing workforce challenges and create practical solutions that support industrial growth.
            </p>
            <div className="w-full sm:w-1/2">
                <a className="bg-primary text-white font-sans font-medium text-sm rounded-[10px] px-6 py-3 hover:bg-green-700 transition inline-block text-center w-fit" href="/about">
                    Learn About NIMS
                </a>
            </div>
        </div>
        {/*  Right Image  */}
        <div className="hidden md:flex flex-1 rounded-[20px] bg-[url('/images/INGENIOUS_208.webp')] bg-cover bg-center min-h-75">
        </div>
    </div>

    {/*  Stats Section  */}
    <div className="bg-primary/5 py-16 w-full">
        <div className="max-w-7xl mx-auto px-8 md:px-12.5 flex flex-col items-center text-center">
            <h4 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900 mb-2">Building on a Strong Foundation</h4>
            <h6 className="font-sans text-primary font-medium tracking-widest uppercase text-sm mb-6">NIMS 2025 at a Glance</h6>
            <p className="font-sans text-gray-700 max-w-3xl mb-12">
                The inaugural National Industrial Manpower Summit established NIMS as a national platform for industrial workforce development, bringing together key stakeholders from across Nigeria and around the world to shape the future of industrial skills and human capital.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10">
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={2500} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium">Delegates</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={120} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium">Speakers</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={10} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium text-center leading-tight">Countries Represented</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={5} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium text-center leading-tight">Strategic MOUs Signed</span>
                </div>
            </div>

            <a className="bg-primary text-white font-sans font-medium text-sm md:text-base rounded-[10px] px-8 py-3 hover:bg-green-700 transition inline-block shadow-md hover:shadow-lg" href="./nims-2025.html">
                NIMS 2025 Highlights
            </a>
        </div>
    </div>
    {/*  Quote Banner Section  */}
    <div className="relative w-full py-24 px-8 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/INGENIOUS_368.webp')] bg-cover bg-center bg-fixed -z-20"></div>
        <div className="absolute inset-0 bg-black/70 -z-10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto z-10">
            <h3 className="font-heading font-medium italic text-3xl md:text-5xl text-white mb-6 leading-tight">
                “We are no longer introducing the concept. We are executing the vision.”
            </h3>
            <p className="font-sans text-lg md:text-xl text-accent font-medium uppercase tracking-wide">
                — Hon. Adamson Ayinde
            </p>
            <p className="font-sans text-sm md:text-base text-gray-300 mt-2">
                Senior Special Assistant to the President on Industrial Training & Development
            </p>
        </div>
    </div>

    {/*  NIMS 2026 Deliverables Section  */}
    <div className="relative flex flex-col lg:flex-row px-8 py-16 md:py-24 md:px-12.5 gap-12 max-w-7xl mx-auto w-full items-start">
        {/*  Left Col (Intro)  */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <h2 className="font-heading font-bold text-[35px] md:text-[50px] leading-tight text-gray-900 mb-2">
                NIMS 2026
            </h2>
            <h4 className="font-heading font-semibold text-[20px] md:text-[25px] text-primary mb-6">
                From Dialogue to Action
            </h4>
            <p className="font-sans text-gray-700 leading-relaxed mb-6">
                This year's summit builds on the momentum of the inaugural edition with a stronger focus on implementation, collaboration and measurable impact.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed font-medium mb-8">
                Under the theme <strong>"Unlocking Nigeria's Human Capital for Industrial Transformation: Building Skills, Driving Innovation and Creating Prosperity,"</strong> NIMS 2026 will explore practical strategies for developing the workforce needed to support industrialisation, innovation and long-term economic prosperity.
            </p>
            <div>
                <a className="bg-primary text-white font-sans font-medium text-sm md:text-base rounded-[10px] px-8 py-3 hover:bg-green-700 transition shadow-md inline-block" href="./schedule.html">
                    Explore NIMS 2026
                </a>
            </div>
        </div>

        {/*  Right Col (Deliverables)  */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6 pt-2">
            <h5 className="font-sans font-semibold text-lg text-gray-800 border-b border-gray-200 pb-2 mb-2">Expected deliverables include:</h5>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 border-l-4 border-l-primary">
                <h6 className="font-heading font-semibold text-xl text-gray-900 mb-2">National Industrial Workforce Strategy</h6>
                <p className="font-sans text-gray-600">A comprehensive 10-year roadmap for developing Nigeria's industrial talent.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 border-l-4 border-l-primary">
                <h6 className="font-heading font-semibold text-xl text-gray-900 mb-2">Policy Recommendations</h6>
                <p className="font-sans text-gray-600">Actionable recommendations to inform workforce development, TVET reform and industrial skills policy.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 border-l-4 border-l-primary">
                <h6 className="font-heading font-semibold text-xl text-gray-900 mb-2">Strategic Partnerships</h6>
                <p className="font-sans text-gray-600">New collaborations between government, industry, academia and international development partners.</p>
            </div>

            <p className="font-sans text-gray-500 italic mt-2">… and more</p>
        </div>
    </div>
    {/*  Speaker Coming Soon Section  */}
    <div className="bg-primary/5 flex flex-col md:flex-row px-8 py-16 md:py-24 md:px-12.5 gap-12  mx-auto w-full items-center">
        {/*  Left Col (Image)  */}
        <div className="w-full md:w-[45%] flex justify-center">
            <img src="/images/INGENIOUS_697.webp" alt="Distinguished Speakers" className="w-full h-87.5 md:h-112.5 object-cover rounded-[20px] shadow-lg" />
        </div>

        {/*  Right Col (Content)  */}
        <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 mb-6">Distinguished Voices, Coming Soon</h2>
            <div className="w-37.5 border-t-2 border-primary mb-6"></div>
            <p className="font-sans text-lg text-gray-700 mb-4 leading-relaxed">
                We're curating a distinguished lineup of national and international speakers for NIMS 2026. Confirmed speakers will be announced in the lead-up to the summit.
            </p>
            <p className="font-sans text-lg text-gray-700 mb-10 leading-relaxed">
                In the meantime, explore the leaders, policymakers and industry experts who contributed to the success of our inaugural summit.
            </p>
            <a className="bg-primary text-white font-sans font-medium text-sm md:text-base rounded-[10px] px-8 py-3 hover:bg-green-700 transition shadow-md inline-block" href="./speakers.html">
                View NIMS 2025 Speakers
            </a>
        </div>
    </div>

    {/*  Meet the Leaders Section (Hidden per client request)  */}
    <div className="hidden flex-col py-12 md:py-12.5 px-5 md:px-12.5 max-w-7xl mx-auto w-full items-center bg-gray-50">
        <h2 className="text-center font-heading font-semibold text-3xl md:text-4xl text-gray-900 mb-6">Meet the Leaders Shaping Nigeria’s Industrial Future</h2>
        <div className="w-71.5 border-t border-black mb-6"></div>
        <h5 className="text-center font-sans text-lg md:text-xl text-gray-800 mb-12">From trailblazing entrepreneurs to global policy experts, NIMS 2025 brings together a powerhouse lineup of speakers.</h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {/*  Speaker 1  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/abba-abubakar-aliyu.png" alt="Abba Abubakar Aliyu" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Abba Abubakar Aliyu</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">MD/CEO, Rural Electrification Agency (REA)</p>
            </div>
            {/*  Speaker 2  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/wale.png" alt="Wale Tinubu, CON" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Wale Tinubu, CON</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">Group Chief Executive, Oando PLC</p>
            </div>
            {/*  Speaker 3  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/6.png" alt="Mr. Roosevelt Ogbonna FCA, CFA" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Mr. Roosevelt Ogbonna FCA, CFA</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">MD/CEO, Access Bank Plc.</p>
            </div>
            {/*  Speaker 4  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/zaaa.png" alt="Dr. Zacch Adedeji" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Dr. Zacch Adedeji</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">Executive Chairman, Federal Inland Revenue Service(FIRS)</p>
            </div>
            {/*  Speaker 5  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/9.png" alt="Amb Nura Abba Rimi" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Amb Nura Abba Rimi</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">Permanent Secretary, Federal Ministry of Industry, Trade and Investment, Federal Republic of Nigeria.</p>
            </div>
            {/*  Speaker 6  */}
            <div className="flex flex-col items-center bg-transparent md:bg-white p-5 rounded-[10px] md:shadow-sm md:hover:shadow-md transition-shadow">
                <img src="/images/bambam.png" alt="Bamanga Usman Jada" className="w-full max-w-75 aspect-square object-cover rounded-[10px] mb-4" />
                <div className="w-31.5 border-t border-black my-4"></div>
                <h6 className="text-center font-heading font-semibold text-lg md:text-xl text-primary">Bamanga Usman Jada</h6>
                <p className="text-center font-sans text-[14px] font-medium text-[#278645] mt-1">Managing Director and Chief Executive, Oil and Gas Free Zones Authority Nigeria</p>
            </div>
        </div>
    </div>
    {/*  Partner With NIMS Section  */}
    <div className="relative flex flex-col py-20 px-5 md:px-12.5 max-w-7xl mx-auto w-full items-center text-center rounded-[20px] overflow-hidden my-12">
        {/*  Background Image  */}
        <div className="absolute inset-0 bg-[url('/images/pexels-pixabay-459728.webp')] bg-center bg-cover -z-20"></div>
        {/*  Primary Color Overlay with 90% Opacity  */}
        <div className="absolute inset-0 bg-primary opacity-90 -z-10"></div>

        <h3 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-4 z-10">Partner With NIMS</h3>
        <div className="w-25 border-t-2 border-white mb-6 mx-auto z-10"></div>
        <p className="font-sans text-lg text-white mb-4 max-w-3xl leading-relaxed z-10">
            NIMS provides organisations with a unique opportunity to engage directly with policymakers, industry leaders, investors, development partners and the wider industrial ecosystem.
        </p>
        <p className="font-sans text-lg text-white mb-10 max-w-3xl leading-relaxed z-10">
            NIMS offers meaningful partnership opportunities with lasting national impact, whether you're looking to showcase innovation, build strategic relationships or support workforce development.
        </p>
        <a className="bg-white text-primary font-sans font-bold text-sm md:text-base rounded-[10px] px-8 py-3 hover:bg-gray-100 transition inline-block z-10 shadow-lg" href="./sponsors.html">
            View Partnership Opportunities
        </a>
    </div>


    {/*  Stay Connected Section  */}
    <div className="flex flex-col items-center justify-center bg-gray-50 py-16 px-5 w-full border-t border-gray-200 mt-12 text-center">
        <h3 className="font-heading font-semibold text-3xl text-gray-900 mb-4">Stay Connected</h3>
        <div className="w-20 border-t-2 border-primary mb-6 mx-auto"></div>
        <p className="font-sans text-lg text-gray-900 mb-4 font-semibold">
            The journey to NIMS 2026 has begun.
        </p>
        <p className="font-sans text-base text-gray-600 mb-8 max-w-2xl">
            Follow NIMS for speaker announcements, programme updates, partnership opportunities and the latest news as we count down to this year's summit.
        </p>
        <div className="flex items-center gap-4">
            <span className="font-heading font-semibold text-gray-800">Follow NIMS:</span>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
        </div>
    </div>
  </main>

  {/*  Clean Semantic Footer with Tailwind  */}
    </>
  );
}
