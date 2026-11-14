'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from './tokens';
import { useReducedMotion } from './useReducedMotion';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'figure';
  mode?: 'fade' | 'lines' | 'mask';
  id?: string;
};

function isPastStart(el: HTMLElement, ratio = 0.92) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * ratio && r.bottom > 0;
}

export function Reveal({
  children,
  className,
  as: Tag = 'div',
  mode = 'fade',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) {
      el?.classList.add('is-in');
      return;
    }

    if (mode === 'mask') {
      const img = el.querySelector('img');
      if (!img) return;
      gsap.set(img, { clipPath: 'inset(100% 0 0 0 round 50% 50% 0 0 / 18% 18% 0 0)', scale: 1.12 });
      const ctx = gsap.context(() => {
        gsap.to(img, {
          clipPath: 'inset(0% 0 0 0 round 0)',
          scale: 1,
          duration: motion.image + 0.2,
          ease: motion.ease.out,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      }, el);
      return () => ctx.revert();
    }

    if (mode === 'lines') {
      const spans = el.querySelectorAll('.ln > span');
      let done = false;

      const settle = () => {
        if (done) return;
        done = true;
        gsap.set(spans, { yPercent: 0, clearProps: 'transform' });
        el.classList.add('is-in');
      };

      const play = () => {
        if (done) return;
        gsap.to(spans, {
          yPercent: 0,
          duration: motion.text + 0.2,
          stagger: 0.08,
          ease: motion.ease.out,
          overwrite: true,
          onComplete: settle,
        });
      };

      gsap.set(spans, { yPercent: 110 });

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: play,
          onRefresh: (self) => {
            if (self.isActive || self.progress > 0 || isPastStart(el)) play();
          },
        });
      }, el);

      const boot = window.requestAnimationFrame(() => {
        if (isPastStart(el)) play();
      });

      const failSafe = window.setTimeout(() => {
        if (!done && isPastStart(el)) settle();
      }, 1800);

      return () => {
        window.cancelAnimationFrame(boot);
        window.clearTimeout(failSafe);
        ctx.revert();
      };
    }

    gsap.set(el, { opacity: 0, y: 14 });
    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: motion.text,
        ease: motion.ease.soft,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [mode, reduced]);

  return (
    <Tag ref={ref as never} id={id} className={cn(mode === 'mask' && 'overflow-hidden', className)}>
      {children}
    </Tag>
  );
}

export function LineSplit({ lines, className }: { lines: readonly string[]; className?: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span className="ln" key={`${line}-${i}`}>
          <span style={{ ['--i' as string]: i }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
