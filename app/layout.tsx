import type { Metadata, Viewport } from "next";
import { Archivo, Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Intro, introScript } from "@/components/layout/Intro";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/data/site";
import { professionalServiceSchema, websiteSchema } from "@/lib/json-ld";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Yunus Mimarlık | Tokat Mimarlık & İç Mimarlık",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  formatDetection: { telephone: true, address: true, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: "/",
    title: "Yunus Mimarlık | Tokat Mimarlık & İç Mimarlık",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Yunus Mimarlık" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus Mimarlık | Tokat Mimarlık & İç Mimarlık",
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121c28",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${archivo.variable} ${instrumentSans.variable} ${cormorant.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="t-label fixed left-4 top-4 z-[110] -translate-y-24 bg-ink px-4 py-3 text-paper transition-transform focus:translate-y-0"
        >
          İçeriğe geç
        </a>
        <Intro />
        <SmoothScroll />
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <JsonLd data={[professionalServiceSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
