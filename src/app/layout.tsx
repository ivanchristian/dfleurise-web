import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Navbar } from "@/components/site/Navbar";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "d'fleurise.id | Luxury Florist Karawaci",
  description:
    "Luxury handcrafted bouquets in Karawaci, Tangerang. Order soft Korean-style floral arrangements via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <span id="top" className="scroll-anchor" />
        <Navbar />
        <main className="page-motion">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
