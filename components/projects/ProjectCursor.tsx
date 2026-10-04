"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { FINE_POINTER, useMediaQuery } from "@/lib/use-media-query";

type ProjectCursorProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

/**
 * Shows a floating "view project" label while the pointer is over an element
 * marked with `data-cursor`. Only active on fine-pointer devices.
 */
export function ProjectCursor({ children, label = "Projeyi incele", className }: ProjectCursorProps) {
  const finePointer = useMediaQuery(FINE_POINTER);
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (!finePointer || event.pointerType !== "mouse") return;
    x.set(event.clientX);
    y.set(event.clientY);
    const overTarget = (event.target as HTMLElement).closest("[data-cursor]") !== null;
    if (overTarget !== visible) setVisible(overTarget);
  }

  return (
    <div
      className={cn(className, finePointer && visible && "[&_[data-cursor]]:cursor-none")}
      onPointerMove={handleMove}
      onPointerLeave={() => setVisible(false)}
    >
      {children}
      {finePointer ? (
        <AnimatePresence>
          {visible ? (
            <m.div
              aria-hidden
              className="pointer-events-none fixed left-0 top-0 z-[60]"
              style={{ x: reduceMotion ? x : springX, y: reduceMotion ? y : springY }}
            >
              <m.span
                className="t-label -ml-14 -mt-14 flex size-28 flex-col items-center justify-center gap-1 rounded-full bg-bordo text-center text-paper"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </m.span>
            </m.div>
          ) : null}
        </AnimatePresence>
      ) : null}
    </div>
  );
}
