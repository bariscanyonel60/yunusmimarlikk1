'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imgPath } from '@/content/site';
import { Reveal } from '@/lib/motion/Reveal';
import { motion } from '@/lib/motion/tokens';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const chips = [
  'Işık senaryosu',
  'Malzeme paleti',
  'Renk atmosferi',
  'Akış & sirkülasyon',
  'Dokunsal detay',
  'Gece / gündüz ruhu',
];

export function Atmosphere() {
  const chipsRef = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const list = chipsRef.current;
    if (!list || reduced) return;

    const items = list.querySelectorAll('li');
    gsap.set(items, { opacity: 0, y: 16 });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: motion.hover + 0.15,
        stagger: 0.07,
        ease: motion.ease.out,
        scrollTrigger: {
          trigger: list,
          start: 'top 88%',
          once: true,
        },
      });
    }, list);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="atmos py-[clamp(4rem,10vw,7rem)] text-[var(--white)]" data-theme="dark" aria-labelledby="atmos-h">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <p className="eyebrow">İç mimarlık dili</p>
          <Reveal
            as="h2"
            className="max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em]"
            id="atmos-h"
          >
            Mekânı yalnızca planla değil;{' '}
            <span className="text-[var(--petrol-soft)]">ışık, malzeme ve renk</span> ile kuruyoruz.
          </Reveal>
          <ul ref={chipsRef} className="mt-10 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <li key={chip}>
                <span className="atmos__chip inline-block">{chip}</span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal as="figure" mode="mask" className="relative aspect-[16/10] overflow-hidden lg:col-span-6">
          <Image
            src={imgPath('atmos-malzeme.jpg')}
            alt="Ahşap, mermer, pirinç ve neon ışık detaylı malzeme paleti"
            fill
            sizes="(max-width:1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color-mix(in_srgb,var(--white)_18%,transparent)]" />
        </Reveal>
      </div>
    </section>
  );
}
