import { ImageReveal } from "@/components/animations/ImageReveal";
import { Parallax } from "@/components/animations/Parallax";
import { Reveal } from "@/components/animations/Reveal";
import { ArchImage } from "@/components/ui/ArchImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { about } from "@/data/site";

export function About({ withLink = true }: { withLink?: boolean }) {
  return (
    <section data-theme="sage" aria-labelledby="about-title" className="relative">
      <div className="container-arch section-y">
        <div className="grid-arch gap-y-14">
          <div className="col-span-4 md:col-span-6">
            <ImageReveal className="media-frame max-md:bleed-x md:bleed-left">
              <Parallax distance={40} className="-my-10">
                <ArchImage image={about.image} ratio="4 / 5" sizes="(min-width: 768px) 55vw, 100vw" />
              </Parallax>
            </ImageReveal>
            <div className="mt-3 flex justify-between text-muted">
              <span className="t-label">Stüdyo</span>
              <span className="t-label">Tokat Merkez</span>
            </div>
          </div>

          <div className="col-span-4 flex flex-col md:col-span-6 md:col-start-7 md:pt-10 lg:col-span-5 lg:col-start-8">
            <SectionLabel index="03" en="Studio">
              Stüdyo
            </SectionLabel>
            <h2 id="about-title" className="t-h1 mt-6">
              {about.title}
            </h2>

            <Reveal>
              <blockquote className="mt-10 border-l-2 border-accent pl-6">
                <p className="t-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.2]">“{about.quote}”</p>
              </blockquote>

              <p className="t-lead mt-10 font-medium">{about.lead}</p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-5 text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <ul className="mt-12 grid grid-cols-2 border-t border-border">
              {about.expertise.map((item, index) => (
                <li key={item} className="border-b border-border py-4 pr-3">
                  <span className="t-label t-num block text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="t-label mt-2 block text-foreground">{item.toLocaleUpperCase("tr-TR")}</span>
                </li>
              ))}
            </ul>

            {withLink ? null : (
              <dl className="mt-12 grid grid-cols-2 border-t border-border">
                {about.values.map((value, index) => (
                  <div key={value.title} className="border-b border-border py-5 pr-4 odd:border-r odd:pr-6 even:pl-6">
                    <dt className="t-label flex items-center gap-2">
                      <span className="t-num text-accent">{String(index + 1).padStart(2, "0")}</span>
                      {value.title.toLocaleUpperCase("tr-TR")}
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] text-muted">{value.text}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-12 grid grid-cols-[1fr_auto] items-end gap-6">
              <div className="max-w-[16rem]">
                <ArchImage image={about.detailImage} ratio="1 / 1" sizes="16rem" quality={70} />
              </div>
              {withLink ? (
                <ArrowLink href="/hakkimizda" className="mb-1">
                  Hakkımızda
                </ArrowLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
