import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ProjectCursor } from "@/components/projects/ProjectCursor";
import { ProjectShowcaseItem, type ShowcaseVariant } from "@/components/projects/ProjectFeature";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFeaturedProjects, projects } from "@/data/projects";

const rhythm: ShowcaseVariant[] = ["bleed", "right", "left", "full"];

export function SelectedProjects() {
  const featured = getFeaturedProjects().slice(0, rhythm.length);
  const contained = featured.slice(0, 3);
  const closing = featured[3];

  return (
    <section id="projeler" data-theme="light" aria-labelledby="projects-title" className="relative">
      <div className="container-arch pt-[var(--section-y-sm)]">
        <SectionLabel index="01" en="Selected Work" rule>
          Seçili Projeler
        </SectionLabel>

        <div className="grid-arch mt-10 items-end gap-y-8 md:mt-14">
          <h2 id="projects-title" className="t-display col-span-4 md:col-span-8">
            <MaskText lines={["SEÇİLİ", "PROJELER"]} />
          </h2>
          <Reveal className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <p className="text-muted">
              Konuttan ticari mekâna; her projede bağlamı, işlevi ve kullanıcı deneyimini aynı çizgide ele alıyoruz.
            </p>
            <div className="mt-6 flex items-center justify-between gap-6 border-t border-border pt-4">
              <span className="t-label t-num text-muted">
                {String(featured.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} proje
              </span>
              <ArrowLink href="/projeler">Tümü</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>

      <ProjectCursor className="pb-[var(--section-y)] pt-14 md:pt-20">
        <div className="container-arch space-y-20 md:space-y-32 lg:space-y-40">
          {contained.map((project, index) => {
            const variant = rhythm[index];
            return variant ? (
              <ProjectShowcaseItem
                key={project.id}
                project={project}
                index={index}
                total={featured.length}
                variant={variant}
              />
            ) : null;
          })}
        </div>

        {closing ? (
          <div className="mt-20 md:mt-32 lg:mt-40">
            <ProjectShowcaseItem project={closing} index={3} total={featured.length} variant="full" />
          </div>
        ) : null}
      </ProjectCursor>
    </section>
  );
}
