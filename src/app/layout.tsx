import type { Metadata } from "next";
import { Roboto, Bricolage_Grotesque, Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "NIMS Nigeria – National Industrial Manpower Summit",
  description: "National Industrial Manpower Summit 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${bricolage.variable} ${montserrat.variable} ${robotoSlab.variable}`}>
      <body className="antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen">
        <SiteNav />
        <main className="grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
