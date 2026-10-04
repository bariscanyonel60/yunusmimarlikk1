import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Reveal } from "@/components/animations/Reveal";
import { ArchImage } from "@/components/ui/ArchImage";
import { categoryLabels } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/types";

export type ShowcaseVariant = "bleed" | "right" | "left" | "full";

type ShowcaseItemProps = {
  project: Project;
  index: number;
  total: number;
  variant: ShowcaseVariant;
};

const pad = (value: number) => String(value).padStart(2, "0");

function ProjectMeta({ project, inverted = false }: { project: Project; inverted?: boolean }) {
  const items = [
    { label: "Proje", value: categoryLabels[project.category] },
    { label: "Lokasyon", value: project.location },
    { label: "Yıl", value: String(project.year) },
  ];
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className={cn("t-label", inverted ? "text-paper/60" : "text-muted")}>{item.label}</dt>
          <dd className="t-meta mt-1">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectNumber({ index, total, className }: { index: number; total: number; className?: string }) {
  return (
    <p className={cn("t-label t-num flex items-center gap-3", className)}>
      <span className="text-accent">Proje {pad(index + 1)}</span>
      <span aria-hidden className="h-px w-8 bg-current opacity-30" />
      <span className="text-muted">{pad(total)}</span>
    </p>
  );
}

/**
 * Editorial project presentation. Each variant uses a different scale and
 * alignment so consecutive projects build a gallery rhythm instead of a grid.
 * On mobile every variant becomes an edge-to-edge image with info below.
 */
export function ProjectShowcaseItem({ project, index, total, variant }: ShowcaseItemProps) {
  const href = `/projeler/${project.slug}`;

  switch (variant) {
    case "bleed":
      return (
        <article className="group">
          <Link href={href} data-cursor className="block">
            <ImageReveal className="max-md:bleed-x md:bleed-right" from="left">
              <ArchImage
                image={project.coverImage}
                ratio="var(--r)"
                sizes="(min-width: 768px) 92vw, 100vw"
                interactive
                className="[--r:4/5] md:[--r:16/9]"
              />
            </ImageReveal>
            <div className="mt-6 grid gap-6 border-b border-border pb-6 md:mt-8 md:grid-cols-12 md:items-end md:gap-8">
              <div className="md:col-span-6">
                <ProjectNumber index={index} total={total} />
                <h3 className="t-h1 mt-4">
                  <span className="link-line">{project.title}</span>
                </h3>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <ProjectMeta project={project} />
              </div>
              <ArrowUpRight
                aria-hidden
                className="arrow-nudge hidden size-7 justify-self-end md:col-span-1 md:block"
                strokeWidth={1}
              />
            </div>
          </Link>
        </article>
      );
    case "right":
      return (
        <article className="group">
          <Link href={href} data-cursor className="grid-arch items-end gap-y-6">
            <div className="col-span-4 md:col-span-7 md:col-start-6 md:row-start-1">
              <ImageReveal className="max-md:bleed-x md:bleed-right" from="right">
                <ArchImage
                  image={project.coverImage}
                  ratio="3 / 2"
                  sizes="(min-width: 768px) 62vw, 100vw"
                  interactive
                />
              </ImageReveal>
            </div>
            <Reveal className="col-span-4 md:col-span-4 md:col-start-1 md:row-start-1 md:pb-2">
              <ProjectNumber index={index} total={total} />
              <h3 className="t-h2 mt-4">
                <span className="link-line">{project.title}</span>
              </h3>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-6 border-t border-border pt-5">
                <ProjectMeta project={project} />
              </div>
            </Reveal>
          </Link>
        </article>
      );
    case "left":
      return (
        <article className="group">
          <Link href={href} data-cursor className="grid-arch items-center gap-y-6">
            <div className="col-span-4 md:col-span-6">
              <ImageReveal className="max-md:bleed-x md:bleed-left">
                <ArchImage
                  image={project.coverImage}
                  ratio="var(--r)"
                  sizes="(min-width: 768px) 52vw, 100vw"
                  interactive
                  className="[--r:4/5] md:[--r:5/6]"
                />
              </ImageReveal>
            </div>
            <Reveal className="col-span-4 md:col-span-5 md:col-start-8">
              <p aria-hidden className="font-display t-num text-[clamp(5rem,10vw,10rem)] font-light leading-none tracking-[-0.06em] text-foreground/10">
                {pad(index + 1)}
              </p>
              <ProjectNumber index={index} total={total} className="mt-2" />
              <h3 className="t-h2 mt-4">
                <span className="link-line">{project.title}</span>
              </h3>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-6 border-t border-border pt-5">
                <ProjectMeta project={project} />
              </div>
            </Reveal>
          </Link>
        </article>
      );
    case "full":
      return (
        <article className="group relative">
          <Link href={href} data-cursor className="block">
            <ImageReveal>
              <ArchImage
                image={project.coverImage}
                ratio="var(--r)"
                sizes="100vw"
                interactive
                className="[--r:4/5] sm:[--r:16/9] lg:[--r:21/9]"
              />
            </ImageReveal>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(18_28_40/0.25)_0%,transparent_30%,transparent_45%,rgb(18_28_40/0.8)_100%)]"
            />
            <div className="container-arch absolute inset-x-0 top-0 pt-6 text-paper md:pt-10">
              <ProjectNumber index={index} total={total} className="[&_.text-accent]:text-wood [&_.text-muted]:text-paper/60" />
            </div>
            <div className="container-arch absolute inset-x-0 bottom-0 pb-6 text-paper md:pb-10">
              <div className="grid-arch items-end gap-y-5">
                <h3 className="t-display col-span-4 md:col-span-7">
                  <span className="link-line">{project.title}</span>
                </h3>
                <div className="col-span-4 md:col-span-4 md:col-start-9">
                  <ProjectMeta project={project} inverted />
                </div>
              </div>
            </div>
          </Link>
        </article>
      );
    default: {
      const exhaustive: never = variant;
      return exhaustive;
    }
  }
}
