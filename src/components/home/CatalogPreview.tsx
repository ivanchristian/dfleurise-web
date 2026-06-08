import { addOns, bouquetPrices, flowerColors } from "@/data/products";

export function CatalogPreview() {
  return (
    <section className="section-wrap">
      <p className="section-label">Fresh bouquet catalog</p>
      <div className="mt-3 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <h2 className="section-title">Fresh Blooms, Beautifully Priced</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Choose full roses or mixed flowers, then personalize your arrangement with
            colors and gift add-ons. For larger designs, our florist will confirm the
            freshest availability via WhatsApp.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {flowerColors.map((color) => (
              <span key={color} className="pill">
                {color}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border border-[var(--border)] bg-white">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[var(--cream)] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--rose)]">
            <span>Size</span>
            <span>Full Roses</span>
            <span>Mixed</span>
          </div>
          {bouquetPrices.map((item) => (
            <div
              key={`${item.stems}-${item.size}`}
              className="grid grid-cols-[1fr_1fr_1fr] gap-3 border-t border-[var(--border)] px-4 py-4 text-sm"
            >
              <div>
                <p className="font-serif text-2xl text-[var(--foreground)]">{item.stems}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{item.size}</p>
              </div>
              <div className="space-y-1 text-[var(--muted)]">
                {item.fullRoses.map((price) => (
                  <p key={price}>{price}</p>
                ))}
              </div>
              <div className="space-y-1 text-[var(--muted)]">
                {item.mixedFlowers.map((price) => (
                  <p key={price}>{price}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {addOns.map(([name, price]) => (
          <div key={name} className="flex items-center justify-between border border-[var(--border)] bg-white px-4 py-3 text-sm">
            <span className="text-[var(--muted)]">{name}</span>
            <span className="font-semibold text-[var(--rose)]">{price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
