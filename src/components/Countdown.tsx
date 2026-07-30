"use client";
import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target date: October 15, 2026
    const targetDate = new Date("2026-10-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return (
    <div className="flex gap-2 w-full justify-between">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-primary rounded-[10px] py-2 sm:py-3 md:py-7.5 px-1 sm:px-2 flex flex-col items-center flex-1">
          <span className="text-accent font-alt text-xl sm:text-2xl md:text-[30px] font-normal leading-none">00</span>
          <span className="text-white font-serif text-[8px] md:text-[13px] uppercase mt-1">-</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="bg-primary rounded-[10px] py-2 sm:py-3 md:py-7.5 px-1 sm:px-2 flex flex-col items-center flex-1">
        <span className="text-accent font-alt text-xl sm:text-2xl md:text-[30px] font-normal leading-none">{timeLeft.days}</span>
        <span className="text-white font-serif text-[8px] md:text-[13px] uppercase mt-1">Days</span>
      </div>
      <div className="bg-primary rounded-[10px] py-2 sm:py-3 md:py-7.5 px-1 sm:px-2 flex flex-col items-center flex-1">
        <span className="text-accent font-alt text-xl sm:text-2xl md:text-[30px] font-normal leading-none">{timeLeft.hours}</span>
        <span className="text-white font-serif text-[8px] md:text-[13px] uppercase mt-1">Hours</span>
      </div>
      <div className="bg-primary rounded-[10px] py-2 sm:py-3 md:py-7.5 px-1 sm:px-2 flex flex-col items-center flex-1">
        <span className="text-accent font-alt text-xl sm:text-2xl md:text-[30px] font-normal leading-none">{timeLeft.minutes}</span>
        <span className="text-white font-serif text-[8px] md:text-[13px] uppercase mt-1">Minutes</span>
      </div>
      <div className="bg-primary rounded-[10px] py-2 sm:py-3 md:py-7.5 px-1 sm:px-2 flex flex-col items-center flex-1">
        <span className="text-accent font-alt text-xl sm:text-2xl md:text-[30px] font-normal leading-none">{timeLeft.seconds}</span>
        <span className="text-white font-serif text-[8px] md:text-[13px] uppercase mt-1">Seconds</span>
      </div>
    </div>
  );
}
