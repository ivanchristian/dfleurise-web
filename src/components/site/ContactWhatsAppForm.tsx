"use client";

import { FormEvent, useState } from "react";

const categories = ["Fresh", "Artificial", "Wedding", "Custom"];
const phoneNumber = "6285817919717";

export function ContactWhatsAppForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      "Hello d'fleurise Florist, saya ingin konsultasi/order bouquet.",
      "",
      `Nama Lengkap: ${fullName}`,
      `Nomor HP: ${phone}`,
      `Kategori: ${category}`,
      `Message: ${message}`,
    ].join("\n");

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="fullName" className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
          placeholder="Your full name"
          className="min-h-14 border border-[var(--border)] bg-white/72 px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--pink-soft)] focus:bg-white"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          placeholder="+62..."
          className="min-h-14 border border-[var(--border)] bg-white/72 px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--pink-soft)] focus:bg-white"
        />
      </div>

      <div className="grid gap-3">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
          Category
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-14 border px-3 text-sm font-extrabold uppercase tracking-[0.08em] transition ${
                category === item
                  ? "border-transparent bg-[var(--pink-light)] text-[var(--rose)] shadow-[0_16px_34px_rgba(216,107,131,0.14)]"
                  : "border-[var(--border)] bg-white/72 text-[var(--muted)] hover:border-[var(--pink-soft)] hover:bg-white hover:text-[var(--rose)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--rose)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={6}
          placeholder="Tell us about your bouquet, occasion, flower color, budget, or delivery date."
          className="resize-none border border-[var(--border)] bg-white/72 px-4 py-4 text-[var(--foreground)] outline-none transition focus:border-[var(--pink-soft)] focus:bg-white"
        />
      </div>

      <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
        Submit
      </button>
    </form>
  );
}
