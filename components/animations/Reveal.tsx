"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

type MaskTextProps = {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
};

/** Headline whose lines slide up from behind a mask when scrolled into view. */
export function MaskText({ lines, className, lineClassName, stagger = 0.09 }: MaskTextProps) {
  return (
    <m.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {lines.map((line) => (
        <span key={line} className="mask-line">
          <m.span
            className={lineClassName}
            variants={{ hidden: { y: "135%" }, visible: { y: "0%" } }}
            transition={{ duration: 1.05, ease: EASE }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </m.span>
  );
}
