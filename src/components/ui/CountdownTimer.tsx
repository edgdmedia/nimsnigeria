"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  label?: string;
  onDark?: boolean;
}

export function CountdownTimer({ label, onDark = false }: CountdownTimerProps) {
  const targetDate = new Date("2026-10-15T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ value, unit }: { value: number; unit: string }) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-lg border ${onDark ? "bg-white/10 border-white/20 text-white" : "bg-white border-border text-ink-900 shadow-sm"} min-w-18`}>
      <span className="font-display font-black text-2xl leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className={`text-[10px] uppercase tracking-widest mt-1 font-semibold ${onDark ? "text-white/70" : "text-ink-500"}`}>
        {unit}
      </span>
    </div>
  );

  return (
    <div>
      {label && (
        <div className={`text-[12px] uppercase tracking-[0.14em] font-semibold mb-3 ${onDark ? "text-accent" : "text-accent"}`}>
          {label}
        </div>
      )}
      <div className="flex gap-3">
        <Item value={timeLeft.days} unit="Days" />
        <Item value={timeLeft.hours} unit="Hrs" />
        <Item value={timeLeft.minutes} unit="Min" />
        <Item value={timeLeft.seconds} unit="Sec" />
      </div>
    </div>
  );
}
