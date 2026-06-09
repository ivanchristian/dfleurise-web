import Image from "next/image";
import { occasions } from "@/data/occasions";

export default function OccasionsPage() {
  return (
    <section className="section-wrap">
      <div className="max-w-4xl">
        <p className="section-label">Occasions</p>
        <h1 className="section-title mt-5">Flowers For Every Feeling</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          From birthdays to congratulations, each bouquet is arranged to match the feeling behind your gift.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {occasions.map((occasion) => (
          <article
            key={occasion.title}
            className="grid overflow-hidden border border-[var(--border)] bg-white md:grid-cols-[0.92fr_1fr]"
          >
            <div className="relative min-h-72">
              <Image
                src={occasion.image}
                alt={occasion.title}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-h-72 flex-col justify-center p-7 sm:p-8">
              <h2 className="font-serif text-4xl leading-tight text-[var(--foreground)]">{occasion.title}</h2>
              <p className="mt-5 leading-7 text-[var(--muted)]">{occasion.description}</p>
              <a className="btn-primary mt-8" href="/collections">
                Browse Collection
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
