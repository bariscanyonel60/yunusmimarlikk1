"use client";

import { useState, useMemo } from "react";
import { projects, projectTags, Project } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ProjectsFilter() {
  const [filter, setFilter] = useState<Project["tag"] | "Tümü">("Tümü");

  const filtered = useMemo(
    () => (filter === "Tümü" ? projects : projects.filter((p) => p.tag === filter)),
    [filter]
  );

  return (
    <>
      <div className="container-edge mb-10 flex flex-wrap gap-x-8 gap-y-3">
        {(["Tümü", ...projectTags] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`text-sm tracking-wide pb-1 border-b transition-colors duration-300 ${
              filter === tag
                ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-stone)] hover:text-[var(--color-ink)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {filtered.map((project, i) => (
          <RevealOnScroll
            key={project.slug}
            delay={i * 0.05}
            className={
              project.size === "large"
                ? "md:col-span-8"
                : project.size === "medium"
                  ? "md:col-span-4"
                  : "md:col-span-12"
            }
          >
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-12 text-[var(--color-stone)] py-16 text-center">
            Bu kategoride henüz proje yok.
          </p>
        )}
      </div>
    </>
  );
}
