import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Link from "next/link";

export default function ProjectsSection() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projeler" className="py-24 md:py-32 container-edge">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <RevealOnScroll>
          <span className="text-eyebrow block mb-4">Seçili Çalışmalar</span>
          <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
            Bir mimarlık dergisi gibi gezin.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Link href="/projeler" className="link-underline text-sm">
            Tüm Projeleri Gör →
          </Link>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {featured.map((project, i) => (
          <RevealOnScroll
            key={project.slug}
            delay={i * 0.08}
            className={project.size === "large" ? "md:col-span-8" : project.size === "medium" ? "md:col-span-4" : "md:col-span-12"}
          >
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
