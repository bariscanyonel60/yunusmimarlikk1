import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { pageSeo } from '@/content/seo';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = {
  ...pageMetadata(pageSeo.tesekkurler),
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  const ld = webpageJsonLd(pageSeo.tesekkurler);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'İletişim', path: '/iletisim' },
          { name: 'Teşekkürler', path: '/tesekkurler' },
        ]}
      />
      <section className="wrap pb-16 pt-8">
        <p className="eyebrow">Mesaj alındı</p>
        <h1 className="h2 max-w-[14ch]">TEŞEKKÜRLER.</h1>
        <p className="mt-6 max-w-xl text-[var(--ink-2)]">
          Talebiniz bize ulaştı. En kısa sürede dönüş yapacağız. Bu arada projelerimizi inceleyebilir
          veya Instagram’dan bizi takip edebilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projeler" className="btn btn--solid">
            Projeleri incele <span aria-hidden>→</span>
          </Link>
          <Link href="/" className="btn">
            Ana sayfa <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <InternalLinks />
    </>
  );
}
