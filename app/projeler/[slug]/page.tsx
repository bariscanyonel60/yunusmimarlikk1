import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ImageReveal from "@/components/ui/ImageReveal";
import ProjectCard from "@/components/projects/ProjectCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Tokat ${project.category} — Yunus Mimarlık`,
    description: `${project.concept} Lokasyon: ${project.location}. Stil: ${project.style}.`,
    alternates: { canonical: `https://yunusmimarlik.com/projeler/${project.slug}` },
    openGraph: {
      title: `${project.title} | Yunus Mimarlık`,
      description: project.concept,
      type: "article",
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.concept,
    image: project.cover,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    creator: {
      "@type": "Organization",
      name: "Yunus Mimarlık",
    },
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      {/* Project Hero */}
      <section className="relative h-[80svh] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/10 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end container-edge pb-16 text-[var(--color-paper)]">
          <span className="text-eyebrow text-[var(--color-paper)]/70 mb-4">
            {project.index} — {project.category}
          </span>
          <h1 className="font-display font-light text-5xl md:text-8xl max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Information */}
      <div className="container-edge pt-10">
        <Breadcrumbs
          items={[
            { label: "Anasayfa", href: "/" },
            { label: "Projeler", href: "/projeler" },
            { label: project.title, href: `/projeler/${project.slug}` },
          ]}
        />
      </div>
      <section className="container-edge py-16 md:py-24 grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-[var(--color-ink)]/10">
        {[
          ["Lokasyon", project.location],
          ["Proje Türü", project.category],
          ["Stil", project.style],
          ["Alan", project.area],
          ["Yıl", project.year],
          ["Durum", project.status],
        ].map(([label, value]) => (
          <div key={label}>
            <span className="text-eyebrow block mb-2">{label}</span>
            <p className="font-display text-xl">{value}</p>
          </div>
        ))}
      </section>

      {/* Concept */}
      <section className="container-edge py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <RevealOnScroll className="md:col-span-4">
          <span className="text-eyebrow block mb-4">Konsept</span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} className="md:col-span-8">
          <p className="font-display font-light text-2xl md:text-3xl leading-relaxed max-w-2xl">
            {project.concept}
          </p>
        </RevealOnScroll>
      </section>

      {/* Gallery */}
      <section className="container-edge pb-16 md:pb-24 flex flex-col gap-4 md:gap-5">
        {project.gallery.map((src, i) => (
          <ImageReveal key={src} delay={i * 0.04}>
            <div
              className={`relative w-full overflow-hidden ${
                i === 0 ? "aspect-[16/9]" : "aspect-[16/8]"
              }`}
            >
              <Image
                src={src}
                alt={`${project.title} görsel ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>
        ))}
      </section>

      {/* Materials */}
      <section className="container-edge pb-16 md:pb-24 border-t border-[var(--color-ink)]/10 pt-16">
        <span className="text-eyebrow block mb-6">Malzemeler</span>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.materials.map((m) => (
            <span
              key={m}
              className="rounded-[4px] border border-[var(--color-ink)]/20 px-4 py-2 text-sm"
            >
              {m}
            </span>
          ))}
        </div>

        <span className="text-eyebrow block mb-4">Renk Paleti</span>
        <div className="flex gap-3">
          {project.palette.map((hex) => (
            <span
              key={hex}
              className="h-12 w-12 rounded-full border border-[var(--color-ink)]/10"
              style={{ backgroundColor: hex }}
              title={hex}
            />
          ))}
        </div>
      </section>

      {/* Related Projects */}
      <section className="container-edge pb-16 md:pb-24">
        <span className="text-eyebrow block mb-8">İlgili Projeler</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {related.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-edge pb-24 md:pb-32 text-center">
        <p className="font-display font-light text-3xl md:text-5xl max-w-2xl mx-auto mb-8">
          Siz de mekânınızı birlikte tasarlayalım.
        </p>
        <Link
          href="/iletisim"
          className="group inline-flex items-center gap-3 border border-[var(--color-ink)] px-8 py-4 text-sm tracking-wide"
        >
          Projeyi Başlat
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
