import type { Metadata } from 'next';
import { site } from '@/content/site';

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}

export function pageMetadata({
  title,
  description,
  path = '/',
  image = '/assets/img/hero-yunus-giris-desktop.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: site.name,
    url: site.url,
    logo: absoluteUrl('/assets/brand/logo-navy.png'),
    image: absoluteUrl('/assets/img/hero-yunus-giris-desktop.jpg'),
    brand: {
      '@type': 'Brand',
      name: site.name,
      logo: absoluteUrl('/assets/brand/mark-transparent.png'),
    },
    description: site.description,
    sameAs: [site.instagram.url],
    areaServed: 'TR',
    knowsAbout: [
      'İç mimarlık',
      'Mimari tasarım',
      'Konut mimarlığı',
      'Ticari mekân tasarımı',
      'Mimari görselleştirme',
    ],
  };

  if (site.founder.verified) {
    org.founder = {
      '@type': 'Person',
      name: site.founder.name,
      jobTitle: site.founder.title,
    };
  }

  if (site.pending.email) org.email = site.pending.email;
  if (site.pending.phone) org.telephone = site.pending.phone;
  if (site.pending.address) {
    org.address = {
      '@type': 'PostalAddress',
      streetAddress: site.pending.address,
      addressCountry: 'TR',
    };
  }

  return org;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: 'tr',
    description: site.description,
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function webpageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
    inLanguage: 'tr',
  };
}
