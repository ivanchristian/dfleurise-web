"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/data/products";

const navItems = [
  ["Home", "/"],
  ["Collections", "/collections"],
  ["Wedding", "/wedding"],
  ["Occasions", "/occasions"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`site-header ${isHome ? "home-header" : "is-solid"}`}>
      <div className="site-header-bg" aria-hidden="true" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="d'fleurise home">
          <span className="block font-serif text-2xl leading-none text-[var(--foreground)] transition-colors hover:text-[var(--rose)]">
            d&apos;fleurise
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--rose)]">
            Florist
          </span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm font-medium text-[var(--muted)] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--pink-soft)] after:transition-transform after:duration-500 hover:text-[var(--rose)] hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </div>
        <a className="btn-primary nav-cta hidden sm:inline-flex" href={whatsappUrl} target="_blank" rel="noreferrer">
          Order via WhatsApp
        </a>
      </nav>
      <div className="flex gap-5 overflow-x-auto px-5 pb-3 text-sm text-[var(--muted)] sm:px-8 lg:hidden">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href} className="shrink-0">
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
