import { speakers2025 } from "@/data/speakers";
import { PageBanner } from "@/components/layout/page-banner";
import { SpeakerCarousel } from "@/components/SpeakerCarousel";
import Image from "next/image";
import { CountUp } from "@/components/CountUp";

export default function NIMS2025Page() {
  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">
    {/*  Banner Section  */}
    <PageBanner 
      title="NIMS 2025" 
      subtitle="" 
      description="Manpower Development: The Bridge Between Potential and Productivity" 
      bgImage="/images/photos/INGENIOUS_309.webp"
    />
    
    {/*  Section 1: Intro  */}
    <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Nigeria's Inaugural National Industrial Manpower Summit</h2>
                    <div className="w-24 h-1 bg-secondary mb-8"></div>
                    
                    <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                        The inaugural National Industrial Manpower Summit (NIMS) marked the beginning of a national platform dedicated to advancing industrial workforce development in Nigeria.
                    </p>
                    <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                        Convened under the Office of the Senior Special Assistant to the President on Industrial Training and Development, the summit brought together government leaders, industry stakeholders, academia, development partners and international organisations to address Nigeria's workforce challenges and explore practical solutions for industrial growth.
                    </p>
                    <p className="font-sans text-lg text-gray-700 leading-relaxed font-medium">
                        Beyond the conversations, NIMS 2025 established the foundation for long-term collaboration, informed national discussions on workforce development and reinforced the importance of human capital in driving industrial transformation.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/images/photos/INGENIOUS_208.webp" alt="NIMS 2025" className="w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] object-cover h-100" />
                </div>
            </div>
        </div>
    </section>

    {/*  Section 2: Stats at a Glance  */}
    <div className="bg-primary/5 py-16 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-12.5 flex flex-col items-center text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-2">NIMS 2025 at a Glance</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10">
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={2500} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium">Delegates</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={30} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium">Speakers</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={10} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium text-center leading-tight">Countries Represented</span>
                </div>
                <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                    <span className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2"><CountUp end={5} suffix="+" /></span>
                    <span className="font-sans text-gray-600 font-medium text-center leading-tight">Strategic MOUs Signed</span>
                </div>
            </div>
        </div>
    </div>

    {/*  Section 3: Summit Highlights  */}
    <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Summit Highlights</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-16">
                {/*  Highlight 1  */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
                    <div className="h-48 w-full bg-[url('/images/INGENIOUS_189.webp')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="p-6 bg-white flex-1 z-10">
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Presidential Leadership</h3>
                        <p className="text-gray-600 font-sans leading-relaxed">NIMS 2025 welcomed high-level government leaders, reinforcing the Federal Government's commitment to industrial workforce development and human capital as a driver of economic growth.</p>
                    </div>
                </div>
                
                {/*  Highlight 2  */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
                    <div className="h-48 w-full bg-[url('/images/photos/INGENIOUS_472.webp')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="p-6 bg-white flex-1 z-10">
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Global Collaboration</h3>
                        <p className="text-gray-600 font-sans leading-relaxed">Delegates from Nigeria and around the world came together to exchange knowledge, share best practices and strengthen international partnerships.</p>
                    </div>
                </div>

                {/*  Highlight 3  */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
                    <div className="h-48 w-full bg-[url('/images/photos/INGENIOUS_561.webp')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="p-6 bg-white flex-1 z-10">
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Meaningful Conversations</h3>
                        <p className="text-gray-600 font-sans leading-relaxed">Through keynote addresses, panel discussions and stakeholder engagements, participants explored practical solutions to Nigeria's workforce and industrial development challenges.</p>
                    </div>
                </div>

                {/*  Highlight 4  */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
                    <div className="h-48 w-full bg-[url('/images/photos/INGENIOUS_607.webp')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="p-6 bg-white flex-1 z-10">
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Strategic Partnerships</h3>
                        <p className="text-gray-600 font-sans leading-relaxed">The summit strengthened collaboration between government, industry, academia and development partners, laying the groundwork for future workforce development initiatives.</p>
                    </div>
                </div>
            </div>

            <a className="bg-primary text-white font-sans font-bold text-sm md:text-base rounded-[10px] px-8 py-3 hover:bg-green-700 transition shadow-md hover:shadow-lg inline-flex items-center gap-2" href="/gallery">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                View NIMS 2025 Gallery
            </a>
        </div>
    </section>

    {/*  Section 4: Speakers (Horizontal Scroll)  */}
    <section className="w-full bg-gray-50 py-16 md:py-24 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 mb-10 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">NIMS 2025 Speakers</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        {/*  Scrolling Container  */}
        <SpeakerCarousel speakers={speakers2025} />
    </section>
    \n  </main>\n
    </>
  );
}
