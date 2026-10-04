"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ArchImage } from "@/components/ui/ArchImage";
import { categoryLabels, formatArea, statusLabels } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/types";

/**
 * Project directory: rows on the left, a sticky preview on the right whose
 * image and metadata follow the hovered or focused row (desktop only).
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex] ?? projects[0];

  return (
    <div className="grid-arch gap-y-0">
      <ol className="col-span-4 border-t border-border md:col-span-12 lg:col-span-7">
        {projects.map((project, index) => (
          <li key={project.id} className="border-b border-border">
            <Link
              href={`/projeler/${project.slug}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className="group block py-6 md:py-8"
            >
              <div className="mb-5 lg:hidden">
                <ArchImage image={project.coverImage} ratio="3 / 2" sizes="100vw" quality={70} interactive />
              </div>
              <div className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 md:grid-cols-[3rem_1fr_9rem_5rem]">
                <span
                  className={cn(
                    "t-label t-num transition-colors duration-500",
                    index === activeIndex ? "lg:text-accent" : "text-muted",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-none tracking-[-0.035em]">
                  <span
                    className={cn(
                      "inline-block transition-transform duration-700 ease-[var(--ease-out)]",
                      index === activeIndex && "lg:translate-x-3",
                    )}
                  >
                    {project.title}
                  </span>
                </h2>
                <span className="t-label hidden text-muted md:block">{categoryLabels[project.category]}</span>
                <span className="t-meta t-num text-right text-muted">{project.year}</span>
                <p className="t-label col-start-2 mt-3 text-muted md:hidden">
                  {categoryLabels[project.category]} / {project.location}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {active ? (
        <aside aria-label="Proje önizlemesi" className="hidden lg:col-span-4 lg:col-start-9 lg:block">
          <div className="sticky top-[calc(var(--header-h)+2rem)]">
            <div className="media-frame relative aspect-[4/5]">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={cn(
                    "absolute inset-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out)]",
                    index === activeIndex ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                  )}
                  aria-hidden={index !== activeIndex}
                >
                  <ArchImage image={project.coverImage} ratio="4 / 5" sizes="34vw" quality={70} />
                </div>
              ))}
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-y-4 border-t border-border pt-5">
              <PreviewMeta label="Konum" value={active.location} />
              <PreviewMeta label="Alan" value={formatArea(active.area)} />
              <PreviewMeta label="Disiplin" value={active.discipline} />
              <PreviewMeta label="Durum" value={statusLabels[active.status]} />
            </dl>
            <Link
              href={`/projeler/${active.slug}`}
              className="group t-label mt-6 inline-flex min-h-11 items-center gap-3"
              tabIndex={-1}
            >
              <span className="link-line">{active.title} projesini incele</span>
              <ArrowUpRight aria-hidden className="arrow-nudge size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </aside>
      ) : null}
    </div>
  );
}

function PreviewMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="t-label text-muted">{label}</dt>
      <dd className="t-meta mt-1">{value}</dd>
    </div>
  );
}
