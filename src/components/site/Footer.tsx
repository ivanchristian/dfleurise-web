import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/data/products";

const shopLinks = [
  ["Home", "/"],
  ["Collections", "/collections"],
  ["Occasions", "/occasions"],
  ["Wedding", "/wedding"],
];

const infoLinks = [
  ["Our Story", "/about"],
  ["Contact Us", "/contact"],
  ["FAQ", "/faq"],
  ["Delivery Areas", "/delivery-areas"],
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy-policy"],
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-[var(--border)] bg-white/60">
      <div className="footer-grid mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.75fr_0.65fr_0.8fr]">
        <div>
          <Image
            src="/assets/logo_df.png"
            alt="d'fleurise florist logo"
            width={190}
            height={64}
            className="h-auto w-44"
          />
          <p className="mt-6 max-w-sm leading-7 text-sm text-[var(--muted)]">
            Luxury handcrafted bouquets designed for love, celebration, and meaningful moments.
          </p>
          <a className="btn-primary mt-7 text-sm" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order via WhatsApp
          </a>
        </div>

        <div className="footer-visit">
          <p className="section-label">Visit</p>
          <div className="mt-5 space-y-3 text-sm text-[var(--muted)] ">
            <p>Karawaci, Tangerang, Indonesia</p>
            <p>+62 858 1791 9717</p>
            <p>@dfleurise.id</p>
          </div>
        </div>

        <div className="footer-shop">
          <p className="section-label">Shop</p>
          <div className="mt-5 grid gap-3">
            {shopLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-[var(--muted)] text-sm hover:text-[var(--rose)]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-info">
          <p className="section-label">Info</p>
          <div className="mt-5 grid gap-3">
            {infoLinks.map(([label, href]) => (
              <Link key={label} href={href} className="text-[var(--muted)] text-sm hover:text-[var(--rose)]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-5 py-5 text-center text-xs font-semibold tracking-[0.18em] text-[var(--muted)] sm:px-8">
        © {currentYear} &nbsp;D&apos;fleurise Florist · All Rights Reserved
      </div>
    </footer>
  );
}
