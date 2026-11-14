'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site } from '@/content/site';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const text = site.intro;
    const parts = text.split(/(\s+)/);
    el.setAttribute('aria-label', text);
    el.innerHTML = parts
      .map((p) => (/^\s+$/.test(p) ? p : `<span class="w inline-block opacity-25 transition-opacity duration-300">${p}</span>`))
      .join('');

    const words = [...el.querySelectorAll('.w')];
    if (reduced) {
      words.forEach((w) => w.classList.add('!opacity-100'));
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      end: 'bottom 40%',
      scrub: true,
      onUpdate: (self) => {
        const n = Math.round(self.progress * words.length);
        words.forEach((w, i) => {
          (w as HTMLElement).style.opacity = i < n ? '1' : '0.25';
        });
      },
    });

    return () => st.kill();
  }, [reduced]);

  return (
    <section className="intro wrap py-[clamp(4rem,12vw,10rem)]" id="giris">
      <p className="eyebrow">İç mimarlık yaklaşımı</p>
      <p
        ref={ref}
        className="intro__text max-w-[22ch] font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold leading-[1.15] tracking-[-0.03em]"
      >
        {site.intro}
      </p>
    </section>
  );
}
