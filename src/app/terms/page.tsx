const terms = [
  {
    title: "Operating Hours",
    body: "Monday to Sunday, from 8:00 AM to 8:00 PM (WIB).",
  },
  {
    title: "Flower Arrangement Variations",
    body: "Each arrangement is handcrafted with care. Due to flower availability and the handmade nature of our designs, the final product may differ slightly from the catalog. Every bouquet is unique and cannot be replicated 100%.",
  },
  {
    title: "Order Processing & Confirmation",
    body: "Your order will be processed once payment has been made. We will confirm the final arrangement before the delivery process once it is completed.",
  },
  {
    title: "Custom Arrangements",
    body: "For custom flower arrangements, please discuss availability with our admin via WhatsApp. We recommend placing your consultation at least 4 days before (H-4) your desired delivery time to ensure the best arrangement options.",
  },
  {
    title: "Urgent Orders",
    body: "We accept urgent orders for ready-stock arrangements. If your preferred bouquet is not available, feel free to check with our admin. We may be able to create a new arrangement on the same day, subject to flower and slot availability.",
  },
  {
    title: "Pricing & Delivery",
    body: "Prices listed in the catalog do not include delivery fees. We typically use online delivery services (motorbike/car) to send your order. While we strive to offer the best delivery rates, you are welcome to arrange your own courier or opt for self-pickup.",
  },
];

export default function TermsPage() {
  return (
    <section className="section-wrap">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Information</p>
        <h1 className="section-title mt-5">Terms &amp; Conditions</h1>
        <p className="mt-7 text-lg leading-8 text-[var(--muted)]">
          Please review our ordering, arrangement, and delivery notes before placing your bouquet request.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {terms.map((term, index) => (
          <article key={term.title} className="border border-[var(--border)] bg-white/64 p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-[var(--foreground)]">{term.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{term.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
