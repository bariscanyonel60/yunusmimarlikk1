import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import ImageReveal from "@/components/ui/ImageReveal";

const aspectClasses: Record<Project["size"], string> = {
  large: "aspect-[4/3]",
  medium: "aspect-[3/4]",
  full: "aspect-[16/7]",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className={`group relative block w-full overflow-hidden ${aspectClasses[project.size]}`}
    >
      <ImageReveal className="absolute inset-0">
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.category}`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </ImageReveal>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent opacity-70" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-[var(--color-paper)]">
        <div className="flex items-center justify-between">
          <span className="text-eyebrow text-[var(--color-paper)]/70">
            {project.index}
          </span>
          <span className="text-eyebrow text-[var(--color-paper)]/70">
            {project.style}
          </span>
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl">{project.title}</h3>
          <p className="mt-2 text-xs tracking-wide text-[var(--color-paper)]/75">
            {project.location} · {project.category} · {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
