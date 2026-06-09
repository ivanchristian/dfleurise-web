const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can browse our collections, choose your preferred style, then contact us through WhatsApp. Our florist will help confirm flower availability, color preference, wrapping style, and delivery details.",
  },
  {
    question: "Can I request a custom bouquet?",
    answer:
      "Yes. Custom bouquets are available based on flower availability, budget, color palette, and occasion. We recommend discussing custom requests at least 4 days before your preferred delivery date.",
  },
  {
    question: "Do the bouquets look exactly like the catalog photos?",
    answer:
      "Each bouquet is handcrafted, so the final arrangement may differ slightly from the catalog depending on flower availability and natural bloom shape. We always keep the overall style and mood as close as possible.",
  },
  {
    question: "Do you offer same-day orders?",
    answer:
      "Same-day orders may be available for ready-stock arrangements or available flowers. Please contact us via WhatsApp to check the current slot and flower availability.",
  },
  {
    question: "Can I choose the flower color?",
    answer:
      "Yes. You may request preferred colors such as pink, white, yellow, purple, blue, red, or nude/brown. Availability will be confirmed by our admin.",
  },
  {
    question: "Do you provide delivery?",
    answer:
      "Yes. We usually arrange delivery through online courier services by motorbike or car. Delivery fee is not included in the bouquet price and will be confirmed separately.",
  },
];

export default function FAQPage() {
  return (
    <section className="section-wrap">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">FAQ</p>
        <h1 className="section-title mt-5">Frequently Asked Questions</h1>
        <p className="mt-7 text-lg leading-8 text-[var(--muted)]">
          A simple guide to help you prepare your floral request with confidence.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-4">
        {faqs.map((faq, index) => (
          <article key={faq.question} className="grid gap-5 border border-[var(--border)] bg-white/68 p-6 sm:grid-cols-[4rem_1fr] sm:p-7">
            <p className="font-serif text-3xl text-[var(--rose)]">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
