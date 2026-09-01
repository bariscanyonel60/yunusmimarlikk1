"use client";

import { useEffect, useRef } from "react";

export default function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/\d+/);
    const target = match ? parseInt(match[0], 10) : 0;
    const suffix = value.replace(/^\d+/, "");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.textContent = value;
      return;
    }

    let frame = 0;
    let started = false;
    let startTime = 0;
    const duration = 1400;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - (1 - t) ** 3;
      el.textContent = Math.floor(eased * target) + suffix;
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          frame = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div>
      <p
        ref={ref}
        className="font-display text-3xl md:text-5xl text-[var(--color-bronze)] mb-1"
      >
        0{value.replace(/^\d+/, "")}
      </p>
      <p className="text-[10px] md:text-xs tracking-wide text-[var(--color-paper)]/55">
        {label}
      </p>
    </div>
  );
}
