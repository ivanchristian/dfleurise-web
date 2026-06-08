import Link from "next/link";
import { MediaImage } from "@/components/site/MediaImage";
import { weddingItems, whatsappUrl } from "@/data/products";

export function WeddingFeature() {
  return (
    <section className="section-wrap">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px] overflow-hidden bg-[var(--pink-light)]">
          <MediaImage
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1500&q=85"
            alt="Soft wedding bouquet"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        </div>
        <div>
          <p className="section-label">Wedding catalogue</p>
          <h2 className="section-title mt-3">Wedding Blooms For A Softer Forever</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            A dedicated wedding collection for round bridal bouquets, classic or
            flexed styling, and additional ceremonial flowers such as white single
            roses and rose petals.
          </p>
          <div className="mt-7 grid gap-3">
            {weddingItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between border border-[var(--border)] bg-white/72 px-4 py-3 text-sm">
                <span className="font-semibold text-[var(--foreground)]">{item.name}</span>
                <span className="text-[var(--muted)]">{item.price ?? item.category}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-secondary" href="/wedding">
              View Wedding
            </Link>
            <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Consult Wedding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
