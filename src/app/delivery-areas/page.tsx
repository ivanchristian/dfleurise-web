const jakartaAreas = [
  "Jakarta Barat",
  "Jakarta Utara",
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Jakarta Timur",
];

const tangerangAreas = [
  {
    group: "Kota Tangerang",
    areas: [
      "Batuceper",
      "Benda",
      "Cibodas",
      "Ciledug",
      "Cipondoh",
      "Jatiuwung",
      "Karang Tengah",
      "Karawaci",
      "Larangan",
      "Neglasari",
      "Periuk",
      "Pinang",
      "Tangerang",
    ],
  },
  {
    group: "Tangerang Selatan",
    areas: ["Ciputat", "Ciputat Timur", "Pamulang", "Pondok Aren", "Serpong", "Serpong Utara", "Setu"],
  },
  {
    group: "Kabupaten Tangerang",
    areas: [
      "Balaraja",
      "Cikupa",
      "Cisauk",
      "Cisoka",
      "Curug",
      "Gunung Kaler",
      "Jambe",
      "Jayanti",
      "Kelapa Dua",
      "Kemiri",
      "Kosambi",
      "Kresek",
      "Kronjo",
      "Legok",
      "Mauk",
      "Mekar Baru",
      "Pagedangan",
      "Pakuhaji",
      "Panongan",
      "Pasar Kemis",
      "Rajeg",
      "Sepatan",
      "Sepatan Timur",
      "Sindang Jaya",
      "Solear",
      "Sukadiri",
      "Sukamulya",
      "Teluknaga",
      "Tigaraksa",
    ],
  },
];

export default function DeliveryAreasPage() {
  return (
    <section className="section-wrap">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Delivery</p>
        <h1 className="section-title mt-5">Delivery Areas</h1>
        <p className="mt-7 text-lg leading-8 text-[var(--muted)] text-base">
          We deliver handcrafted bouquets across Jakarta and Tangerang. For other areas, please consult
          with our admin via WhatsApp before placing your order.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <article className="border border-[var(--border)] bg-white/68 p-6 sm:p-8">
          <p className="section-label">Jakarta</p>
          <h2 className="mt-4 font-serif text-4xl text-[var(--foreground)]">All Jakarta Areas</h2>
          <div className="mt-7 grid gap-3">
            {jakartaAreas.map((area) => (
              <div key={area} className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-semibold text-[var(--muted)]">
                {area}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6">
          {tangerangAreas.map((group) => (
            <article key={group.group} className="border border-[var(--border)] bg-white/68 p-6 sm:p-8">
              <p className="section-label">Tangerang</p>
              <h2 className="mt-4 font-serif text-4xl text-[var(--foreground)]">{group.group}</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {group.areas.map((area) => (
                  <span key={area} className="pill">
                    {area}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="border border-[var(--border)] bg-white/68 p-6">
          <p className="section-label">Time</p>
          <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)]">Operating Hours</h2>
          <p className="mt-3 leading-7 text-[var(--muted)] text-sm">
            Monday to Sunday, from 8:00 AM to 8:00 PM (WIB).
          </p>
        </article>
        <article className="border border-[var(--border)] bg-white/68 p-6">
          <p className="section-label">Same Day</p>
          <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)]">Urgent Orders</h2>
          <p className="mt-3 leading-7 text-[var(--muted)] text-sm">
            We accept urgent orders for ready-stock arrangements. New same-day arrangements may be available
            subject to flower and slot availability.
          </p>
        </article>
        <article className="border border-[var(--border)] bg-white/68 p-6">
          <p className="section-label">Process</p>
          <h2 className="mt-4 font-serif text-3xl text-[var(--foreground)]">Delivery Confirmation</h2>
          <p className="mt-3 leading-7 text-[var(--muted)] text-sm">
            Your order will be processed once payment has been made. We will confirm the final arrangement
            before the delivery process once it is completed.
          </p>
        </article>
      </div>

      <div className="mt-8 border border-[var(--border)] bg-[var(--pink-light)]/58 p-6 text-center sm:p-8">
        <p className="font-serif text-3xl text-[var(--foreground)]">Request another area?</p>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--muted)] text-sm">
          If your delivery destination is outside Jakarta or Tangerang, please consult with our admin via
          WhatsApp. We will help check courier availability, estimated fees, and the safest delivery option.
        </p>
        <a className="btn-primary mt-6" href="https://wa.me/6285817919717" target="_blank" rel="noreferrer">
          Consult via WhatsApp
        </a>
      </div>
    </section>
  );
}
