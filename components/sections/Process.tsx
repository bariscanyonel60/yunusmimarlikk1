import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="surec" data-theme="mist" aria-labelledby="process-title" className="relative">
      <div className="container-arch section-y">
        <SectionLabel index="04" en="Process" rule>
          Süreç
        </SectionLabel>

        <div className="grid-arch mt-10 items-end gap-y-8 md:mt-14">
          <h2 id="process-title" className="t-display col-span-4 md:col-span-9">
            <MaskText lines={["BİR PROJEYİ", "NASIL ELE ALIYORUZ?"]} />
          </h2>
          <Reveal className="col-span-4 md:col-span-3">
            <p className="text-muted">
              Altı adımlı, şeffaf bir süreç. Her aşamanın sonunda somut bir çıktı ve sizin onayınız var.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          <ProcessTimeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
