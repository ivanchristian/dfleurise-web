const testimonials = [
  ["The bouquet looked even softer and more premium in person. Perfect for my sister's birthday.", "Michelle"],
  ["Beautiful wrapping, fast response, and the colors were exactly what I imagined.", "Stefanie"],
  ["d'fleurise made our anniversary flowers feel personal and very elegant.", "Melissa"],
];

export function Testimonials() {
  return (
    <section className="section-wrap">
      <p className="section-label text-center">Testimonials</p>
      <h2 className="section-title mx-auto mt-3 max-w-2xl text-center">Words From Sweet Moments</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map(([quote, name]) => (
          <figure key={name} className="border border-[var(--border)] bg-white p-7">
            <blockquote className="text-base leading-8 text-[var(--muted)]">&quot;{quote}&quot;</blockquote>
            <figcaption className="mt-6 font-serif text-2xl text-[var(--foreground)]">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
