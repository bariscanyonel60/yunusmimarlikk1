import type { Metadata, Viewport } from 'next';
import { Archivo, Manrope } from 'next/font/google';
import { Footer } from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';
import { Cursor } from '@/components/ui/Cursor';
import { StickyCta } from '@/components/ui/StickyCta';
import { TopCta } from '@/components/ui/TopCta';
import { SmoothScroll } from '@/lib/motion/SmoothScroll';
import { organizationJsonLd, pageMetadata, websiteJsonLd } from '@/lib/seo';
import { pageSeo } from '@/content/seo';
import { site } from '@/content/site';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#162A4F',
  colorScheme: 'light',
};

const homeMeta = pageMetadata(pageSeo.home);

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...homeMeta,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  icons: {
    icon: [
      { url: '/assets/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/brand/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/assets/brand/favicon-32.png'],
  },
  other: {
    'msapplication-TileColor': '#162A4F',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [organizationJsonLd(), websiteJsonLd()];

  return (
    <html lang="tr" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip" href="#icerik">
          İçeriğe geç
        </a>
        <TopCta />
        <SmoothScroll>
          <Header />
          <main id="icerik">{children}</main>
          <Footer />
          <StickyCta />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
