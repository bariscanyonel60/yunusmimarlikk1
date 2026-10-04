import { Reveal } from "@/components/animations/Reveal";
import { PageHeader, pageImage } from "@/components/layout/PageHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Process } from "@/components/sections/Process";
import { Statement } from "@/components/sections/Statement";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hakkımızda — Tokat Mimarlık Stüdyosu",
  description:
    "Yunus Mimarlık; Tokat merkezli, konut, ofis ve ticari yapılar için mimari proje ve iç mekân tasarımı üreten bir mimarlık ve iç mimarlık stüdyosudur.",
  path: "/hakkimizda",
});

const principles = [
  {
    title: "Yeri okumak",
    text: "Her proje arsanın yönü, iklimi, manzarası ve komşu yapılarla kurduğu ilişkiyle başlar. Tokat'ın sert kışları ve sıcak yazları, tasarım kararlarımızın doğal bir parçasıdır.",
  },
  {
    title: "Sadeleştirmek",
    text: "İhtiyaç programını en yalın hâline indirgeyip estetiği bu sadeliğin üzerine kurarız. Gereksiz her eleman, bakımı ve maliyeti olan bir karardır.",
  },
  {
    title: "Detayda ısrar etmek",
    text: "Bir mekânın kalitesi malzemelerin birleştiği noktalarda okunur. Uygulama projelerini, şantiyede yoruma yer bırakmayacak netlikte hazırlarız.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Stüdyo"
        lines={["MEKÂNA", "BAKIŞIMIZ"]}
        intro="Tokat merkezli mimarlık ve iç mimarlık stüdyosu. Yapıyı kabuğundan son detayına kadar tek bir bütün olarak ele alıyoruz."
        image={pageImage("hakkimizda", "Beyaz, kıvrımlı cephesiyle çağdaş bir yapı")}
      />

      <About withLink={false} />

      <section data-theme="light" aria-labelledby="principles-title">
        <div className="container-arch section-y">
          <div className="grid-arch gap-y-6">
            <div className="col-span-4 md:col-span-4">
              <SectionLabel index="—">Yaklaşım</SectionLabel>
              <h2 id="principles-title" className="t-h2 mt-6">
                Üç ilke,
                <br />
                <span className="t-serif">her ölçekte.</span>
              </h2>
            </div>
          </div>
          <ol className="mt-16 grid gap-y-12 md:mt-24 md:grid-cols-3 md:gap-x-10">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-t border-border pt-6">
                <Reveal delay={index * 0.08}>
                  <p className="t-serif text-[clamp(3rem,5vw,4.5rem)] leading-none text-accent">{index + 1}</p>
                  <h3 className="t-h3 mt-6">{principle.title}</h3>
                  <p className="mt-4 text-muted">{principle.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Statement />
      <Process />
      <Contact />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ])}
      />
    </>
  );
}
