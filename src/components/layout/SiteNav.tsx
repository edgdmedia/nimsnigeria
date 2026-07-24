"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function SiteNav({ transparentTop = false }: { transparentTop?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !transparentTop || scrolled;

  const baseLinkStyle = "inline-flex items-center gap-1 cursor-pointer whitespace-nowrap px-3 py-2 font-display font-semibold text-[13.5px] uppercase tracking-[0.03em] border-b-2 transition-colors";
  
  const getLinkStyle = (path: string | string[]) => {
    const isMatch = Array.isArray(path) 
      ? path.some(p => pathname?.startsWith(p))
      : pathname === path || (path === '/' && pathname === '/');
      
    if (isMatch) {
      return `${baseLinkStyle} text-accent border-accent`;
    }
    return `${baseLinkStyle} ${isSolid ? "text-ink-800 hover:text-accent" : "text-white/90 hover:text-white"} border-transparent`;
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mobileLinkStyle = "font-display font-bold text-[19px] text-white py-3 border-b border-white/10 hover:text-accent transition-colors block w-full";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid 
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3" 
            : "bg-transparent border-b border-white/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
              <Image src="/assets/nims-logo.png" alt="NIMS" width={30} height={30} className="object-contain md:w-10 md:h-10" />
            </span>
            <span className={`font-display font-black text-lg md:text-[21px] tracking-tight ${isSolid ? 'text-ink-900' : 'text-white'}`}>
              NIMS<span className="text-accent">2026</span>
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`h-0.5 w-6 rounded-full transition-colors ${isSolid ? 'bg-ink-900' : 'bg-white'}`}></span>
            <span className={`h-0.5 w-6 rounded-full transition-colors ${isSolid ? 'bg-ink-900' : 'bg-white'}`}></span>
            <span className={`h-0.5 w-6 rounded-full transition-colors ${isSolid ? 'bg-ink-900' : 'bg-white'}`}></span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={getLinkStyle("/")}>Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link href="/about" className={getLinkStyle(["/about", "/nims-2025", "/gallery"])}>
                About <span className="text-[10px] opacity-70 ml-1">▼</span>
              </Link>
              
              {aboutOpen && (
                <div className="absolute top-full left-0 min-w-[210px] bg-white border border-border border-t-4 border-t-accent shadow-lg rounded-b-md p-2 flex flex-col pt-3">
                  <Link href="/about" className={dropItemStyle}>About NIMS</Link>
                  <Link href="/nims-2025" className={dropItemStyle}>NIMS 2025</Link>
                  <Link href="/gallery" className={dropItemStyle}>Gallery</Link>
                </div>
              )}
            </div>
            
            <Link href="/programme" className={getLinkStyle("/programme")}>Programme</Link>
            <Link href="/nims-2025" className={getLinkStyle("/nims-2025")}>Speakers</Link>
            <Link href="/sponsors-exhibitors" className={getLinkStyle("/sponsors-exhibitors")}>Sponsors & Exhibitors</Link>
            
            <div className="ml-4">
              <Button 
                href="/registration" 
                variant={isSolid ? "accent" : "on-dark"}
                size="sm"
              >
                Register
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-deep text-white p-5 md:p-8 flex flex-col lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="font-display font-black text-xl tracking-tight text-white">
              NIMS<span className="text-accent">2026</span>
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Close" 
              className="w-11 h-11 border border-white/30 bg-white/5 text-white text-2xl rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              ×
            </button>
          </div>
          
          <nav className="flex flex-col gap-1 mt-9">
            <Link href="/" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>About NIMS</Link>
            <Link href="/nims-2025" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>NIMS 2025</Link>
            <Link href="/gallery" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/programme" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Programme</Link>
            <Link href="/nims-2025#speakers" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Speakers</Link>
            <Link href="/sponsors-exhibitors" className={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Sponsors & Exhibitors</Link>
          </nav>
          
          <div className="mt-8 mb-safe">
            <Button href="/registration" variant="accent" size="lg" className="w-full text-center">
              Register
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
