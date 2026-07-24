import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "accent" | "on-dark" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary: "bg-surface-alt text-brand border border-brand hover:bg-brand-tint shadow-sm",
  accent: "bg-accent text-white hover:bg-accent-dark shadow-sm",
  "on-dark": "bg-white text-ink-900 hover:bg-surface-alt shadow-sm",
  outline: "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({ href, children, variant = "primary", className, size = "md" }: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <Link 
      href={href} 
      className={`inline-flex items-center justify-center rounded-[6px] font-display font-bold transition-colors duration-200 ease-in-out ${sizeClasses[size]} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
