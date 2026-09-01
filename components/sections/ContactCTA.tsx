import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactCTA() {
  return (
    <section className="py-28 md:py-40 container-edge text-center">
      <RevealOnScroll>
        <span className="text-eyebrow block mb-6">İletişim</span>
        <h2 className="font-display font-light text-4xl md:text-7xl max-w-3xl mx-auto leading-[1.1]">
          Hayalinizdeki mekânı birlikte tasarlayalım.
        </h2>
        <Link
          href="/iletisim"
          className="group mt-10 inline-flex items-center gap-3 border border-[var(--color-ink)] px-8 py-4 text-sm tracking-wide"
        >
          Projeyi Başlat
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </RevealOnScroll>
    </section>
  );
}
