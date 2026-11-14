import Image from 'next/image';
import Link from 'next/link';
import { imgPath, projects } from '@/content/site';

export function VisualStrip() {
  return (
    <section className="border-y border-[var(--stone)] bg-[var(--white)] py-3" aria-label="Proje görselleri">
      <div className="flex gap-3 overflow-x-auto px-[var(--gut)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projeler/${project.slug}`}
            className="group relative h-[42vw] min-h-[180px] w-[68vw] max-h-[320px] max-w-[480px] shrink-0 overflow-hidden md:h-[28vw] md:w-[32vw]"
            data-cursor
          >
            <Image
              src={imgPath(project.cover.src)}
              alt={project.cover.alt}
              fill
              sizes="(max-width:768px) 70vw, 32vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-[var(--white)] md:p-5">
              <p className="num mb-2 text-[var(--petrol-soft)]">{project.number}</p>
              <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em] md:text-xl">
                {project.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
