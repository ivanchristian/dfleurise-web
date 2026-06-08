import { MediaImage } from "@/components/site/MediaImage";
import { premiumProducts, whatsappUrl } from "@/data/products";

export function PremiumSeries() {
  return (
    <section className="bg-white/70 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="section-label">Premium Korean series</p>
        <h2 className="section-title mt-3 max-w-3xl">Soft Drama, Wrapped With Intention</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {premiumProducts.map((product) => (
            <article key={product.name} className="grid overflow-hidden border border-[var(--border)] bg-[var(--background)] md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative h-80 md:h-full">
                <MediaImage src={product.image} alt={product.name} />
              </div>
              <div className="flex flex-col justify-between p-7">
                <div>
                  <p className="section-label">{product.price}</p>
                  <h3 className="mt-3 font-serif text-5xl text-[var(--foreground)]">{product.name}</h3>
                  <p className="mt-4 text-[var(--muted)]">{product.description}</p>
                </div>
                <a className="btn-primary mt-8 w-full justify-center" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Order this bouquet
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
