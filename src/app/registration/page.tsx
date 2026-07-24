import Image from "next/image";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/Button";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav transparentTop={true} />
      
      <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#16301d] via-[#204027] to-[#2b5533] flex items-center justify-center pt-[160px] px-8 pb-[110px]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
        
        <div className="relative max-w-[680px] text-center text-white z-10">
          <span className="inline-flex w-[78px] h-[78px] rounded-full bg-white items-center justify-center shadow-[0_14px_34px_rgba(0,0,0,0.3)]">
            <Image src="/assets/nims-logo.png" alt="NIMS" width={60} height={60} className="object-contain" />
          </span>
          
          <p className="font-display font-bold text-xs tracking-[0.18em] uppercase text-[#79c088] mt-6.5 mb-3">Registration</p>
          <h1 className="font-display font-black uppercase tracking-tight leading-none text-[52px] m-0">Registration Opens Soon</h1>
          
          <p className="text-[19px] leading-[1.65] text-white/85 mt-5.5">
            Delegate registration for <strong>NIMS 2026</strong> will open closer to the summit. Follow our social media channels for registration information, speaker announcements, programme updates, partnership opportunities and other important event news.
          </p>
          
          <p className="font-display font-bold text-[13px] tracking-[0.16em] uppercase text-white mt-8 mb-4">Follow NIMS</p>
          
          <div className="flex gap-3.5 justify-center">
            <a href="https://linkedin.com/company/nimsnigeria" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors">in</a>
            <a href="https://instagram.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors">IG</a>
            <a href="https://facebook.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors">f</a>
            <a href="https://x.com/nimsnigeria" target="_blank" rel="noopener noreferrer" title="X" className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors">X</a>
          </div>
          
          <div className="mt-9.5 flex gap-3.5 justify-center flex-wrap">
            <Button href="/programme" variant="accent" size="lg">
              Explore the Programme
            </Button>
            <Button href="/" variant="on-dark" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
