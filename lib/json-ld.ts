import { services } from "@/data/services";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: site.url,
    description: site.description,
    telephone: site.phone.e164,
    image: absoluteUrl("/og.jpg"),
    logo: absoluteUrl("/icon.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.building}, ${site.address.street}`,
      addressLocality: site.address.district,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: site.address.city },
    hasMap: site.maps.directionsUrl,
    knowsAbout: ["Mimarlık", "İç mimarlık", "Mimari proje", "İç mekân tasarımı"],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.summary },
    })),
    ...(site.social.length > 0 ? { sameAs: site.social.map((item) => item.href) } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: site.url,
    inLanguage: "tr-TR",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
