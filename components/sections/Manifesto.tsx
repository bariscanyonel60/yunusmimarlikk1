import { ImageReveal } from "@/components/animations/ImageReveal";
import { Parallax } from "@/components/animations/Parallax";
import { Reveal } from "@/components/animations/Reveal";
import { ScrollHighlight } from "@/components/animations/ScrollHighlight";
import { ArchImage } from "@/components/ui/ArchImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { manifesto } from "@/data/site";

export function Manifesto() {
  return (
    <section data-theme="light" aria-labelledby="manifesto-title" className="relative">
      <div className="container-arch pb-[var(--section-y)] pt-[var(--section-y-sm)]">
        <SectionLabel index="00" en={manifesto.labelEn} rule>
          {manifesto.label}
        </SectionLabel>

        <div className="grid-arch mt-12 gap-y-10 md:mt-20">
          <div className="col-span-4 hidden md:col-span-3 md:block">
            <p className="t-serif text-[clamp(5rem,9vw,9rem)] leading-[0.8] text-foreground/15" aria-hidden>
              “
            </p>
          </div>
          <h2 id="manifesto-title" className="col-span-4 md:col-span-9">
            <ScrollHighlight lines={manifesto.statement} className="t-statement" />
          </h2>
        </div>

        <div className="grid-arch mt-16 items-end gap-y-12 md:mt-28">
          <figure className="col-span-3 md:col-span-4 lg:col-span-3 lg:col-start-2">
            <ImageReveal className="media-frame">
              <Parallax distance={30} className="-my-6">
                <ArchImage image={manifesto.image} ratio="4 / 5" sizes="(min-width: 1024px) 24vw, (min-width: 768px) 33vw, 75vw" />
              </Parallax>
            </ImageReveal>
            <figcaption className="t-label mt-3 flex justify-between text-muted">
              <span>Detay / Beton & ışık</span>
              <span className="t-num">A—01</span>
            </figcaption>
          </figure>

          <Reveal className="col-span-4 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-6">
            <p className="t-lead text-foreground/85">{manifesto.body}</p>

            <dl className="mt-10 grid border-t border-border sm:grid-cols-3">
              {manifesto.disciplines.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <dt className="t-label flex items-center gap-2 text-foreground">
                    <span className="t-num text-accent">{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>

            <ArrowLink href="/hakkimizda" className="mt-8">
              Stüdyoyu tanıyın
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
