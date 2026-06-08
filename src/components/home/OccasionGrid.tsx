import Link from "next/link";
import { MediaImage } from "@/components/site/MediaImage";
import { occasions } from "@/data/occasions";

export function OccasionGrid() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <div>
          <p className="section-label">Shop by occasion</p>
          <h2 className="section-title mt-3">Flowers For Every Feeling</h2>
        </div>
        <Link className="text-link" href="/occasions">
          Browse occasions
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {occasions.map((occasion, index) => (
          <article
            key={occasion.title}
            className={`image-card group ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}
          >
            <MediaImage src={occasion.image} alt={occasion.title} className="image-card-img" />
            <div className="image-card-content">
              <h3 className="font-serif text-3xl">{occasion.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/88">{occasion.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
