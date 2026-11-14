import Link from 'next/link';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContactForm } from '@/components/ui/ContactForm';
import { pageSeo } from '@/content/seo';
import { site } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.iletisim);

export default function ContactPage() {
  const ld = webpageJsonLd(pageSeo.iletisim);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'İletişim', path: '/iletisim' },
        ]}
      />
      <section className="wrap grid gap-16 pb-16 pt-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">İletişim</p>
          <Reveal as="h1" mode="lines" className="h2">
            <LineSplit lines={['BİRLİKTE', 'TASARLAYALIM.']} />
          </Reveal>
          <p className="mt-6 max-w-md text-[var(--ink-2)]">{site.cta.subtitle}</p>
          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <span className="cat mb-2 block">Instagram</span>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link">
                {site.instagram.handle}
              </a>
            </li>
            {site.pending.phone ? (
              <li>
                <span className="cat mb-2 block">Telefon</span>
                <a href={`tel:${site.pending.phone}`}>{site.pending.phone}</a>
              </li>
            ) : null}
            {site.pending.email ? (
              <li>
                <span className="cat mb-2 block">E-posta</span>
                <a href={`mailto:${site.pending.email}`}>{site.pending.email}</a>
              </li>
            ) : null}
            {site.pending.address ? (
              <li>
                <span className="cat mb-2 block">Adres</span>
                <span>{site.pending.address}</span>
              </li>
            ) : (
              <li className="text-[var(--concrete)]">
                Telefon, e-posta ve adres bilgileri onay sonrası yayınlanacaktır.
              </li>
            )}
          </ul>
          <p className="mt-8">
            <Link href="/projeler" className="link">
              Projelere göz atın →
            </Link>
          </p>
          <p className="mt-3">
            <Link href="/gizlilik-politikasi" className="link">
              Gizlilik politikası →
            </Link>
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
      <InternalLinks />
    </>
  );
}
