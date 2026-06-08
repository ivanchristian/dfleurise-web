import Link from "next/link";
import { MediaImage } from "@/components/site/MediaImage";
import { whatsappUrl } from "@/data/products";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden bg-[var(--pink-light)] px-6 py-16 text-center sm:px-10">
        <MediaImage
          src="https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=1600&q=85"
          alt="Elegant bouquet background"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative">
          <p className="section-label">Order with love</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-[var(--foreground)] sm:text-6xl">
            Let Us Be Part Of Your Special Moments
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Order Via WhatsApp
            </a>
            <Link className="btn-secondary bg-white/70" href="/collections">
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
