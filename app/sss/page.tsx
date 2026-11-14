import { Faq } from '@/components/sections/Faq';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { pageSeo } from '@/content/seo';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.sss);

export default function FaqPage() {
  const ld = webpageJsonLd(pageSeo.sss);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb
        items={[
          { name: 'Ana sayfa', path: '/' },
          { name: 'SSS', path: '/sss' },
        ]}
      />
      <Faq />
      <InternalLinks title="İlgili sayfalar" />
    </>
  );
}
