"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right";
  delay?: number;
};

const clipFrom = {
  bottom: "inset(100% 0% 0% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
} as const;

export function ImageReveal({ children, className, from = "bottom", delay = 0 }: ImageRevealProps) {
  return (
    <m.div
      className={className}
      initial={{ clipPath: clipFrom[from] }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay }}
    >
      {children}
    </m.div>
  );
}
