import Link from "next/link";
import { MediaImage } from "@/components/site/MediaImage";
import { categories } from "@/data/categories";

export function CategoryShowcase() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <div>
          <p className="section-label">Shop by category</p>
          <h2 className="section-title mt-3">Curated Floral Collections</h2>
        </div>
        <Link className="text-link" href="/collections">
          View all collections
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category.title} className="image-card group">
            <MediaImage src={category.image} alt={category.title} className="image-card-img" />
            <div className="image-card-content">
              <h3 className="font-serif text-3xl">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/88">{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
