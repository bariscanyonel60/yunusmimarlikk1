"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { FINE_POINTER, useMediaQuery } from "@/lib/use-media-query";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/** Very light pull towards the pointer. Inert on touch devices and with reduced motion. */
export function Magnetic({ children, className, strength = 0.18 }: MagneticProps) {
  const finePointer = useMediaQuery(FINE_POINTER);
  const reduceMotion = useReducedMotion();
  const enabled = finePointer && !reduceMotion;

  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(event: PointerEvent<HTMLSpanElement>) {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.span
      className={className ?? "inline-block"}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </m.span>
  );
}
