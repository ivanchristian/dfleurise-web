const policies = [
  {
    title: "Information We Collect",
    body: "We may collect information you share with us when making an inquiry or order, such as your name, phone number, delivery area, recipient details, bouquet preferences, occasion notes, delivery schedule, and custom message requests.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used to respond to inquiries, prepare bouquet recommendations, confirm orders, arrange delivery, communicate order updates, and improve our customer service experience.",
  },
  {
    title: "WhatsApp & Social Media Communication",
    body: "Most order conversations are handled through WhatsApp or Instagram. Information shared through those platforms may also be subject to their own privacy policies and platform terms.",
  },
  {
    title: "Delivery & Third-Party Couriers",
    body: "For delivery purposes, we may share necessary recipient and delivery details with courier services. We only share information needed to complete the delivery safely and accurately.",
  },
  {
    title: "Payment Confirmation",
    body: "If payment confirmation is required, we may review payment proof or related order details only for order verification and fulfillment purposes.",
  },
  {
    title: "Data Retention",
    body: "We keep order and communication records only as long as reasonably needed for service, customer support, reference, or administrative purposes.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to keep customer information private and limit access to order details. However, no online communication method can be guaranteed to be completely secure.",
  },
  {
    title: "Your Request",
    body: "You may contact us through WhatsApp if you want to update, correct, or request deletion of personal information related to your order, subject to operational and legal requirements.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-wrap">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Privacy</p>
        <h1 className="section-title mt-5">Privacy Policy</h1>
        <p className="mt-7 text-lg leading-8 text-[var(--muted)]">
          This placeholder policy explains how d&apos;fleurise Florist may collect, use, and protect customer
          information for bouquet inquiries, orders, and delivery coordination.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {policies.map((policy, index) => (
          <article key={policy.title} className="border border-[var(--border)] bg-white/68 p-6 sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--foreground)]">{policy.title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{policy.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border border-[var(--border)] bg-[var(--pink-light)]/58 p-6 text-center sm:p-8">
        <p className="font-serif text-3xl text-[var(--foreground)]">Need privacy assistance?</p>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--muted)]">
          For privacy-related questions about your order information, please contact d&apos;fleurise through
          WhatsApp.
        </p>
        <a className="btn-primary mt-6" href="https://wa.me/6285817919717" target="_blank" rel="noreferrer">
          Contact via WhatsApp
        </a>
      </div>
    </section>
  );
}
