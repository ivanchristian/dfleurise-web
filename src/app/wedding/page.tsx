import { MediaImage } from "@/components/site/MediaImage";
import { weddingItems, whatsappUrl } from "@/data/products";

const weddingStyles = [
  {
    title: "Classic Round Bouquet",
    description: "A timeless round bridal bouquet with soft structure, clean proportions, and romantic florals.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Flexed Round Bouquet",
    description: "A more expressive round bouquet with graceful movement, texture, and editorial softness.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function WeddingPage() {
  return (
    <>
      <section className="section-wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-label">Wedding</p>
          <h1 className="section-title mt-4">Wedding Flowers, Softly Remembered</h1>
          <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
            A dedicated d&apos;fleurise wedding catalogue for bridal round bouquets
            and additional ceremonial flowers, prepared with an elegant soft-pink
            florist touch.
          </p>
          <a className="btn-primary mt-8" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consult Wedding Flowers
          </a>
        </div>
        <div className="relative h-[560px] overflow-hidden rounded-t-full">
          <MediaImage
            src="https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=1500&q=85"
            alt="Wedding bouquet with soft romantic flowers"
            priority
          />
        </div>
      </section>
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Round bouquet</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {weddingStyles.map((style) => (
              <article key={style.title} className="border border-[var(--border)] bg-[var(--background)]">
                <div className="relative h-96">
                  <MediaImage src={style.image} alt={style.title} />
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-5xl text-[var(--foreground)]">{style.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{style.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label">Catalogue items</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-[var(--foreground)]">
              Bridal bouquet starts from 650K
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Final quotation depends on flower selection, palette, volume, and
              event date. Contact us for more information and availability.
            </p>
          </div>
          <div className="border border-[var(--border)] bg-white">
            {weddingItems.map((item) => (
              <div key={item.name} className="grid gap-2 border-b border-[var(--border)] px-5 py-5 last:border-b-0 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-serif text-3xl text-[var(--foreground)]">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.category}</p>
                </div>
                <p className="font-semibold text-[var(--rose)]">{item.price ?? "Ask Admin"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
