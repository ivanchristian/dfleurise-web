import { MediaImage } from "@/components/site/MediaImage";
import { catalogGroups, categories } from "@/data/categories";
import { artificialSeries, freshSeries, premiumProducts, weddingItems, whatsappUrl } from "@/data/products";

export default function CollectionsPage() {
  const groups = ["Fresh", "Artificial", "Wedding"] as const;

  return (
    <>
      <section className="section-wrap pb-10">
        <p className="section-label">Collections</p>
        <h1 className="section-title mt-4 max-w-4xl">Fresh, Artificial, And Wedding Catalogues</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Browse d&apos;fleurise signatures from the 2025 catalogues: fresh flowers,
          artificial arrangements, premium series, bloom boxes, vases, and wedding
          flowers.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {catalogGroups.map((group) => (
            <article key={group.title} className="border border-[var(--border)] bg-white p-6">
              <p className="section-label">{group.title}</p>
              <p className="mt-3 min-h-20 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      {groups.map((group) => (
        <section key={group} className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <p className="section-label">{group} catalogue</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories
              .filter((category) => category.group === group)
              .map((category) => (
                <article key={category.title} className="border border-[var(--border)] bg-white">
                  <div className="relative h-72">
                    <MediaImage src={category.image} alt={category.title} />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-4xl text-[var(--foreground)]">{category.title}</h2>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-[var(--muted)]">{category.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.tags?.map((tag) => (
                        <span key={tag} className="pill">{tag}</span>
                      ))}
                    </div>
                    <a className="btn-secondary mt-6 w-full" href={whatsappUrl} target="_blank" rel="noreferrer">
                      Ask availability
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <CatalogueList title="Fresh Series Highlights" items={freshSeries} />
          <CatalogueList title="Artificial Highlights" items={artificialSeries} />
          <CatalogueList title="Wedding Items" items={weddingItems} />
        </div>
      </section>
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Featured products</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {premiumProducts.map((product) => (
              <article key={product.name} className="border border-[var(--border)] bg-[var(--background)]">
                <div className="relative h-96">
                  <MediaImage src={product.image} alt={product.name} />
                </div>
                <div className="p-7">
                  <p className="section-label">{product.price}</p>
                  <h2 className="mt-3 font-serif text-5xl">{product.name}</h2>
                  <p className="mt-3 text-[var(--muted)]">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CatalogueList({ title, items }: { title: string; items: { name: string; category: string; price?: string }[] }) {
  return (
    <article className="border border-[var(--border)] bg-white p-6">
      <h2 className="font-serif text-4xl text-[var(--foreground)]">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={`${title}-${item.name}`} className="border-t border-[var(--border)] pt-3 text-sm">
            <p className="font-semibold text-[var(--foreground)]">{item.name}</p>
            <p className="mt-1 text-[var(--muted)]">{item.price ? `${item.category} - ${item.price}` : item.category}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
