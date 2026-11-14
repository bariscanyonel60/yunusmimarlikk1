import { InternalLinks } from '@/components/sections/InternalLinks';
import { Services } from '@/components/sections/Services';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { pageSeo } from '@/content/seo';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.hizmetler);

export default function ServicesPage() {
  const ld = webpageJsonLd(pageSeo.hizmetler);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'Hizmetler', path: '/hizmetler' },
        ]}
      />
      <section className="wrap pt-8">
        <p className="eyebrow">Hizmetler</p>
        <Reveal as="h1" mode="lines" className="h2 mb-4">
          <LineSplit lines={['NELER', 'YAPIYORUZ.']} />
        </Reveal>
        <p className="mb-4 max-w-xl text-[var(--ink-2)]">
          Aşağıdaki kategoriler başlangıç listesidir; kapsam işletme onayıyla güncellenebilir.
        </p>
      </section>
      <Services heading={false} />
      <InternalLinks />
    </>
  );
}
