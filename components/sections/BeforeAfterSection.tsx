import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getProjectBySlug } from "@/data/projects";
import { beforeAfter } from "@/data/site";

export function BeforeAfterSection() {
  const project = getProjectBySlug(beforeAfter.projectSlug);

  return (
    <section data-theme="dark" aria-labelledby="before-after-title" className="relative">
      <div className="container-arch section-y">
        <SectionLabel index="05" en="Before / After" rule>
          {beforeAfter.label}
        </SectionLabel>

        <div className="grid-arch mt-10 items-end gap-y-8 md:mt-14">
          <h2 id="before-after-title" className="t-display col-span-4 md:col-span-8">
            <MaskText lines={beforeAfter.title} />
          </h2>
          <Reveal className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <p className="text-muted">{beforeAfter.description}</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-[1400px] max-md:bleed-x md:mt-20">
          <BeforeAfter
            before={beforeAfter.before}
            after={beforeAfter.after}
            sizes="(min-width: 1480px) 1400px, 100vw"
          />
        </div>

        <div className="mx-auto mt-4 flex max-w-[1400px] flex-col justify-between gap-2 text-muted sm:flex-row sm:items-center">
          <p className="t-label">Çizgiyi sürükleyin veya ok tuşlarını kullanın</p>
          {project ? (
            <ArrowLink href={`/projeler/${project.slug}`} direction="right">
              {project.title}
            </ArrowLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
