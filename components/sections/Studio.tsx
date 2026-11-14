'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imgPath, site } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Studio() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const img = root.querySelector('.about__fig img');
    if (!img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: root.querySelector('.about__fig'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="about bg-[var(--graphite)] py-[clamp(5rem,12vw,9rem)] text-[var(--white)]"
      id="studyo"
      data-theme="dark"
      aria-labelledby="studyo-h"
    >
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="about__txt lg:col-span-7">
          <p className="eyebrow">{site.studio.eyebrow}</p>
          <Reveal as="h2" mode="lines" className="h2" id="studyo-h">
            <LineSplit lines={site.studio.title} />
          </Reveal>
          <div className="mt-8 max-w-xl space-y-5 text-[color-mix(in_srgb,var(--white)_74%,var(--concrete))]">
            {site.studio.paragraphs.map((p) => (
              <Reveal as="p" key={p.slice(0, 24)}>
                {p}
              </Reveal>
            ))}
            {!site.founder.verified ? (
              <Reveal as="p" className="text-sm text-[var(--concrete)]">
                Kurucu biyografisi ve stüdyo deneyim detayları onay sonrası bu alanda genişletilecektir.
              </Reveal>
            ) : null}
          </div>
          <Reveal as="p" className="about__who mt-10">
            <span className="cat">Kurucu mimar</span>
            <br />
            <span className="mt-2 inline-block text-xl text-[var(--white)]">{site.founder.name}</span>
          </Reveal>
        </div>
        <Reveal as="figure" mode="mask" className="about__fig relative aspect-[3/4] overflow-hidden lg:col-span-5">
          <Image
            src={imgPath('studio-calisma.jpg')}
            alt="Malzeme örnekleri ve çizimlerle stüdyo çalışma köşesi"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover scale-[1.12]"
          />
        </Reveal>
      </div>
    </section>
  );
}
