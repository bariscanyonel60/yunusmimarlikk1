"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { DESKTOP, useMediaQuery } from "@/lib/use-media-query";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Maximum vertical travel in pixels on desktop. */
  distance?: number;
};

export function Parallax({ children, className, distance = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery(DESKTOP);
  const travel = reduceMotion || !isDesktop ? 0 : distance;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-travel, travel]);

  return (
    <div ref={ref} className={className}>
      <m.div style={{ y }} className="h-full w-full">
        {children}
      </m.div>
    </div>
  );
}
