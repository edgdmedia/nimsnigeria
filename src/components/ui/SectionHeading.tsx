import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      {eyebrow && (
        <p className={`kicker mb-4 ${onDark ? "text-accent" : "text-accent"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`display-heading text-3xl md:text-[42px] lg:text-[56px] leading-[1.05] ${
          onDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            onDark ? "text-white/80" : "text-ink-800"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
