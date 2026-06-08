"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
              src="/assets/logo.png"
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
