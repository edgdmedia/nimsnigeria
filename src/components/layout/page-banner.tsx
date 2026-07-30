"use client";
import Link from "next/link";
import { useRef } from "react";
import type { ReactNode } from "react";

interface PageBannerProps {
  title: ReactNode;
  bgImage?: string;
  overlayImage?: string;
  subtitle?: ReactNode;
  description?: ReactNode;
}

export function PageBanner({
  title,
  bgImage = "/images/civil-engineering-pa6hvqgpaqfw6mgb.webp",
  overlayImage = "/images/background-1-scaled.webp",
  subtitle = "NIMS 2026",
  description,
}: PageBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  const scrollToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    if (bannerRef.current) {
      const headerOffset = 100; // Account for sticky header
      window.scrollTo({
        top: bannerRef.current.offsetHeight - headerOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div ref={bannerRef} className="relative w-full h-100 flex items-center justify-center text-center pt-18 md:pt-22">
      {/*  Background  */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      {/*  Overlay  */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-79 -z-10 mix-blend-normal"
        style={{ backgroundImage: `url(${overlayImage})` }}
      ></div>
      
      <div className="z-10 px-5 flex flex-col items-center max-w-4xl mx-auto">
        {subtitle && (
          <h6 className="font-sans font-semibold text-lg text-white mb-2 underline">
            <Link href="/">{subtitle}</Link>
          </h6>
        )}
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-white">{title}</h1>
        {description && (
          <p className="font-sans text-xl text-gray-200 mt-4">{description}</p>
        )}
      </div>

      {/*  Scroll Down Icon  */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <button onClick={scrollToContent} className="flex items-center justify-center text-white hover:text-gray-300 transition-colors animate-bounce cursor-pointer">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
