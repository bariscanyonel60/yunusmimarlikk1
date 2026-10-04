import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { heroContent } from "@/data/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/*
 * Composition: the photograph fills the frame from the top-right and leaves a
 * dark margin on the left (desktop) and a dark strip at the bottom. The
 * headline starts in the margin and its last line straddles the photo's
 * bottom edge, tying type and image together.
 */
export function Hero() {
  const { lines, description, cta, image, meta, caption } = heroContent;

  return (
    <section
      data-theme="dark"
      aria-labelledby="hero-title"
      className="relative isolate h-[100svh] min-h-[40rem] overflow-hidden [--strip:clamp(15rem,36svh,19rem)] lg:min-h-[44rem] lg:[--strip:clamp(10rem,27svh,15rem)]"
    >
      <figure className="grain absolute inset-x-0 top-0 bottom-[var(--strip)] -z-10 overflow-hidden lg:left-[22%]">
        <div className="animate-settle absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            quality={80}
            sizes="(min-width: 1024px) 78vw, 100vw"
            className="object-cover object-[32%_50%] lg:object-center"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(18_28_40/0.6)_0%,rgb(18_28_40/0.15)_30%,rgb(18_28_40/0.35)_55%,rgb(18_28_40/0.75)_100%)] lg:bg-[linear-gradient(90deg,rgb(18_28_40/0.55)_0%,rgb(18_28_40/0)_35%),linear-gradient(180deg,rgb(18_28_40/0.45)_0%,rgb(18_28_40/0)_30%,rgb(18_28_40/0)_60%,rgb(18_28_40/0.55)_100%)]"
        />
        <figcaption className="animate-fade t-label absolute bottom-4 right-[var(--gutter)] hidden text-paper/70 sm:block" style={delay(700)}>
          {caption}
        </figcaption>
      </figure>

      <div aria-hidden className="container-arch pointer-events-none absolute inset-0 -z-10">
        <div className="arch-grid-faint h-full text-paper" />
      </div>

      <div className="container-arch relative h-full">
        <ul
          className="animate-fade absolute left-[var(--gutter)] top-[calc(var(--header-h)+3rem)] hidden w-[16%] border-t border-paper/20 text-paper/75 lg:block"
          style={delay(450)}
        >
          {meta.map((item, index) => (
            <li key={item} className="t-label flex justify-between gap-3 border-b border-paper/20 py-3">
              <span>{item}</span>
              <span className="t-num text-paper/40">{String(index + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ul>

        <p
          className="animate-fade t-label absolute left-[var(--gutter)] top-[calc(var(--header-h)+1.25rem)] text-paper/80 lg:hidden"
          style={delay(450)}
        >
          {meta[1]} — Mimarlık & İç Mimarlık
        </p>

        <h1
          id="hero-title"
          className="absolute left-[var(--gutter)] right-[var(--gutter)] bottom-[calc(var(--strip)-0.44em)] font-display font-semibold uppercase leading-[0.86] tracking-[-0.04em] text-paper [font-stretch:84%] text-[clamp(3rem,13.2vw,9.75rem)] lg:text-[clamp(4.5rem,8.6vw,10.5rem)]"
        >
          {lines.map((line, index) => (
            <span key={line} className="mask-line">
              <span className="animate-rise" style={delay(index * 110)}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="absolute inset-x-[var(--gutter)] bottom-0 flex h-[var(--strip)] flex-col justify-between pb-5 pt-[clamp(2.25rem,5svh,3.25rem)] md:pt-16 lg:pb-7 lg:pt-6">
          <div className="grid-arch">
            <div
              className="animate-fade col-span-4 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-8 xl:col-span-3 xl:col-start-9"
              style={delay(550)}
            >
              <p className="text-[1rem] leading-relaxed text-paper/80 lg:text-[1.0625rem]">{description}</p>
              <a href={cta.href} className="group t-label mt-4 inline-flex min-h-11 items-center gap-3 text-paper">
                <span className="link-line pb-0.5">{cta.label}</span>
                <ArrowDown aria-hidden className="arrow-nudge-down size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div
            className="animate-fade flex items-end justify-between gap-6 border-t border-paper/15 pt-3 text-paper/60"
            style={delay(750)}
          >
            <p className="t-label">{meta[2]} & {meta[3]}</p>
            <p className="t-label hidden items-center gap-3 md:flex">
              <span aria-hidden className="relative block h-6 w-px overflow-hidden bg-paper/20">
                <span className="scroll-cue absolute inset-0 bg-paper" />
              </span>
              Aşağı kaydırın
            </p>
            <p className="t-label t-num">Bölüm / A</p>
          </div>
        </div>
      </div>
    </section>
  );
}
