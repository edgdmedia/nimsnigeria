"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "#",
    children: [
      { name: "About NIMS", href: "/about" },
      { name: "NIMS 2025", href: "/nims-2025" },
      { name: "Gallery", href: "/gallery" },
    ]
  },
  { name: "Programme", href: "/programme" },

  { 
    name: "Partners", 
    href: "#",
    children: [
      { name: "Sponsors & Exhibitors", href: "/partners" },
    ]
  },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "fixed bg-white shadow-md py-0" 
          : "absolute p-4 md:p-5"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "px-5 py-3" 
            : "bg-white rounded-[20px] shadow-[0_0_33px_-8px_rgba(76.5,75.0,75.0,0.46)] px-5 py-2.5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logi.png" alt="NIMS Logo" width={47} height={47} className="w-[47px] h-auto" />
          <span className="font-sans text-[14px] md:text-[20px] font-semibold text-primary ml-2">NIMS 2026</span>
        </Link>

        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex gap-[15px]">
            {NAV_LINKS.map((link) => {
              const isActive = link.href !== "#" && pathname === link.href;
              const hasActiveChild = link.children?.some(child => pathname === child.href);
              const isItemActive = isActive || hasActiveChild;

              return (
                <li key={link.name} className="relative group">
                  <Link 
                    href={link.href} 
                    onClick={(e) => { if (link.href === "#") e.preventDefault(); }}
                    className={`font-sans font-semibold px-2 py-4 flex items-center gap-1 transition-colors ${isItemActive ? "text-primary" : "text-gray-800 hover:text-primary"}`}
                  >
                    {link.name}
                    {link.children && (
                      <svg className="w-3 h-3 text-gray-500 group-hover:text-primary transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <ul className="py-2">
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link 
                              href={child.href}
                              className={`block px-4 py-2 text-sm font-sans font-medium transition-colors hover:bg-gray-50 ${pathname === child.href ? "text-primary bg-gray-50/50" : "text-gray-700 hover:text-primary"}`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/register" className="hidden md:inline-block bg-primary text-white font-heading font-semibold rounded-[10px] px-8 py-3.5 hover:-translate-y-px transition-transform shadow-sm hover:shadow-md">
            Register
          </Link>

          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center pt-20 overflow-y-auto pb-24">
          <nav className="flex flex-col items-center gap-6 w-full px-5">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col items-center w-full">
                <Link 
                  href={link.href} 
                  onClick={(e) => { 
                    if (link.href === "#") e.preventDefault(); 
                    else setIsOpen(false);
                  }}
                  className={`font-sans font-bold text-2xl mb-2 ${link.children ? "text-gray-900" : "text-gray-900 hover:text-primary"}`}
                >
                  {link.name}
                </Link>
                
                {link.children && (
                  <div className="flex flex-col items-center gap-3 w-full bg-gray-50/80 rounded-2xl p-4 mb-2">
                    {link.children.map((child) => (
                      <Link 
                        key={child.name}
                        href={child.href}
                        className="font-sans font-medium text-lg text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/register" 
              className="mt-6 bg-primary text-white font-heading font-semibold rounded-[10px] px-8 py-3.5 text-xl shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
