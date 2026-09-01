import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | Yunus Mimarlık",
  description:
    "Yunus Mimarlık web sitesi gizlilik politikası ve 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "https://yunusmimarlik.com/gizlilik-politikasi" },
  robots: { index: true, follow: true },
};

export default function GizlilikPage() {
  return (
    <main className="pt-36 md:pt-44 pb-24">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
        ]}
      />

      <div className="container-edge max-w-3xl">
        <span className="text-eyebrow block mb-4">Yasal</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mb-10">
          Gizlilik Politikası &amp; KVKK Aydınlatma Metni
        </h1>

        <div className="flex flex-col gap-8 text-[var(--color-stone)] leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              1. Veri Sorumlusu
            </h2>
            <p>
              İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması
              Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla
              Yunus Mimarlık (&quot;Şirket&quot;) tarafından, CİMCİM İş
              Merkezi, Alipaşa, Gaziosmanpaşa Bulvarı No:190/C Kat:3, Tokat
              adresinde faaliyet gösteren işletmemizce hazırlanmıştır.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              2. İşlenen Kişisel Veriler
            </h2>
            <p>
              İletişim formu üzerinden veya WhatsApp / telefon yoluyla
              tarafımızla iletişime geçtiğinizde ad-soyad, telefon numarası,
              e-posta adresi ve paylaştığınız proje detaylarına ilişkin
              bilgiler işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              3. İşleme Amacı
            </h2>
            <p>
              Toplanan veriler; talebinizi değerlendirmek, sizinle iletişime
              geçmek, teklif hazırlamak ve mevcut bir proje sürecini
              yürütmek amacıyla işlenir. Verileriniz, açık rızanız olmaksızın
              üçüncü taraflarla pazarlama amacıyla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              4. Saklama Süresi
            </h2>
            <p>
              Kişisel verileriniz, ilgili mevzuatta öngörülen süreler ve
              işleme amacının gerektirdiği süre boyunca saklanır; bu sürenin
              sonunda silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              5. Haklarınız
            </h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin
              işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi
              talep etme, işlenme amacını ve amacına uygun kullanılıp
              kullanılmadığını öğrenme, yurt içinde veya yurt dışında
              aktarıldığı üçüncü kişileri bilme, eksik veya yanlış
              işlenmişse düzeltilmesini isteme ve mevzuatta öngörülen
              şartlar çerçevesinde silinmesini veya yok edilmesini isteme
              haklarına sahipsiniz.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[var(--color-ink)] mb-3">
              6. İletişim
            </h2>
            <p>
              Haklarınızı kullanmak veya sorularınız için{" "}
              <a href="tel:+905455453152" className="link-underline">
                0545 545 31 52
              </a>{" "}
              numaralı telefondan veya{" "}
              <a href="/iletisim" className="link-underline">
                iletişim sayfamızdan
              </a>{" "}
              bize ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
