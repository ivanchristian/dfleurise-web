import { ContactWhatsAppForm } from "@/components/site/ContactWhatsAppForm";

export default function ContactPage() {
  return (
    <section className="section-wrap">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="section-label">Contact</p>
          <h1 className="section-title mt-5">Start Your Floral Request</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Share your details and preferred bouquet category. Our florist will continue the conversation
            through WhatsApp with a personalized recommendation.
          </p>

          <div className="mt-10 border-l border-[var(--pink-soft)] pl-5">
            <p className="font-serif text-3xl text-[var(--foreground)]">Karawaci, Tangerang</p>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Luxury handcrafted bouquets for fresh flowers, artificial arrangements, wedding florals,
              and custom gifts.
            </p>
          </div>
        </div>

        <div className="relative border border-[var(--border)] bg-white/72 p-6 shadow-[0_28px_70px_rgba(216,107,131,0.1)] backdrop-blur sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[var(--pink-soft)] opacity-60" />
          <p className="section-label">Order With Love</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
            Tell Us What You Need
          </h2>
          <p className="mb-8 mt-4 leading-7 text-[var(--muted)]">
            {/* Your message will be formatted automatically and sent to d&apos;fleurise via WhatsApp. */}
          </p>
          <ContactWhatsAppForm />
        </div>
      </div>
    </section>
  );
}
