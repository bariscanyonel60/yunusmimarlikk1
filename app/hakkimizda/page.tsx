import Image from 'next/image';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { pageSeo } from '@/content/seo';
import { imgPath, site } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.hakkimizda);

export default function AboutPage() {
  const ld = webpageJsonLd(pageSeo.hakkimizda);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'Stüdyo', path: '/hakkimizda' },
        ]}
      />
      <section className="wrap grid gap-12 pb-24 pt-8 lg:grid-cols-12" data-theme="light">
        <div className="lg:col-span-7">
          <p className="eyebrow">{site.studio.eyebrow}</p>
          <Reveal as="h1" mode="lines" className="h2">
            <LineSplit lines={['HER MEKÂNIN', 'BİR HİKÂYESİ', 'VAR.']} />
          </Reveal>
          <div className="mt-10 max-w-xl space-y-5 text-[var(--ink-2)]">
            {site.studio.paragraphs.map((p) => (
              <Reveal as="p" key={p.slice(0, 20)}>
                {p}
              </Reveal>
            ))}
            <Reveal as="p">
              Çalışmalarımız; konut mimarlığı, iç mimarlık, ticari mekân ve sağlık yapıları ile mimari
              görselleştirme ekseninde ilerler. Her projede oran, ışık ve malzeme bir arada düşünülür.
            </Reveal>
          </div>
          <Reveal as="p" className="mt-12">
            <span className="cat">Kurucu mimar</span>
            <br />
            <span className="mt-2 inline-block font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
              {site.founder.name}
            </span>
            {!site.founder.verified ? (
              <span className="mt-2 block text-sm text-[var(--concrete)]">
                Biyografi ve deneyim detayları onay sonrası yayınlanacaktır.
              </span>
            ) : null}
          </Reveal>
        </div>
        <Reveal as="figure" mode="mask" className="relative aspect-[3/4] overflow-hidden lg:col-span-5">
          <Image
            src={imgPath('studio-calisma.jpg')}
            alt="Yunus Mimarlık stüdyo çalışma alanı ve malzeme örnekleri"
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </Reveal>
      </section>
      <InternalLinks />
    </>
  );
}
