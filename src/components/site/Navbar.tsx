"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/products";

const navItems = [
  ["Home", "/"],
  ["Collections", "/collections"],
  // ["Wedding", "/wedding"],
  ["Occasions", "/occasions"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`site-header ${isHome ? "home-header" : "is-solid"}`}>
      <div className="site-header-bg" aria-hidden="true" />
      <div className="nav-editorial hidden xl:flex" aria-hidden="true">
        <span className="nav-editorial-line" />
        <span>D&apos;FLEURISE FLORIST · EST. TANGERANG</span>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2 sm:px-12">
        <div className="nav-brand-group flex shrink-0 items-center gap-7">
          <Link href="/" className="shrink-0" aria-label="d'fleurise home">
            <Image
              src="/assets/logo_df.png"
              alt="d'fleurise logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <div className="nav-editorial-mobile" aria-hidden="true">
            <span className="nav-editorial-line" />
            <span>D&apos;FLEURISE FLORIST &middot; EST. TANGERANG</span>
          </div>
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="nav-link relative text-sm transition after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--pink-soft)] after:transition-transform after:duration-500 hover:text-[var(--rose)] hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </div>
        <a className="btn-primary nav-cta hidden lg:inline-flex" href={whatsappUrl} target="_blank" rel="noreferrer">
          Order via WhatsApp
        </a>
        <button
          className="df-mobile-menu-trigger"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <button
        className={`df-mobile-menu-backdrop ${isMobileMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <aside
        id="mobile-menu"
        className={`df-mobile-menu-panel ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="df-mobile-menu-head">
          <Image src="/assets/logo_df.png" alt="d'fleurise logo" width={170} height={58} priority />
          <button
            className="df-mobile-menu-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>
        <nav className="df-mobile-menu-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
            </Link>
          ))}
        </nav>
        <div className="df-mobile-menu-foot">
          <span>EST. 2022</span>
          <span>TANGERANG</span>
        </div>
      </aside>
    </header>
  );
}
