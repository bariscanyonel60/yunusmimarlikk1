"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

const formatter = new Intl.NumberFormat("tr-TR");

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduceMotion) {
      node.textContent = `${formatter.format(value)}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${formatter.format(Math.round(latest))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, suffix, value]);

  return (
    <span ref={ref} className={className} aria-label={`${formatter.format(value)}${suffix}`}>
      {`${formatter.format(value)}${suffix}`}
    </span>
  );
}
