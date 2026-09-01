import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://yunusmimarlik.com"),
  title: {
    default: "Yunus Mimarlık | Tokat İç Mimarlık Atölyesi",
    template: "%s",
  },
  description:
    "Tokat mimarlık ve iç mimarlık hizmeti: salon tasarımı, mutfak tasarımı, iş yeri ve ofis tasarımı, villa ve konut projeleri. Yunus Mimarlık ile mekânınızı birlikte tasarlayalım.",
  alternates: { canonical: "https://yunusmimarlik.com" },
  openGraph: {
    title: "Yunus Mimarlık | Tokat İç Mimarlık Atölyesi",
    description:
      "Tokat mimarlık ve iç mimarlık hizmeti: salon tasarımı, mutfak tasarımı, iş yeri ve ofis tasarımı, villa ve konut projeleri.",
    locale: "tr_TR",
    type: "website",
    siteName: "Yunus Mimarlık",
    url: "https://yunusmimarlik.com",
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "TR-60",
    "geo.placename": "Tokat",
    "geo.position": "40.3167;36.5500",
    ICBM: "40.3167, 36.5500",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InteriorDesigner",
      "@id": "https://yunusmimarlik.com/#business",
      name: "Yunus Mimarlık",
      image: "https://yunusmimarlik.com/og.jpg",
      description:
        "Tokat merkezli iç mimarlık atölyesi. Salon tasarımı, mutfak tasarımı, iş yeri ve ofis tasarımı, villa ve konut projeleri.",
      telephone: "+905455453152",
      priceRange: "₺₺-₺₺₺",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "CİMCİM İş Merkezi, Alipaşa, Gaziosmanpaşa Bulvarı No:190/C Kat:3",
        addressLocality: "Tokat",
        addressRegion: "Tokat",
        postalCode: "60100",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.3167,
        longitude: 36.55,
      },
      areaServed: [
        { "@type": "City", name: "Tokat" },
        { "@type": "City", name: "Amasya" },
        { "@type": "City", name: "Sivas" },
        { "@type": "City", name: "Samsun" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      url: "https://yunusmimarlik.com",
      sameAs: ["https://instagram.com/yunusmimarlik"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://yunusmimarlik.com/#localbusiness",
      name: "Yunus Mimarlık",
      telephone: "+905455453152",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "CİMCİM İş Merkezi, Alipaşa, Gaziosmanpaşa Bulvarı No:190/C Kat:3",
        addressLocality: "Tokat",
        addressRegion: "Tokat",
        postalCode: "60100",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.3167,
        longitude: 36.55,
      },
    },
    {
      "@type": "WebSite",
      name: "Yunus Mimarlık",
      url: "https://yunusmimarlik.com",
      inLanguage: "tr-TR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
