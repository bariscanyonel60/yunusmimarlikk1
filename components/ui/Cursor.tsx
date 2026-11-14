'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cur = ref.current;
    if (!cur || reduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      cur.style.setProperty('--cx', `${x.toFixed(1)}px`);
      cur.style.setProperty('--cy', `${y.toFixed(1)}px`);
      raf = Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2 ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const targets = document.querySelectorAll('[data-cursor]');
    const enter = () => cur.classList.add('on');
    const leave = () => cur.classList.remove('on');
    targets.forEach((el) => {
      el.addEventListener('pointerenter', enter);
      el.addEventListener('pointerleave', leave);
    });
    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('pointerenter', enter);
        el.removeEventListener('pointerleave', leave);
      });
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ref}
      className="cursor-spot pointer-events-none fixed top-0 left-0 z-[90] hidden h-16 w-16 items-center justify-center rounded-full bg-[var(--navy)] text-[0.65rem] font-medium tracking-[0.14em] text-[var(--white)] uppercase opacity-0 transition-opacity duration-300 md:flex"
      style={{ transform: 'translate3d(calc(var(--cx, -100px) - 50%), calc(var(--cy, -100px) - 50%), 0)' }}
      aria-hidden
    >
      <span>İNCELE</span>
    </div>
  );
}
