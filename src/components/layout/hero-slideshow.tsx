"use client";
import { useState, useEffect } from "react";

const SLIDES = [
  "/images/INGENIOUS_208.webp",
  "/images/INGENIOUS_414.webp",
  "/images/INGENIOUS_625.webp",
  "/images/INGENIOUS_700.webp",
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-nims-dark">
      {SLIDES.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
    </div>
  );
}
