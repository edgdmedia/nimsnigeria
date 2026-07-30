import { Countdown } from "@/components/Countdown";
import { HeroSlideshow } from "@/components/layout/hero-slideshow";
import { CountUp } from "@/components/CountUp";
import { BackgroundVideo } from "@/components/BackgroundVideo";

export default function HomePage() {
  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">

    {/*  Hero Section  */}
    <div className="relative flex min-h-screen pt-24 pb-24 px-8 lg:px-12 items-center overflow-hidden" id="fefd2c2">
      <HeroSlideshow />
      <div className="absolute inset-0 bg-linear-to-r from-black/95 to-black/70 -z-10"></div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row gap-12 items-center">
        {/*  Left Col: Text Content  */}
        <div className="w-full md:w-[55%] flex flex-col justify-center gap-0">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-[53px] font-bold text-white leading-tight m-0 uppercase drop-shadow-md">NATIONAL INDUSTRIAL MANPOWER SUMMIT</h1>
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-[53px] font-semibold text-accent tracking-[2.5px] m-0 drop-shadow-md">NIMS 2026</h1>
            </div>
          <div className="flex flex-row justify-start items-center mb-4">
            <div>
              <h6 className="font-heading font-semibold tracking-[2px] text-accent m-0 uppercase text-base md:text-lg">Theme</h6>
            </div>
            <div className="w-1/3 border-t border-accent ml-4"></div>
          </div>
          <div className="mb-8">
            <h4 className="font-heading font-semibold tracking-[1.5px] text-gray-200 text-[18px] md:text-[22px] leading-tight m-0 max-w-2xl">
              Unlocking Nigeria's Human Capital for Industrial Transformation: Building Skills, Driving Innovation and Creating Prosperity
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start w-full max-w-lg mt-6">
            <a className="bg-primary text-white font-sans font-medium text-sm md:text-base rounded-full px-8 py-3.5 shadow-[0_8px_20px_-5px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
              href="/partners">
              Become a Partner
            </a>
            <a className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-sans font-medium text-sm md:text-base rounded-full px-8 py-3.5 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
              href="/about">
              Learn About NIMS
            </a>
          </div>
        </div>

        {/*  Right Col: Video  */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 relative py-12">
          {/* Decorative elements behind video */}
          <div className="absolute -inset-4 bg-linear-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse mix-blend-screen"></div>

          <div className="w-full max-w-lg rounded-4xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/20 relative z-10 group bg-black">
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

            <BackgroundVideo
              src="/videos/hero-banner.mp4"
              className="w-full h-full aspect-[10/11] md:aspect-[10/9] lg:aspect-[10/11] object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>

    {/*  Info & Action Section  */}
    <div className="relative flex flex-col -mt-40 pb-12 p-12 lg:px-12 z-20 max-w-7xl mx-auto w-full">
      <div>
        {/*  Info Card  */}
        <div
          className="flex flex-col md:flex-row bg-white rounded-[30px] shadow-[0_0_26px_-15px_rgba(134,134,134,0.5)] p-8 items-stretch">

          {/*  Left Col  */}
          <div
            className="w-full md:w-[60%] flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-4 gap-4 pb-4 md:pb-0">
            <div>
              <ul className="font-alt font-normal text-[16px] text-gray-800 flex flex-col gap-2 m-0 p-0 list-none">
                <li className="flex items-center gap-3">
                  <span className="text-primary flex items-center justify-center w-[17px] h-[17px]">
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
                      </path>
                    </svg>
                  </span>
                  <span>15th – 16th October 2026</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary flex items-center justify-center w-[17px] h-[17px]">
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                      </path>
                    </svg>
                  </span>
                  <span>State House Banquet Hall, Presidential Villa, Abuja</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full max-w-lg mt-4">
              <a className="bg-primary text-white font-sans font-medium text-sm md:text-base rounded-full px-10 py-3.5 shadow-[0_8px_20px_-5px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center"
                href="/register">
                Register
              </a>
            </div>
          </div>

          {/*  Right Col  */}
          <div className="w-full md:w-[40%] flex justify-center items-center pt-4 md:pt-0 md:pl-4">
            <div className="w-full max-w-full">
              <Countdown />
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*  Trust Bar Section  */}
    <div className="w-full bg-gray-50 py-10 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-12.5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/3">
                <h5 className="font-heading font-semibold text-gray-500 text-sm tracking-wider uppercase mb-2">Convened by</h5>
                <p className="font-sans text-gray-800 font-medium text-sm md:text-base leading-snug">
                    Office of the Senior Special Assistant to the President on Industrial Training and Development, Federal Republic of Nigeria
                </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-3 gap-6 md:gap-8 items-center justify-items-center opacity-70">
                <img src="/images/logo-5-edited.png" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
                <img src="/images/ggg-1.png" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
                <img src="/images/download-1.webp" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
                <img src="/images/whatsap-image-2025-07-10-at-9-11-03-e2-80-afpm.webp" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
                <img src="/images/cropped-boi-logo-color-01-1536x381-1-1024x254.png" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
                <img src="/images/cropped-cropped-nsitf-logo-300x297-1.png" alt="Sponsor" className="h-10 md:h-12 object-contain hover:opacity-100 transition-opacity mix-blend-multiply grayscale hover:grayscale-0" />
            </div>
        </div>
    </div>

    {/*  About NIMS Section  */}
    <div className="flex flex-col md:flex-row px-8 py-8 md:px-12.5 md:py-12.5 gap-8 max-w-7xl mx-auto w-full items-center">
        {/*  Left Content  */}
        <div className="flex flex-col flex-1 w-full justify-center">
            <h4 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900 mb-4">Where Nigeria's Industrial Workforce Comes Together</h4>
            <p className="text-gray-700 leading-relaxed font-sans mb-6 first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:text-primary first-letter:font-heading first-letter:leading-none">
                NIMS is a Presidential initiative dedicated to developing the skilled workforce needed to power Nigeria's industrial future. It brings together policymakers, business leaders, educators, investors and development partners to tackle the country's most pressing workforce challenges and create practical solutions that support industrial growth.
            </p>
            <div className="w-full sm:w-1/2">
                <a className="bg-primary text-white font-sans font-medium text-sm rounded-[10px] px-6 py-3 hover:bg-green-700 transition inline-block text-center w-fit" href="./about.html">
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
            <a href="https://facebook.com/nimsnigeria" target="_blank" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 320 512"><path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/nimsnigeria" target="_blank" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href="https://www.instagram.com/nimsnigeria" target="_blank" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://x.com/nimsnigeria" target="_blank" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-700 transition">
                <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
        </div>
    </div>
  </main>

  {/*  Clean Semantic Footer with Tailwind  */}
    </>
  );
}
