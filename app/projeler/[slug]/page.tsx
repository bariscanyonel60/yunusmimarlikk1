import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { getNextProject, getProject, imgPath, projects, site } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — ${project.category} | ${site.name}`,
    description: `${project.summary} Yunus Mimarlık ${project.category.toLocaleLowerCase('tr-TR')} projesi.`,
    path: `/projeler/${project.slug}`,
    image: imgPath(project.cover.src),
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: absoluteUrl(imgPath(project.cover.src)),
    creator: { '@type': 'Organization', name: site.name },
    about: project.category,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'Projeler', path: '/projeler' },
          { name: project.title, path: `/projeler/${project.slug}` },
        ]}
      />

      <article className="pb-0">
        <header className="wrap pb-10 pt-8">
          <p className="num">{project.number}</p>
          <p className="cat">
            {project.category}
            {project.secondaryCategory ? ` · ${project.secondaryCategory}` : ''}
          </p>
          <h1 className="mt-4 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--ink-2)]">{project.description}</p>
          <dl className="mt-8 flex flex-wrap gap-8 text-sm">
            {project.verified.location && project.location ? (
              <div>
                <dt className="cat">Konum</dt>
                <dd className="mt-2">{project.location}</dd>
              </div>
            ) : null}
            {project.verified.year && project.year ? (
              <div>
                <dt className="cat">Yıl</dt>
                <dd className="mt-2">{project.year}</dd>
              </div>
            ) : null}
          </dl>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={imgPath(project.cover.src)}
            alt={project.cover.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="wrap grid gap-6 py-16 md:grid-cols-12">
          {project.gallery.map((shot, i) => (
            <Reveal
              as="figure"
              mode="mask"
              key={shot.src}
              className={`relative overflow-hidden ${
                i === 0
                  ? 'aspect-[4/5] md:col-span-7'
                  : i === 1
                    ? 'aspect-[4/5] md:col-span-5 md:mt-16'
                    : 'aspect-[3/2] md:col-span-6'
              }`}
            >
              <Image
                src={imgPath(shot.src)}
                alt={shot.alt}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>

        <section className="wrap grid gap-12 border-t border-[var(--stone)] py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow">Tasarım yaklaşımı</p>
            <ul className="space-y-5 text-[var(--ink-2)]">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Malzeme izleri</p>
            <ul className="flex flex-wrap gap-3">
              {project.materials.map((m) => (
                <li key={m} className="border border-[var(--stone)] px-4 py-2 text-sm">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {next ? (
          <Link
            href={`/projeler/${next.slug}`}
            className="group relative flex min-h-[50vh] items-end overflow-hidden bg-[var(--black)] px-[var(--gut)] py-16 text-[var(--white)]"
            data-theme="dark"
            data-cursor
          >
            <Image
              src={imgPath(next.cover.src)}
              alt={`${next.title} proje kapak görseli`}
              fill
              sizes="100vw"
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-[1]">
              <p className="eyebrow">Sonraki proje</p>
              <Reveal as="p" mode="lines" className="h2">
                <LineSplit lines={[next.title.toLocaleUpperCase('tr-TR')]} />
              </Reveal>
              <span className="link mt-6 inline-flex border-white/40">İncele →</span>
            </div>
          </Link>
        ) : null}
      </article>
      <InternalLinks />
    </>
  );
}
