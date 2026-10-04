import { MaskText, Reveal } from "@/components/animations/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { MapPanel } from "@/components/ui/MapPanel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";

export function Contact({ index = "06", headline = true }: { index?: string; headline?: boolean }) {
  return (
    <section id="iletisim" data-theme="light" aria-labelledby="contact-title" className="relative">
      <div className="container-arch section-y">
        <SectionLabel index={index} en="Contact" rule>
          İletişim
        </SectionLabel>

        {headline ? (
          <h2 id="contact-title" className="t-display-xl mt-10 text-[clamp(2.6rem,11.4vw,11rem)] md:mt-14">
            <MaskText
              lines={["BİR PROJEYİ", "BİRLİKTE", "TASARLAYALIM."]}
              className="md:[&>span:nth-child(2)]:pl-[16.666%]"
            />
          </h2>
        ) : (
          <h2 id="contact-title" className="sr-only">
            İletişim bilgileri
          </h2>
        )}

        <div className="grid-arch mt-16 gap-y-14 md:mt-24">
          <Reveal className="col-span-4 md:col-span-6 lg:col-span-5">
            <p className="t-label text-muted">Telefon</p>
            <a
              href={site.phone.href}
              className="link-line t-num font-display mt-3 inline-block text-[clamp(2.25rem,4.4vw,4.25rem)] font-medium leading-none tracking-[-0.03em]"
            >
              {site.phone.display}
            </a>

            <p className="t-label mt-12 text-muted">Adres</p>
            <address className="t-meta mt-3 not-italic leading-relaxed">
              <strong className="font-medium">{site.name}</strong>
              <br />
              {site.address.building}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.district} / {site.address.city}
            </address>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {headline ? (
                <ArrowLink href="/iletisim" variant="solid">
                  İletişime geç
                </ArrowLink>
              ) : null}
              <ArrowLink href={site.phone.href} direction="right">
                Hemen arayın
              </ArrowLink>
              <ArrowLink href={site.maps.directionsUrl}>Yol tarifi al</ArrowLink>
            </div>
          </Reveal>

          <div className="col-span-4 md:col-span-6 lg:col-span-6 lg:col-start-7">
            <MapPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
