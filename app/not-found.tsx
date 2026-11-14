import Link from 'next/link';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Sayfa bulunamadı — Yunus Mimarlık`,
  description: 'Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfa, projeler veya iletişim üzerinden devam edin.',
  path: '/404',
});

export default function NotFound() {
  return (
    <div className="pb-8 pt-[calc(var(--chrome)+48px)]">
      <section className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h2 max-w-[12ch]">SAYFA BULUNAMADI.</h1>
        <p className="mt-6 max-w-xl text-[var(--ink-2)]">
          Bağlantı hatalı olabilir veya sayfa kaldırılmış olabilir. Aşağıdaki bağlantılardan devam
          edebilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn btn--solid">
            Ana sayfa <span aria-hidden>→</span>
          </Link>
          <Link href="/projeler" className="btn">
            Projeler <span aria-hidden>→</span>
          </Link>
          <Link href="/iletisim" className="btn">
            İletişim <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <InternalLinks title="Popüler sayfalar" />
    </div>
  );
}
