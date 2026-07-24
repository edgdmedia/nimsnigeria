import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white font-body">
      <div className="max-w-7xl mx-auto px-5 py-14 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Image src="/assets/nims-logo.png" alt="NIMS" width={46} height={46} className="object-contain" />
            </span>
            <span className="font-display font-black text-2xl tracking-tight text-white">
              NIMS<span className="text-accent">2026</span>
            </span>
          </div>
          <p className="text-white/70 max-w-sm leading-relaxed mb-6">
            National Industrial Manpower Summit — a Presidential Initiative for Industrial Growth, under the Office of the Senior Special Assistant to the President on Industrial Training &amp; Development.
          </p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/company/nimsnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center font-display font-bold text-white hover:bg-white/10 transition-colors" title="LinkedIn">in</a>
            <a href="https://instagram.com/nimsnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center font-display font-bold text-white hover:bg-white/10 transition-colors" title="Instagram">IG</a>
            <a href="https://facebook.com/nimsnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center font-display font-bold text-white hover:bg-white/10 transition-colors" title="Facebook">f</a>
            <a href="https://x.com/nimsnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center font-display font-bold text-white hover:bg-white/10 transition-colors" title="X">X</a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-[#79c088] text-sm uppercase tracking-widest mb-4 font-display">Explore</h4>
          <div className="flex flex-col gap-3">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">About NIMS</Link>
            <Link href="/nims-2025" className="text-white/80 hover:text-white transition-colors">NIMS 2025</Link>
            <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link>
            <Link href="/programme" className="text-white/80 hover:text-white transition-colors">Programme</Link>
            <Link href="/sponsors-exhibitors" className="text-white/80 hover:text-white transition-colors">Sponsors &amp; Exhibitors</Link>
          </div>
        </div>

        {/* Summit Info */}
        <div>
          <h4 className="text-[#79c088] text-sm uppercase tracking-widest mb-4 font-display">Summit</h4>
          <div className="flex flex-col gap-3 text-white/80">
            <span>15–16 October 2026</span>
            <span>State House Banquet Hall,<br/>Presidential Villa, Abuja</span>
            <Link href="/registration" className="text-white font-display font-bold mt-1 hover:text-accent transition-colors">Register &rarr;</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 px-5 text-center text-white/55 text-sm">
        © 2026 National Industrial Manpower Summit. All Rights Reserved.
      </div>
    </footer>
  );
}
