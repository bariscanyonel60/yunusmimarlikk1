import { Phone } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";
import { Parallax } from "@/components/animations/Parallax";
import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ArchImage } from "@/components/ui/ArchImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ctaContent, site } from "@/data/site";

const ctaImage = {
  src: "/images/cta.jpg",
  alt: "Koyu tonlu yatay ahşap lamel duvar",
  width: 2560,
  height: 1440,
  placeholder: true,
};

export function CallToAction() {
  return (
    <section
      data-theme="dark"
      aria-labelledby="cta-title"
      className="relative overflow-hidden"
    >
      <div className="container-arch section-y">
        <div className="grid-arch items-end gap-y-14">
          <h2 id="cta-title" className="t-display col-span-4 md:col-span-8">
            <MaskText lines={ctaContent.lines} />
          </h2>

          <div className="col-span-4 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
            <div className="media-frame mb-10 hidden md:block">
              <Parallax distance={30} className="-my-8">
                <ArchImage image={ctaImage} ratio="4 / 5" sizes="25vw" quality={70} />
              </Parallax>
            </div>
          </div>
        </div>

        <Reveal className="grid-arch mt-14 gap-y-8 border-t border-border pt-8 md:mt-20">
          <p className="t-lead col-span-4 text-foreground/80 md:col-span-5">{ctaContent.description}</p>
          <div className="col-span-4 flex flex-col gap-4 sm:flex-row sm:items-center md:col-span-6 md:col-start-7 md:justify-end">
            <Magnetic>
              <ArrowLink href={ctaContent.primary.href} variant="solid">
                {ctaContent.primary.label}
              </ArrowLink>
            </Magnetic>
            <a
              href={site.phone.href}
              className="group t-label inline-flex min-h-11 items-center gap-3 px-2 py-4"
            >
              <Phone aria-hidden className="size-4" strokeWidth={1.5} />
              <span className="link-line t-num">{site.phone.display}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
