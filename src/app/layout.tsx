import type { Metadata } from "next";
import { Montserrat, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fontDisplay = Montserrat({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fontBody = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "National Industrial Manpower Summit 2026",
  description: "Unlocking Nigeria's Human Capital for Industrial Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface-page font-body text-text-body flex flex-col">
        {children}
      </body>
    </html>
  );
}
