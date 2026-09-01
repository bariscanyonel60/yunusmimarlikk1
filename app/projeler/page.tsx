import type { Metadata } from "next";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Projeler | Tokat İç Mimarlık Portföyü — Yunus Mimarlık",
  description:
    "Tokat ve çevresinde tamamladığımız villa, konut, ofis, otel ve cafe iç mimarlık projeleri. Salon tasarımı, mutfak tasarımı ve iş yeri tasarımı örnekleri.",
  alternates: { canonical: "https://yunusmimarlik.com/projeler" },
};

export default function ProjelerPage() {
  return (
    <main className="pt-36 md:pt-44 pb-24">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Projeler", href: "/projeler" },
        ]}
      />

      <div className="container-edge mb-10">
        <span className="text-eyebrow block mb-4">Tokat İç Mimarlık Portföyü</span>
        <h1 className="font-display font-light text-5xl md:text-7xl max-w-2xl">
          Projeler
        </h1>
      </div>

      <ProjectsFilter />
    </main>
  );
}
