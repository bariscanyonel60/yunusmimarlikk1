"use client";

import { m, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

type ScrollHighlightProps = {
  /** Words wrapped in *asterisks* are rendered in the editorial serif. */
  lines: readonly string[];
  className?: string;
};

/** Words shift from faint to full contrast as the passage scrolls through the viewport. */
export function ScrollHighlight({ lines, className }: ScrollHighlightProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 50%"] });

  const words = lines.flatMap((line, lineIndex) => {
    const parts = line.split(" ");
    return parts.map((raw, wordIndex) => {
      const accent = raw.startsWith("*") && raw.includes("*", 1);
      return {
        word: accent ? raw.replaceAll("*", "") : raw,
        accent,
        key: `${lineIndex}-${wordIndex}`,
        breakAfter: wordIndex === parts.length - 1 && lineIndex !== lines.length - 1,
      };
    });
  });

  return (
    <p ref={ref} className={className}>
      {words.map((item, index) => (
        <span key={item.key}>
          <Word
            progress={scrollYProgress}
            range={[index / words.length, (index + 1) / words.length]}
            accent={item.accent}
          >
            {item.word}
          </Word>
          {item.breakAfter ? <br className="hidden md:block" /> : " "}
        </span>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <m.span style={{ opacity }} className={accent ? "t-serif text-accent" : undefined}>
      {children}
    </m.span>
  );
}
