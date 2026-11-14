'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imgPath, projects, type Project } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { breakpoints } from '@/lib/motion/tokens';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const objectPos: Record<string, string> = {
  'klinik-ic-mekan': 'center 40%',
  'aycillar-konut-projesi': 'center 55%',
  'tunc-kuyumculuk': 'center 45%',
};

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const pos = objectPos[project.slug] ?? 'center center';

  return (
    <article
      className={`panel relative flex w-[min(92vw,720px)] shrink-0 flex-col gap-5 md:w-[min(82vw,1180px)] md:flex-row md:items-end md:gap-8 ${
        flip ? 'md:flex-row-reverse' : ''
      }`}
      aria-labelledby={`p-${project.slug}`}
      data-panel
    >
      <Link
        href={`/projeler/${project.slug}`}
        className="panel__media group relative block aspect-[4/5] w-full overflow-hidden md:aspect-[16/10] md:w-[74%]"
        data-cursor
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={imgPath(project.cover.src)}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 900px) 92vw, 74vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: pos }}
          data-panel-img
        />
      </Link>

      <div className="panel__txt md:w-[26%] md:pb-4">
        <p className="num" aria-hidden>
          {project.number}
        </p>
        <p className="cat">{project.category}</p>
        <h3
          id={`p-${project.slug}`}
          className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.2vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.035em]"
        >
          <Link href={`/projeler/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-4 max-w-sm text-[var(--ink-2)]">{project.summary}</p>
        <Link className="link mt-6" href={`/projeler/${project.slug}`}>
          Projeyi incele <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mq = window.matchMedia(`(min-width: ${breakpoints.horizontalProjects}px)`);
    const ctx = gsap.context(() => {
      let st: ScrollTrigger | null = null;
      let ro: ResizeObserver | null = null;

      const measure = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const teardown = () => {
        st?.kill();
        st = null;
        gsap.set(track, { clearProps: 'transform' });
        section.classList.remove('is-h');
        section.style.removeProperty('--h');
        section.style.removeProperty('--hp');
      };

      const setup = () => {
        teardown();
        if (!mq.matches || reduced) return;

        const dist = measure();
        if (dist <= 0) return;

        const chrome =
          parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--chrome')) || 132;

        section.classList.add('is-h');
        section.style.setProperty('--h', `${dist + window.innerHeight}px`);

        st = ScrollTrigger.create({
          trigger: section,
          start: `top top+=${chrome}`,
          end: () => `+=${measure()}`,
          pin: section.querySelector('.proj__sticky'),
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const d = measure();
            gsap.set(track, { x: -self.progress * d });
            section.style.setProperty('--hp', self.progress.toFixed(4));
            const panels = track.querySelectorAll<HTMLElement>('[data-panel]');
            panels.forEach((panel, i) => {
              const img = panel.querySelector<HTMLElement>('[data-panel-img]');
              if (!img) return;
              const local = self.progress * Math.max(1, panels.length - 1) - i;
              const scale = 1 + Math.max(0, 1 - Math.abs(local)) * 0.02;
              gsap.set(img, { scale });
            });
          },
        });
      };

      setup();
      mq.addEventListener('change', setup);
      window.addEventListener('resize', setup);

      ro = new ResizeObserver(() => {
        if (mq.matches && !reduced) ScrollTrigger.refresh();
      });
      ro.observe(track);

      const onImg = () => ScrollTrigger.refresh();
      track.querySelectorAll('img').forEach((img) => {
        if (!img.complete) img.addEventListener('load', onImg, { once: true });
      });

      ScrollTrigger.refresh();

      return () => {
        mq.removeEventListener('change', setup);
        window.removeEventListener('resize', setup);
        ro?.disconnect();
        teardown();
      };
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="proj relative bg-[var(--ivory)]"
      id="projeler"
      aria-labelledby="projeler-h"
    >
      <div className="proj__sticky">
        <div className="proj__head wrap flex flex-col gap-6 pb-6 pt-8 md:flex-row md:items-end md:justify-between md:pb-8 md:pt-10">
          <Reveal as="h2" mode="lines" className="h2" id="projeler-h">
            <LineSplit lines={['SEÇİLİ', 'PROJELER.']} />
          </Reveal>
          <p className="proj__lead max-w-xs text-[var(--ink-2)]">Her proje, kendine özgü bir hikâye.</p>
        </div>

        <div
          ref={trackRef}
          className="proj__track flex w-max flex-col gap-16 px-[var(--gut)] pb-16 md:flex-row md:items-stretch md:gap-14 md:pb-20"
        >
          {projects.map((project, index) => (
            <ProjectPanel key={project.slug} project={project} index={index} />
          ))}

          <div className="panel panel--cta flex w-[min(88vw,520px)] shrink-0 flex-col justify-center gap-6 border border-[var(--stone)] bg-[var(--white)] p-8 md:w-[min(42vw,480px)] md:p-12">
            <p className="eyebrow mb-0">Arşiv</p>
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] uppercase">
              Tüm projeleri keşfet
            </p>
            <Link href="/projeler" className="btn btn--solid w-fit">
              Projeler <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="proj__bar mx-[var(--gut)] mb-6 hidden h-px bg-[var(--stone)] md:block" aria-hidden>
          <i
            className="block h-full origin-left bg-[var(--petrol)]"
            style={{ transform: 'scaleX(var(--hp, 0))' }}
          />
        </div>
      </div>
    </section>
  );
}
