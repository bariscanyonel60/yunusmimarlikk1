import Link from 'next/link';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { pageSeo, privacySections } from '@/content/seo';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.gizlilik);

export default function PrivacyPage() {
  const ld = webpageJsonLd(pageSeo.gizlilik);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'Gizlilik politikası', path: '/gizlilik-politikasi' },
        ]}
      />
      <article className="wrap pb-16 pt-8">
        <p className="eyebrow">Yasal</p>
        <h1 className="h2 max-w-[16ch]">GİZLİLİK POLİTİKASI.</h1>
        <p className="mt-6 max-w-2xl text-[var(--ink-2)]">
          Bu metin, web sitesi ziyaretçilerini ve iletişim formu kullanıcılarını bilgilendirmek için
          hazırlanmıştır. Resmi unvan ve adres bilgileri onay sonrası güncellenir.
        </p>
        <div className="mt-12 max-w-3xl space-y-8">
          {privacySections.map((s) => (
            <section key={s.title}>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em]">
                {s.title}
              </h2>
              <p className="mt-3 text-[var(--ink-2)]">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12">
          <Link href="/iletisim" className="link">
            İletişime geçin <span aria-hidden>→</span>
          </Link>
        </p>
      </article>
      <InternalLinks />
    </>
  );
}
