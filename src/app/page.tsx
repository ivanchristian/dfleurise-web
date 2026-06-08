import { BrandStatement } from "@/components/home/BrandStatement";
import { CatalogPreview } from "@/components/home/CatalogPreview";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { OccasionGrid } from "@/components/home/OccasionGrid";
import { PremiumSeries } from "@/components/home/PremiumSeries";
import { Testimonials } from "@/components/home/Testimonials";
import { WeddingFeature } from "@/components/home/WeddingFeature";
import { whatsappUrl } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <CategoryShowcase />
      <OccasionGrid />
      <CatalogPreview />
      <PremiumSeries />
      <WeddingFeature />
      <section className="section-wrap">
        <div className="grid items-center gap-8 border-y border-[var(--border)] py-14 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="section-label">Custom bouquet</p>
            <h2 className="section-title mt-3">Create Your Dream Bouquet</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Looking for something unique? Let us create a personalized arrangement
              designed specifically for your special moment.
            </p>
          </div>
          <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order Custom Bouquet
          </a>
        </div>
      </section>
      <Testimonials />
      <FinalCTA />
    </>
  );
}
