"use client";
import { useRef } from "react";
import Image from "next/image";
import type { Speaker } from "@/data/speakers";

interface SpeakerCarouselProps {
  speakers: Speaker[];
}

export function SpeakerCarousel({ speakers }: SpeakerCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full pb-8">
      {/* Left Arrow */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-gray-100 hidden md:flex -ml-4"
        aria-label="Previous speakers"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      {/* Scrolling Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-5 md:px-12.5 py-4 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {speakers.map((speaker) => (
          <div key={speaker.id} className="snap-start shrink-0 w-62.5 md:w-75 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-300">
            <div className="w-full aspect-[4/5] relative bg-gray-100 overflow-hidden">
              <Image src={speaker.image} alt={speaker.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col justify-center border-t-4 border-primary">
              <h4 className="font-heading font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">{speaker.name}</h4>
              <p className="font-sans text-sm text-gray-600 line-clamp-3">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-gray-100 hidden md:flex -mr-4"
        aria-label="Next speakers"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}
