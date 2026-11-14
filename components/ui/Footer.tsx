import Image from 'next/image';
import Link from 'next/link';
import { FooterMark } from '@/components/ui/FooterMark';
import { MediaCredit } from '@/components/ui/MediaCredit';
import { projects, site } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';

const footerNav = {
  keşfet: [
    { href: '/projeler', label: 'Projeler' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/hakkimizda', label: 'Stüdyo' },
    { href: '/sss', label: 'SSS' },
  ],
  yasal: [
    { href: '/gizlilik-politikasi', label: 'Gizlilik politikası' },
    { href: '/iletisim', label: 'İletişim' },
  ],
} as const;

export function Footer() {
  return (
    <footer className="ftr pt-24 text-[var(--white)]" data-theme="dark">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">İletişim</p>
            <Reveal as="h2" mode="lines" className="h2 max-w-[14ch]">
              <LineSplit lines={site.cta.title} />
            </Reveal>
            <Reveal as="p" className="mt-6 max-w-xl text-[var(--navy-soft)]">
              {site.cta.subtitle}
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <Link href="/iletisim" className="btn btn--solid">
              Projenizi konuşalım <span aria-hidden>→</span>
            </Link>
            <a className="btn" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram <span aria-hidden>→</span>
              <span className="sr-only"> (yeni sekmede açılır)</span>
            </a>
          </div>
        </div>
      </div>

      <FooterMark />

      <div className="ftr__rule mx-[var(--gut)] mt-4" aria-hidden />

      <div className="wrap grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link
            href="/"
            className="ftr__logo relative block h-14 w-[180px]"
            aria-label="Yunus Mimarlık — ana sayfa"
          >
            <Image
              className="object-contain object-left"
              src="/assets/brand/logo-light.png"
              alt="Yunus Mimarlık"
              fill
              sizes="180px"
              style={{ aspectRatio: 'auto' }}
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--navy-soft)]">
            İç mimarlık ve mimari tasarım stüdyosu. Konut, klinik ve ticari mekân projeleri.
          </p>
          <p className="text-sm">
            <a
              className="ftr__link text-[var(--petrol-soft)]"
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.instagram.handle}
            </a>
          </p>
          <MediaCredit className="text-sm" />
        </div>

        <div>
          <p className="cat mb-4 text-[var(--petrol-soft)]">Keşfet</p>
          <ul className="space-y-3 text-sm">
            {footerNav.keşfet.map((l) => (
              <li key={l.href}>
                <Link className="ftr__nav" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="cat mb-4 text-[var(--petrol-soft)]">Seçili projeler</p>
          <ul className="space-y-3 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link className="ftr__nav" href={`/projeler/${p.slug}`}>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="cat mb-4 text-[var(--petrol-soft)]">Yasal & iletişim</p>
          <ul className="space-y-3 text-sm">
            {footerNav.yasal.map((l) => (
              <li key={l.href}>
                <Link className="ftr__nav" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-[var(--navy-soft)]">
            {site.preview
              ? 'Önizleme: telefon, e-posta ve adres onay sonrası yayınlanır. Sahte puan/yorum kullanılmaz.'
              : null}
          </p>
          <p className="mt-3 text-xs text-[var(--navy-soft)]">© {new Date().getFullYear()} Yunus Mimarlık</p>
        </div>
      </div>
    </footer>
  );
}
