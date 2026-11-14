import Link from 'next/link';
import { breadcrumbJsonLd } from '@/lib/seo';

export type Crumb = { name: string; path: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const ld = breadcrumbJsonLd(items);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav className="wrap pt-[calc(var(--chrome)+16px)]" aria-label="Sayfa yolu">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.08em] text-[var(--ink-2)] uppercase">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden className="text-[var(--concrete)]">/</span> : null}
                {last ? (
                  <span className="text-[var(--navy)]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-[var(--petrol)]">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
