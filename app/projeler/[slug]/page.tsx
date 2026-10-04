import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ArchImage } from "@/components/ui/ArchImage";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  categoryLabels,
  formatArea,
  getNextProject,
  getProjectBySlug,
  projects,
  statusLabels,
} from "@/data/projects";
import { breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} — ${categoryLabels[project.category]} Projesi, ${project.location}`,
    description: project.summary,
    path: `/projeler/${project.slug}`,
    image: project.coverImage,
  });
}

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const projectNumber = String(projects.indexOf(project) + 1).padStart(2, "0");

  const meta = [
    { label: "Konum", value: project.location },
    { label: "Yıl", value: String(project.year) },
    { label: "Alan", value: formatArea(project.area) },
    { label: "Kategori", value: categoryLabels[project.category] },
    { label: "Disiplin", value: project.discipline },
    { label: "Durum", value: statusLabels[project.status] },
    ...(project.client ? [{ label: "İşveren", value: project.client }] : []),
  ];

  return (
    <article>
      <header data-theme="dark" className="relative isolate flex min-h-[88svh] flex-col overflow-hidden">
        <div className="animate-settle absolute inset-0 -z-20">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            preload
            quality={70}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(18_28_40/0.5)_0%,rgb(18_28_40/0.15)_40%,rgb(18_28_40/0.8)_100%)]"
        />
        <div className="container-arch flex flex-1 flex-col justify-end pb-10 pt-[calc(var(--header-h)+2rem)]">
          <nav aria-label="Sayfa yolu" className="animate-fade mb-auto pt-6" style={delay(300)}>
            <ol className="t-label flex gap-3 text-paper/70">
              <li>
                <Link href="/projeler" className="link-line">
                  Projeler
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-paper">
                {projectNumber}
              </li>
            </ol>
          </nav>
          <p className="animate-fade t-label t-num text-paper/70" style={delay(100)}>
            {projectNumber} — {categoryLabels[project.category]}
          </p>
          <h1 className="t-display mt-4">
            <span className="mask-line">
              <span className="animate-rise" style={delay(150)}>
                {project.title.toLocaleUpperCase("tr-TR")}
              </span>
            </span>
          </h1>
        </div>
      </header>

      <section data-theme="light" aria-label="Proje bilgileri">
        <div className="container-arch section-y-sm">
          <dl className="grid grid-cols-2 border-t border-border sm:grid-cols-3 lg:grid-cols-6">
            {meta.map((item, index) => (
              <div key={item.label} className="border-b border-border py-5 pr-4">
                <dt className="t-label flex gap-2 text-muted">
                  <span className="t-num">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </dt>
                <dd className="t-meta mt-2 text-[0.9375rem]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid-arch mt-16 gap-y-10 md:mt-24">
            <Reveal className="col-span-4 md:col-span-5">
              <p className="t-h3">{project.summary}</p>
            </Reveal>
            <Reveal className="col-span-4 space-y-5 text-foreground/80 md:col-span-5 md:col-start-8" delay={0.1}>
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              {project.isPlaceholder ? (
                <p className="t-label border-t border-border pt-4 text-muted">
                  Temsili içerik — gerçek proje bilgileri ve fotoğrafları eklendiğinde güncellenecektir.
                </p>
              ) : null}
            </Reveal>
          </div>
        </div>
      </section>

      <section data-theme="light" aria-label="Proje galerisi" className="pb-[var(--section-y)]">
        <ProjectGallery blocks={project.gallery} />
      </section>

      <section data-theme="dark" aria-label="Sonraki proje">
        <Link href={`/projeler/${next.slug}`} className="group block">
          <div className="container-arch section-y-sm">
            <div className="grid-arch items-end gap-y-8">
              <div className="col-span-4 md:col-span-7">
                <p className="t-label text-muted">Sonraki proje</p>
                <p className="t-h1 mt-6 flex items-center gap-6">
                  <span className="link-line">{next.title}</span>
                  <ArrowRight
                    aria-hidden
                    className="arrow-nudge-right size-[0.6em] shrink-0"
                    strokeWidth={1}
                  />
                </p>
                <p className="t-label mt-5 text-muted">
                  {categoryLabels[next.category]} / {next.location} / <span className="t-num">{next.year}</span>
                </p>
              </div>
              <div className="col-span-4 md:col-span-4 md:col-start-9">
                <ArchImage image={next.coverImage} ratio="3 / 2" sizes="(min-width: 768px) 33vw, 100vw" interactive />
              </div>
            </div>
          </div>
        </Link>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${project.slug}` },
        ])}
      />
    </article>
  );
}
