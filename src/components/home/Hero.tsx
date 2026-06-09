import Link from "next/link";
import { whatsappUrl } from "@/data/products";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1800&q=85"
        aria-hidden="true"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-grid relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-20 sm:px-8 lg:pt-16">
        <div className="hero-copy max-w-3xl">
          <p className="section-label hero-label">Luxury florist in Karawaci</p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.92] text-[var(--foreground)] sm:text-7xl lg:text-8xl">
            <span className="block">Love Expressed</span>
            <span className="block">In <span className="italic text-[var(--pink)]">Blooms</span></span>
          </h1>
          <p className="mt-7 max-w-xl border-l border-[var(--pink-soft)] pl-5 text-lg leading-8 text-[var(--muted)]">
            Luxury handcrafted bouquets designed for life&apos;s most meaningful moments.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary hero-explore-cta" href="/collections">
              <span>Explore Collections</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <a className="btn-secondary hero-whatsapp-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              Order via WhatsApp
            </a>
          </div>
          <div className="hero-mobile-note">
            <span>Karawaci</span>
            <span>Premium</span>
            <span>Handcrafted</span>
          </div>
        </div>
        <div className="hero-side-note hidden lg:block">
          <span>Karawaci</span>
          <span>Premium</span>
          <span>Handcrafted</span>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>300+</strong>
            <span>Bouquets</span>
          </div>
          <div>
            <strong>5.0</strong>
            <span>Ratings</span>
          </div>  
          <div>
            <strong>Same Day</strong>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
