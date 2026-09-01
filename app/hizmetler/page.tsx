import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import MaterialsPalette from "@/components/sections/MaterialsPalette";
import Faq from "@/components/sections/Faq";
import ContactCTA from "@/components/sections/ContactCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hizmetler | Tokat İç Mimarlık, Salon, Mutfak ve İş Yeri Tasarımı",
  description:
    "Tokat'ta salon tasarımı, mutfak tasarımı, iş yeri ve ofis tasarımı, villa iç mimarlığı, malzeme küratörlüğü ve 3D görselleştirme hizmetleri. Yunus Mimarlık ile tanışın.",
  alternates: { canonical: "https://yunusmimarlik.com/hizmetler" },
};

export default function HizmetlerPage() {
  return (
    <main className="pt-36 md:pt-44">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
        ]}
      />

      <div className="container-edge mb-4">
        <span className="text-eyebrow block mb-4">Tokat İç Mimarlık Hizmetleri</span>
        <h1 className="font-display font-light text-5xl md:text-7xl max-w-2xl mb-6">
          Hizmetler
        </h1>
        <p className="text-[var(--color-stone)] max-w-2xl leading-relaxed">
          Tokat ve çevresinde salon tasarımı, mutfak tasarımı, iş yeri ve
          ofis tasarımı, villa ve konut iç mimarlığı alanlarında konsept
          geliştirmeden anahtar teslim uygulamaya kadar hizmet veriyoruz.
        </p>
      </div>
      <Services />
      <MaterialsPalette />
      <Faq />
      <ContactCTA />
    </main>
  );
}
