import { whatsappUrl } from "@/data/products";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(135deg,var(--pink),var(--rose))] text-lg font-bold text-white shadow-[0_20px_44px_rgba(216,107,131,0.32)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(216,107,131,0.4)]"
    >
      WA
    </a>
  );
}
