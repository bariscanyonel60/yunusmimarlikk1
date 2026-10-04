import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ImageAsset } from "@/lib/types";

type PageHeaderProps = {
  index: string;
  label: string;
  lines: readonly string[];
  intro?: string;
  aside?: ReactNode;
  image?: ImageAsset;
};

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function pageImage(name: string, alt: string): ImageAsset {
  return { src: `/images/pages/${name}.jpg`, alt, width: 2560, height: 1440, placeholder: true };
}

export function PageHeader({ index, label, lines, intro, aside, image }: PageHeaderProps) {
  return (
    <section data-theme="light" className="relative">
      <div aria-hidden className="container-arch pointer-events-none absolute inset-0">
        <div className="arch-grid-lines h-full opacity-50" />
      </div>
      <div className="container-arch relative pb-[var(--section-y-sm)] pt-[calc(var(--header-h)+clamp(3.5rem,9vw,8rem))]">
        <div className="animate-fade" style={delay(0)}>
          <SectionLabel index={index} rule>
            {label}
          </SectionLabel>
        </div>
        <div className="grid-arch mt-8 items-end gap-y-10">
          <h1 className="t-display-xl col-span-4 text-[clamp(3rem,11vw,10rem)] md:col-span-9">
            {lines.map((line, i) => (
              <span key={line} className="mask-line">
                <span className="animate-rise" style={delay(i * 100)}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          {intro || aside ? (
            <div className="animate-fade col-span-4 md:col-span-3 md:col-start-10" style={delay(350)}>
              {intro ? <p className="text-foreground/80">{intro}</p> : null}
              {aside}
            </div>
          ) : null}
        </div>
      </div>

      {image ? (
        <figure className="animate-unveil relative h-[56svh] overflow-hidden md:h-[78svh]" style={delay(250)}>
          <Image src={image.src} alt={image.alt} fill preload sizes="100vw" quality={80} className="object-cover" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent_0%,rgb(18_28_40/0.6)_100%)]"
          />
          <figcaption className="container-arch t-label absolute inset-x-0 bottom-0 flex justify-between pb-5 text-paper/80 md:pb-8">
            <span>{label}</span>
            <span>Temsili görsel</span>
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}
