import { ImageReveal } from "@/components/animations/ImageReveal";
import { Reveal } from "@/components/animations/Reveal";
import { PageHeader, pageImage } from "@/components/layout/PageHeader";
import { CallToAction } from "@/components/sections/CallToAction";
import { Process } from "@/components/sections/Process";
import { ArchImage } from "@/components/ui/ArchImage";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import { breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hizmetler — Mimari Tasarım ve İç Mimarlık",
  description:
    "Tokat'ta mimari tasarım, iç mimari tasarım, konut, ofis ve ticari mekân projeleri, uygulama yönetimi ve mimari danışmanlık hizmetleri.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Hizmetler"
        lines={["UZMANLIK", "ALANLARIMIZ"]}
        intro="Bir yapının ilk eskizinden iç mekândaki son detayına kadar; mimari ve iç mimariyi tek bir sorumlulukla yürütüyoruz."
        image={pageImage("hizmetler", "Brüt beton duvarlarla çevrili minimal bir avlu")}
      />

      <section data-theme="light" aria-label="Hizmet listesi">
        <div className="container-arch pb-[var(--section-y)]">
          <ol className="border-t border-border">
            {services.map((service, index) => {
              const flip = index % 2 === 1;
              return (
                <li key={service.id} id={service.slug} className="border-b border-border py-14 md:py-20">
                  <div className="grid-arch items-start gap-y-8">
                    <div className={cn("col-span-4 md:col-span-6", flip ? "md:col-start-7" : "md:col-start-1")}>
                      <p className="t-label t-num text-accent">
                        {service.number} / {String(services.length).padStart(2, "0")}
                      </p>
                      <h2 className="t-h2 mt-5">{service.title}</h2>
                      <Reveal>
                        <p className="t-lead mt-6 text-foreground/80">{service.summary}</p>
                        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                          {service.scope.map((item) => (
                            <li
                              key={item}
                              className="t-meta flex items-center gap-3 border-t border-border py-3 text-muted"
                            >
                              <span aria-hidden className="h-px w-3 bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    </div>
                    <div
                      className={cn(
                        "col-span-3 md:col-span-4 md:row-start-1",
                        flip ? "md:col-start-1" : "col-start-2 md:col-start-9",
                      )}
                    >
                      <ImageReveal from={flip ? "left" : "right"}>
                        <ArchImage
                          image={service.image}
                          ratio={index % 3 === 0 ? "4 / 5" : "1 / 1"}
                          sizes="(min-width: 768px) 33vw, 75vw"
                          quality={70}
                        />
                      </ImageReveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Process />
      <CallToAction />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ])}
      />
    </>
  );
}
