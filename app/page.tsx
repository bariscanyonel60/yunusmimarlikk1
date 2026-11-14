import { Atmosphere } from '@/components/sections/Atmosphere';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { Intro } from '@/components/sections/Intro';
import { SelectedProjects } from '@/components/sections/SelectedProjects';
import { Services } from '@/components/sections/Services';
import { Studio } from '@/components/sections/Studio';
import { Testimonials } from '@/components/sections/Testimonials';
import { VisualStrip } from '@/components/sections/VisualStrip';
import { pageSeo } from '@/content/seo';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata(pageSeo.home);

export default function HomePage() {
  const ld = webpageJsonLd(pageSeo.home);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero />
      <VisualStrip />
      <Intro />
      <SelectedProjects />
      <Atmosphere />
      <Studio />
      <Services />
      <Faq compact />
      <Testimonials />
      <InternalLinks />
    </>
  );
}
