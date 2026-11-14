'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function FooterMark() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;

    const lines = el.querySelectorAll('[data-ftr-line]');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 18, opacity: 0.35 },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 55%',
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={root}
      className="mt-20 overflow-hidden px-[var(--gut)] font-[family-name:var(--font-display)] text-[clamp(3.5rem,18vw,14rem)] font-bold uppercase leading-[0.85] tracking-[-0.05em]"
      aria-hidden
    >
      <span
        data-ftr-line
        className="block text-[color-mix(in_srgb,var(--white)_12%,transparent)]"
      >
        YUNUS
      </span>
      <span
        data-ftr-line
        className="block text-transparent"
        style={{
          WebkitTextStroke: '1.5px color-mix(in srgb, var(--petrol-soft) 55%, var(--white) 30%)',
        }}
      >
        MİMARLIK
      </span>
    </div>
  );
}
