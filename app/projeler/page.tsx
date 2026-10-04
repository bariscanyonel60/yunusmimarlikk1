import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectIndex } from "@/components/projects/ProjectIndex";
import { CallToAction } from "@/components/sections/CallToAction";
import { JsonLd } from "@/components/ui/JsonLd";
import { projects } from "@/data/projects";
import { breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projeler",
  description:
    "Yunus Mimarlık'ın Tokat'ta ve çevresinde geliştirdiği konut, ofis, ticari mekân ve iç mimari projelerinden bir seçki.",
  path: "/projeler",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Proje dizini"
        lines={["PROJELER"]}
        intro="Konut, ofis ve ticari mekân ölçeğinde; mimari ve iç mimari projelerimizden bir seçki."
        aside={
          <p className="t-label t-num mt-6 text-muted">
            {String(projects.length).padStart(2, "0")} proje — Temsili içerik
          </p>
        }
      />
      <section data-theme="light" aria-label="Proje listesi">
        <div className="container-arch pb-[var(--section-y)]">
          <ProjectIndex projects={projects} />
        </div>
      </section>
      <CallToAction />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Projeler", path: "/projeler" },
        ])}
      />
    </>
  );
}
