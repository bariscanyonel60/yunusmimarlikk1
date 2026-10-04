import { Reveal } from "@/components/animations/Reveal";
import { PageHeader, pageImage } from "@/components/layout/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim — Tokat Mimarlık & İç Mimarlık Ofisi",
  description: `Yunus Mimarlık, ${site.fullAddress}. Telefon: ${site.phone.display}. Mimari proje ve iç mekân tasarımı için stüdyomuzla iletişime geçin.`,
  path: "/iletisim",
});

const preparation = [
  "Projenin konumu: arsa, daire veya ticari mekân bilgisi",
  "Yaklaşık metrekare ve mevcut durum (yeni yapı, yenileme, dönüşüm)",
  "Varsa tapu, imar durumu veya mevcut proje çizimleri",
  "Beklentileriniz, zaman planınız ve öngördüğünüz bütçe aralığı",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="06"
        label="İletişim"
        lines={["PROJENİZİ", "KONUŞALIM."]}
        intro="Yeni bir yapı, yaşam alanınızın yenilenmesi veya ticari mekânınız için Tokat'taki stüdyomuzla iletişime geçin."
        aside={
          <ArrowLink href={site.phone.href} direction="right" className="mt-6">
            {site.phone.display}
          </ArrowLink>
        }
        image={pageImage("iletisim", "Gece aydınlatılmış pencereleriyle çağdaş bir yapı cephesi")}
      />

      <Contact index="01" headline={false} />

      <section data-theme="light" aria-labelledby="prepare-title">
        <div className="container-arch section-y">
          <div className="grid-arch gap-y-12">
            <div className="col-span-4 md:col-span-5">
              <SectionLabel index="02">İlk görüşme</SectionLabel>
              <h2 id="prepare-title" className="t-h2 mt-6">
                Görüşmeye gelirken
                <br />
                <span className="t-serif">yanınızda olsun.</span>
              </h2>
            </div>
            <Reveal className="col-span-4 md:col-span-6 md:col-start-7">
              <ol className="border-t border-border">
                {preparation.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] border-b border-border py-5">
                    <span className="t-label t-num pt-1 text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-muted">
                Hepsinin hazır olması gerekmiyor. İlk görüşmede ihtiyaçlarınızı birlikte netleştiriyoruz.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
    </>
  );
}
