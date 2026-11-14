import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { pageSeo } from '@/content/seo';
import { imgPath, projects } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.projeler);

export default function ProjectsArchivePage() {
  const ld = webpageJsonLd(pageSeo.projeler);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'Projeler', path: '/projeler' },
        ]}
      />
      <section className="wrap pb-24 pt-8">
        <p className="eyebrow">Arşiv</p>
        <Reveal as="h1" mode="lines" className="h2 mb-6">
          <LineSplit lines={['TÜM', 'PROJELER.']} />
        </Reveal>
        <p className="mb-16 max-w-lg text-[var(--ink-2)]">Her proje, kendine özgü bir hikâye.</p>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`grid items-center gap-8 md:grid-cols-12 ${i % 2 === 1 ? 'md:text-right' : ''}`}
            >
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <p className="num">{project.number}</p>
                <p className="cat">{project.category}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-[-0.03em]">
                  <Link href={`/projeler/${project.slug}`}>{project.title}</Link>
                </h2>
                <p className={`mt-4 text-[var(--ink-2)] ${i % 2 === 1 ? 'md:ml-auto' : ''} max-w-md`}>
                  {project.summary}
                </p>
                <Link className={`link mt-6 ${i % 2 === 1 ? 'md:ml-auto' : ''}`} href={`/projeler/${project.slug}`}>
                  Projeyi incele <span aria-hidden>→</span>
                </Link>
              </div>
              <Link
                href={`/projeler/${project.slug}`}
                className={`relative aspect-[4/3] overflow-hidden md:col-span-7 ${i % 2 === 1 ? 'md:order-1' : ''}`}
                data-cursor
              >
                <Reveal as="div" mode="mask" className="absolute inset-0">
                  <Image
                    src={imgPath(project.cover.src)}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover"
                  />
                </Reveal>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <InternalLinks />
    </>
  );
}
