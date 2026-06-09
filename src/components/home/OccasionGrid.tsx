import Link from "next/link";
import Image from "next/image";
import { occasions } from "@/data/occasions";

export function OccasionGrid() {
  return (
    <section className="section-wrap">
      <div className="section-heading">
        <div>
          <p className="section-label">Shop by occasion</p>
          <h2 className="section-title mt-4">Flowers For Every Feeling</h2>
        </div>
        <Link href="/occasions" className="text-link">
          Browse Occasions
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {occasions.map((occasion) => (
          <Link
            key={occasion.title}
            href="/occasions"
            className="image-card min-h-[24rem] lg:min-h-[22rem]"
          >
            <Image
              src={occasion.image}
              alt={occasion.title}
              width={520}
              height={640}
              className="image-card-img min-h-[24rem] lg:min-h-[22rem]"
            />
            <div className="image-card-content">
              <h3 className="font-serif text-3xl leading-tight">{occasion.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/88">{occasion.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
