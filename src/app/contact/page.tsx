import { MediaImage } from "@/components/site/MediaImage";
import { instagram, location, phoneNumber, whatsappUrl } from "@/data/products";

export default function ContactPage() {
  return (
    <section className="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="section-label">Contact</p>
        <h1 className="section-title mt-4">Let&apos;s Create Your Bouquet</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          Share your occasion, preferred colors, budget, and delivery timing. Our
          florist will help recommend the sweetest arrangement through WhatsApp.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Order via WhatsApp
          </a>
          <a className="btn-secondary" href="https://www.instagram.com/dfleurise.id" target="_blank" rel="noreferrer">
            Visit Instagram
          </a>
        </div>
      </div>
      <div className="border border-[var(--border)] bg-white p-7 sm:p-10">
        <p className="section-label">Information</p>
        <div className="mt-7 grid gap-5">
          <div className="border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--rose)]">Location</p>
            <p className="mt-2 font-serif text-3xl">{location}</p>
          </div>
          <div className="border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--rose)]">Phone</p>
            <p className="mt-2 font-serif text-3xl">{phoneNumber}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--rose)]">Instagram</p>
            <p className="mt-2 font-serif text-3xl">{instagram}</p>
          </div>
        </div>
        <div className="relative mt-10 h-80">
          <MediaImage
            src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1400&q=85"
            alt="Korean florist bouquet wrapping"
          />
        </div>
      </div>
    </section>
  );
}
