import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="hizmetler" data-theme="graphite" aria-labelledby="services-title" className="relative">
      <div className="container-arch section-y">
        <SectionLabel index="02" en="Services" rule>
          Hizmetler
        </SectionLabel>

        <div className="grid-arch mt-10 items-end gap-y-8 md:mt-14">
          <h2 id="services-title" className="t-display col-span-4 md:col-span-8">
            <MaskText lines={["UZMANLIK", "ALANLARIMIZ"]} />
          </h2>
          <Reveal className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <p className="text-muted">
              Arsa analizinden anahtar teslimine; mimari ve iç mimariyi aynı ekip, aynı dil ve aynı sorumlulukla
              yürütüyoruz.
            </p>
            <ArrowLink href="/hizmetler" className="mt-6">
              Hizmet detayları
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          <ServicesAccordion services={services} />
        </div>
      </div>
    </section>
  );
}
