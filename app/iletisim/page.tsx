import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "İletişim | Tokat İç Mimar — Yunus Mimarlık",
  description:
    "Tokat'ta iç mimarlık projeniz için Yunus Mimarlık ile iletişime geçin. CİMCİM İş Merkezi, Gaziosmanpaşa Bulvarı, Tokat. Telefon: 0545 545 31 52.",
  alternates: { canonical: "https://yunusmimarlik.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <main className="pt-36 md:pt-44 pb-24">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "İletişim", href: "/iletisim" },
        ]}
      />

      <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-5">
          <RevealOnScroll>
            <span className="text-eyebrow block mb-4">Tokat İç Mimar</span>
            <h1 className="font-display font-light text-4xl md:text-6xl leading-tight mb-10">
              Hayalinizdeki mekânı birlikte tasarlayalım.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="flex flex-col gap-8 text-sm">
            <div>
              <span className="text-eyebrow block mb-2">Telefon</span>
              <a href="tel:+905455453152" className="link-underline font-display text-xl">
                0545 545 31 52
              </a>
            </div>
            <div>
              <span className="text-eyebrow block mb-2">Adres</span>
              <a
                href="https://maps.google.com/?q=CİMCİM+İş+Merkezi+Alipaşa+Gaziosmanpaşa+Bulvarı+190+Tokat"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                CİMCİM İş Merkezi, Alipaşa,
                <br />
                Gaziosmanpaşa Bulvarı No:190/C Kat:3, Tokat
              </a>
            </div>
            <div>
              <span className="text-eyebrow block mb-2">Hizmet Bölgesi</span>
              <p>Tokat, Amasya, Sivas, Samsun ve çevre iller</p>
            </div>
            <div>
              <span className="text-eyebrow block mb-2">Instagram</span>
              <a
                href="https://instagram.com/yunusmimarlik"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                @yunusmimarlik
              </a>
            </div>
            <div>
              <span className="text-eyebrow block mb-2">WhatsApp</span>
              <a
                href="https://wa.me/905455453152"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                WhatsApp&apos;tan İletişime Geç
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <div className="md:col-span-7">
          <RevealOnScroll delay={0.1}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>

      <RevealOnScroll className="container-edge">
        <span className="text-eyebrow block mb-4">Konum</span>
        <div className="relative w-full aspect-[16/7] overflow-hidden rounded-[6px]">
          <iframe
            title="Yunus Mimarlık - Tokat konum haritası"
            src="https://www.google.com/maps?q=CİMCİM+İş+Merkezi,+Alipaşa,+Gaziosmanpaşa+Bulvarı+No:190,+Tokat&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </RevealOnScroll>
    </main>
  );
}
