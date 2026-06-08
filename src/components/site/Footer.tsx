import Link from "next/link";
import { instagram, location, phoneNumber } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl text-[var(--foreground)]">d&apos;fleurise</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Luxury handcrafted bouquets from Karawaci, Tangerang, created for love,
            milestones, and meaningful memories.
          </p>
        </div>
        <div>
          <p className="section-label">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <p>{location}</p>
            <p>{phoneNumber}</p>
            <p>{instagram}</p>
          </div>
        </div>
        <div>
          <p className="section-label">Quick Links</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
            <Link href="/collections">Collections</Link>
            <Link href="/wedding">Wedding</Link>
            <Link href="/occasions">Occasions</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-5 py-5 text-center text-xs text-[var(--muted)]">
        Copyright 2026 d&apos;fleurise.id. All rights reserved.
      </div>
    </footer>
  );
}
