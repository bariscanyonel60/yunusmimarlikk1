import type { Metadata } from "next";
import About from "@/components/sections/About";
import Designer from "@/components/sections/Designer";
import Process from "@/components/sections/Process";
import ClientVoices from "@/components/sections/ClientVoices";
import Faq from "@/components/sections/Faq";
import ContactCTA from "@/components/sections/ContactCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hakkımızda | Tokat İç Mimarlık Atölyesi — Yunus Mimarlık",
  description:
    "Tokat merkezli iç mimarlık atölyesi Yunus Mimarlık'ın tasarım yaklaşımı, kurucusu ve çalışma süreci. 10+ yıllık deneyim, 60+ tamamlanmış proje.",
  alternates: { canonical: "https://yunusmimarlik.com/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <main className="pt-36 md:pt-44">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      <div className="container-edge mb-4">
        <span className="text-eyebrow block mb-4">Tokat İç Mimarlık Atölyesi</span>
        <h1 className="font-display font-light text-5xl md:text-7xl max-w-2xl">
          Hakkımızda
        </h1>
      </div>
      <About />
      <Designer />
      <Process />
      <ClientVoices />
      <Faq />
      <ContactCTA />
    </main>
  );
}
