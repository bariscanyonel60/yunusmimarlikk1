import Link from 'next/link';

const links = [
  {
    href: '/projeler',
    title: 'Projeler',
    text: 'Klinik, konut ve ticari mekân çalışmalarını inceleyin.',
  },
  {
    href: '/hizmetler',
    title: 'Hizmetler',
    text: 'İç mimarlık, mimari tasarım ve görselleştirme kapsamı.',
  },
  {
    href: '/hakkimizda',
    title: 'Stüdyo',
    text: 'Tasarım yaklaşımımız ve stüdyo felsefemiz.',
  },
  {
    href: '/sss',
    title: 'SSS',
    text: 'Süreç, görselleştirme ve başlangıç hakkında sorular.',
  },
  {
    href: '/iletisim',
    title: 'İletişim',
    text: 'Yeni projeniz için bize yazın.',
  },
] as const;

export function InternalLinks({ title = 'Keşfetmeye devam edin' }: { title?: string }) {
  return (
    <section className="wrap border-t border-[var(--stone)] py-16" aria-labelledby="ic-link-h">
      <h2 id="ic-link-h" className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
        {title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block h-full border border-[var(--stone)] p-5 transition-colors hover:border-[var(--petrol)]"
            >
              <span className="font-semibold text-[var(--navy)]">{l.title}</span>
              <span className="mt-2 block text-sm text-[var(--ink-2)]">{l.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
