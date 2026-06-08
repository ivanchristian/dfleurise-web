import { MediaImage } from "@/components/site/MediaImage";
import { occasions } from "@/data/occasions";
import { whatsappUrl } from "@/data/products";

export default function OccasionsPage() {
  return (
    <>
      <section className="section-wrap pb-10">
        <p className="section-label">Occasions</p>
        <h1 className="section-title mt-4 max-w-4xl">Say It Softly, Say It Beautifully</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          From birthdays to congratulations, each bouquet is arranged to match the
          feeling behind your gift.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        {occasions.map((occasion) => (
          <article key={occasion.title} className="grid overflow-hidden border border-[var(--border)] bg-white md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative h-72 md:h-full">
              <MediaImage src={occasion.image} alt={occasion.title} />
            </div>
            <div className="flex flex-col justify-between p-7">
              <div>
                <h2 className="font-serif text-5xl text-[var(--foreground)]">{occasion.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{occasion.description}</p>
              </div>
              <a className="btn-primary mt-8" href={whatsappUrl} target="_blank" rel="noreferrer">
                Browse Collection
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
