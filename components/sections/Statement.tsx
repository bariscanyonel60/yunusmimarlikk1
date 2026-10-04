"use client";

import { m } from "motion/react";
import { statement } from "@/data/site";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;
const alignments = [
  { line: "text-left", note: "md:left-auto md:right-0" },
  { line: "text-center", note: "md:left-0" },
  { line: "text-right", note: "md:left-0" },
];

export function Statement() {
  return (
    <section
      data-theme="dark"
      aria-label="İşlev, estetik, kimlik"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div aria-hidden className="arch-blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-[linear-gradient(180deg,#0d151f_0%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute -right-1/4 bottom-0 -z-10 size-[60vmax] rounded-full bg-wood/[0.07] blur-3xl"
      />

      <div className="container-arch w-full py-[var(--section-y)]">
        <div className="mb-14 flex items-center justify-between text-muted md:mb-20">
          <span className="t-label">Bölüm / B</span>
          <span className="t-label">Manifesto</span>
        </div>

        <m.div
          className="font-display font-semibold uppercase leading-[0.86] tracking-[-0.045em] [font-stretch:86%] text-[clamp(4rem,9.5vw,10rem)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.28 }}
        >
          {statement.words.map((word, index) => {
            const align = alignments[index] ?? alignments[0];
            return (
              <p key={word} className={cn("relative", align?.line)}>
                <span className="mask-line">
                  <m.span
                    className="inline-block"
                    variants={{ hidden: { y: "135%" }, visible: { y: "0%" } }}
                    transition={{ duration: 1.1, ease: EASE }}
                  >
                    {word.slice(0, -1)}
                    <span className="text-accent">.</span>
                  </m.span>
                </span>
                {statement.notes[index] ? (
                  <span
                    className={cn(
                      "t-label t-num absolute top-1/2 hidden -translate-y-1/2 font-sans font-normal normal-case tracking-[0.14em] text-muted md:block",
                      align?.note,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")} — {statement.notes[index]}
                  </span>
                ) : null}
              </p>
            );
          })}
        </m.div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-5 text-muted md:mt-20 md:flex-row md:justify-between">
          <p className="t-label">{statement.caption}</p>
          <p className="t-label">Yunus Mimarlık — Tokat</p>
        </div>
      </div>
    </section>
  );
}
