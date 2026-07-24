"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

const galleryImages = [
  { id: 0, cat: "dignitaries", src: "/assets/photos/p208.jpg", caption: "Dignitaries at the inaugural summit" },
  { id: 1, cat: "sessions", src: "/assets/photos/p189.jpg", caption: "On stage at NIMS 2025" },
  { id: 2, cat: "sessions", src: "/assets/photos/p700.jpg", caption: "Opening session at the Presidential Villa" },
  { id: 3, cat: "dignitaries", src: "/assets/photos/p120.jpg", caption: "Guests and special invitees at the summit" },
  { id: 4, cat: "sessions", src: "/assets/photos/p414.jpg", caption: "The State House Banquet Hall during NIMS 2025" },
  { id: 5, cat: "dignitaries", src: "/assets/photos/p171.jpg", caption: "Arrival of dignitaries and industry leaders" },
  { id: 6, cat: "sessions", src: "/assets/photos/p625.jpg", caption: "Delegates during a plenary session" },
  { id: 7, cat: "dignitaries", src: "/assets/photos/p697.jpg", caption: "Strategic conversations at the summit" },
  { id: 8, cat: "exhibition", src: "/assets/photos/p131.jpg", caption: "Industrial innovation on display" },
  { id: 9, cat: "exhibition", src: "/assets/photos/p357.jpg", caption: "Government and industry stakeholders" },
  { id: 10, cat: "exhibition", src: "/assets/photos/p368.jpg", caption: "Networking at NIMS 2025" },
  { id: 11, cat: "dignitaries", src: "/assets/photos/p193.jpg", caption: "Delegates at the Presidential Villa" },
  { id: 12, cat: "dignitaries", src: "/assets/photos/p126.jpg", caption: "Conversations on the sidelines" },
  { id: 13, cat: "sessions", src: "/assets/photos/p155.jpg", caption: "Moments from the inaugural summit" },
  { id: 14, cat: "dignitaries", src: "/assets/photos/p79.jpg", caption: "Stakeholders at NIMS 2025" },
  { id: 15, cat: "dignitaries", src: "/assets/photos/p53.jpg", caption: "Industry leaders at the summit" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = galleryImages.filter(img => filter === "all" || img.cat === filter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <SiteNav transparentTop={true} />
      
      <main>
        {/* BANNER */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#16301d] via-[#204027] to-[#2b5533] pt-37.5 px-8 pb-20.5">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.10)_1.2px,transparent_1.2px)] [background-size:26px_26px] pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-[#79c088] mb-3.5">Gallery</p>
            <h1 className="font-display font-black uppercase tracking-tight leading-none text-5xl md:text-[60px] text-white m-0">NIMS 2025 in Pictures</h1>
          </div>
        </section>

        {/* PROSPECTUS-STYLE GRID */}
        <section className="pt-18 pb-22 px-5 bg-surface-alt">
          <div className="max-w-320 mx-auto px-5 md:px-8">
            <div>
              <h2 className="font-display font-extrabold text-4xl tracking-tight text-[#204027] m-0">NIMS 2025 in Pictures</h2>
              <div className="w-24 h-1 bg-[#e0912a] my-3.5"></div>
              <p className="text-base text-ink-600 m-0">Highlights from the inaugural summit — State House Banquet Hall, Presidential Villa, Abuja</p>
            </div>
            
            <div className="flex gap-7 overflow-x-auto whitespace-nowrap mt-7 border-b border-border pb-1 no-scrollbar">
              <button 
                onClick={() => setFilter("all")} 
                className={`font-display font-bold text-sm tracking-wider uppercase py-1.5 px-0.5 border-b-2 transition-colors ${filter === "all" ? "text-accent border-accent" : "text-ink-500 border-transparent hover:text-brand"}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter("dignitaries")} 
                className={`font-display font-bold text-sm tracking-wider uppercase py-1.5 px-0.5 border-b-2 transition-colors ${filter === "dignitaries" ? "text-accent border-accent" : "text-ink-500 border-transparent hover:text-brand"}`}
              >
                Dignitaries & Guests
              </button>
              <button 
                onClick={() => setFilter("sessions")} 
                className={`font-display font-bold text-sm tracking-wider uppercase py-1.5 px-0.5 border-b-2 transition-colors ${filter === "sessions" ? "text-accent border-accent" : "text-ink-500 border-transparent hover:text-brand"}`}
              >
                Sessions & Awards
              </button>
              <button 
                onClick={() => setFilter("exhibition")} 
                className={`font-display font-bold text-sm tracking-wider uppercase py-1.5 px-0.5 border-b-2 transition-colors ${filter === "exhibition" ? "text-accent border-accent" : "text-ink-500 border-transparent hover:text-brand"}`}
              >
                Innovation Exhibition
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 transition-opacity duration-300">
              {filteredImages.map((img, index) => (
                <button 
                  key={img.id} 
                  onClick={() => openLightbox(index)}
                  className="relative block w-full overflow-hidden bg-black rounded group aspect-[16/10]"
                >
                  <Image 
                    src={img.src} 
                    alt={img.caption} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]" 
                  />
                  <span className="absolute inset-x-0 bottom-0 pt-8 pb-3 px-4 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold text-left">
                    {img.caption}
                  </span>
                </button>
              ))}
            </div>
            
            <p className="text-sm text-ink-500 mt-8">Moments from the inaugural National Industrial Manpower Summit, August 2025, Presidential Villa, Abuja.</p>
          </div>
        </section>
      </main>

      {/* LIGHTBOX */}
      {lightboxOpen && filteredImages.length > 0 && (
        <div 
          onClick={closeLightbox} 
          className="fixed inset-0 z-[200] bg-[#08100c]/90 backdrop-blur-md flex items-center justify-center p-10"
        >
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-7 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            ×
          </button>
          
          {filteredImages.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ‹
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ›
              </button>
            </>
          )}
          
          <div onClick={(e) => e.stopPropagation()} className="max-w-275 w-full text-center">
            <div className="relative w-full h-[78vh] mx-auto rounded-lg overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <Image 
                src={filteredImages[currentIndex].src} 
                alt={filteredImages[currentIndex].caption} 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="text-white text-base mt-5 font-semibold">
              {filteredImages[currentIndex].caption}
            </p>
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  );
}
