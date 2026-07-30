"use client";
import { useState } from "react";
import { PageBanner } from "@/components/layout/page-banner";
import { galleryData, type GalleryCategory } from "@/data/gallery";

const FILTERS: { label: string; value: GalleryCategory }[] = [
  { label: "All",                    value: "all" },
  { label: "Keynote & Sessions",     value: "keynote" },
  { label: "Dignitaries & Guests",   value: "dignitaries" },
  { label: "Award Ceremony",         value: "awards" },
  { label: "Innovation Exhibition",  value: "exhibition" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <>
      {/*  Main Content Area  */}
  <main className="grow">
    {/*  Banner Section  */}
    <PageBanner 
      title="NIMS 2025 in Pictures"
      subtitle=""
      description="Highlights from the inaugural summit — State House Banquet Hall, Presidential Villa, Abuja"
      bgImage="/images/photos/INGENIOUS_466.webp"
      overlayImage="/images/background-1-scaled.webp"
    />
    
    {/*  Gallery Grid Section  */}
    <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-350 mx-auto px-5">

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => { setActiveFilter(f.value); setLightboxIndex(null); }}
                  className={`px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-200 border ${
                    activeFilter === f.value
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {f.label}
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === f.value ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {f.value === "all" ? galleryData.length : galleryData.filter(i => i.category === f.value).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((item, index) => (
                    <div key={item.src} onClick={() => openLightbox(index)} className="group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-[4/3] cursor-pointer">
                        <img src={`/images/photos/${item.src}`} alt={item.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            <p className="text-white font-sans font-medium text-sm drop-shadow-md">{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <a href="/nims-2025" className="inline-flex items-center gap-2 text-primary font-sans font-semibold hover:text-green-700 transition group">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    Back to NIMS 2025
                </a>
            </div>
        </div>
    </section>
    
    {lightboxIndex !== null && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
        onClick={closeLightbox}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 p-2"
          onClick={closeLightbox}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Prev Button */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
          onClick={prevImage}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        {/* Image */}
        <div className="relative max-w-5xl max-h-full w-full h-full flex flex-col items-center justify-center">
          <img 
            src={`/images/photos/${filtered[lightboxIndex].src}`} 
            alt={filtered[lightboxIndex].caption} 
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white text-center mt-4 font-sans text-lg">{filtered[lightboxIndex].caption}</p>
        </div>

        {/* Next Button */}
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
          onClick={nextImage}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    )}

  </main>
    </>
  );
}
