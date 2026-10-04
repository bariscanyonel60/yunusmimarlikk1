"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { ProcessStep } from "@/lib/types";

/**
 * Each step reads as "01 ──── KEŞİF". As the list scrolls through the
 * viewport, reached steps extend their rule and take the accent colour.
 */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(-1);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const items = ref.current?.children;
    if (!items) return;
    const line = window.innerHeight * 0.65;
    let next = -1;
    for (let i = 0; i < items.length; i++) {
      if ((items[i]?.getBoundingClientRect().top ?? Infinity) < line) next = i;
    }
    if (next !== active) setActive(next);
  });

  return (
    <ol ref={ref} className="border-t border-border">
      {steps.map((step, index) => {
        const reached = index <= active;
        return (
          <li key={step.number} className="grid-arch gap-y-4 border-b border-border py-8 md:items-baseline md:py-10">
            <div className="col-span-4 flex items-center gap-4 md:col-span-6 md:gap-6">
              <span
                className={cn(
                  "font-display t-num text-[clamp(2.25rem,4vw,3.75rem)] font-light leading-none tracking-[-0.04em] transition-colors duration-700",
                  reached ? "text-accent" : "text-muted",
                )}
              >
                {step.number}
              </span>
              <span aria-hidden className="relative h-px flex-1 bg-border">
                <span
                  className={cn(
                    "absolute inset-0 origin-left bg-accent transition-transform duration-[900ms] ease-[var(--ease-arch)]",
                    reached ? "scale-x-100" : "scale-x-[0.18]",
                  )}
                />
              </span>
              <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.75rem)] font-medium uppercase leading-none tracking-[-0.02em] [font-stretch:86%]">
                {step.title.toLocaleUpperCase("tr-TR")}
              </h3>
            </div>
            <p className="col-span-4 text-muted md:col-span-3 md:col-start-8">{step.description}</p>
            <p className="t-label col-span-4 flex items-center gap-2 text-accent md:col-span-2 md:col-start-11 md:justify-end md:text-right">
              <span aria-hidden className="h-px w-3 bg-current md:hidden" />
              {step.deliverable}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
