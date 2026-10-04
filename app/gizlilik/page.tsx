import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gizlilik ve Çerezler",
  description: "Yunus Mimarlık web sitesinde kişisel veriler, çerezler ve üçüncü taraf hizmetlerin kullanımı hakkında bilgilendirme.",
  path: "/gizlilik",
});

const sections = [
  {
    title: "Kişisel veriler",
    body: "Bu web sitesi iletişim formu, üyelik veya bülten gibi kişisel veri toplayan bir işlev içermez. Bizimle telefon üzerinden iletişime geçtiğinizde paylaştığınız bilgiler yalnızca talebinizi yanıtlamak amacıyla kullanılır.",
  },
  {
    title: "Çerezler",
    body: "Sitemiz kendi adına reklam veya izleme amaçlı çerez kullanmaz. Tarayıcınızın oturum depolama alanı yalnızca açılış animasyonunun aynı ziyarette tekrar gösterilmemesi için kullanılır ve kişisel veri içermez.",
  },
  {
    title: "Google Haritalar",
    body: "İletişim bölümündeki harita, siz “Haritayı yükle” düğmesine basana kadar yüklenmez. Haritayı yüklediğinizde Google tarafından sağlanan içerik görüntülenir ve Google'ın kendi gizlilik politikası geçerli olur.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader index="—" label="Yasal" lines={["GİZLİLİK", "VE ÇEREZLER"]} />
      <section data-theme="light">
        <div className="container-arch pb-[var(--section-y)]">
          <div className="grid-arch">
            <div className="col-span-4 md:col-span-7 md:col-start-4">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-border py-8">
                  <h2 className="t-h3">{section.title}</h2>
                  <p className="mt-4 text-foreground/80">{section.body}</p>
                </div>
              ))}
              <p className="t-meta border-t border-border pt-8 text-muted">
                Sorularınız için: {site.name}, {site.fullAddress} —{" "}
                <a href={site.phone.href} className="link-line">
                  {site.phone.display}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
