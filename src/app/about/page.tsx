import { MediaImage } from "@/components/site/MediaImage";

const values = [
  ["Handmade", "Every bouquet is arranged by hand with balance, texture, and emotion in mind."],
  ["Elegant", "Soft colors, premium wrapping, and refined details create a luxury florist feeling."],
  ["Meaningful", "We design flowers around the person, the occasion, and the message behind it."],
  ["Personalized", "Custom requests are welcomed, from favorite colors to special gift add-ons."],
];

export default function AboutPage() {
  return (
    <>
      <section className="section-wrap grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-label">About d&apos;fleurise</p>
          <h1 className="section-title mt-4">A Boutique Florist For Tender Celebrations</h1>
          <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
            d&apos;fleurise.id is a luxury florist based in Karawaci, Tangerang,
            creating soft romantic bouquets for birthdays, anniversaries,
            graduations, romantic surprises, and meaningful congratulations.
          </p>
        </div>
        <div className="relative h-[560px] overflow-hidden rounded-t-full">
          <MediaImage
            src="https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1500&q=85"
            alt="Florist arranging soft flowers"
          />
        </div>
      </section>
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Philosophy</p>
          <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-[var(--foreground)] sm:text-6xl">
            Flowers should feel personal, graceful, and unforgettable from the first glance.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {values.map(([title, description]) => (
              <article key={title} className="border border-[var(--border)] bg-[var(--background)] p-6">
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="section-label">Mission</p>
            <h2 className="mt-3 font-serif text-5xl text-[var(--foreground)]">Love Expressed In Blooms</h2>
          </div>
          <p className="text-lg leading-9 text-[var(--muted)]">
            Our mission is to make ordering beautiful flowers feel effortless and
            thoughtful. We focus on premium presentation, careful color direction,
            responsive WhatsApp service, and arrangements that turn simple gestures
            into lasting memories.
          </p>
        </div>
      </section>
    </>
  );
}
