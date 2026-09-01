import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `https://yunusmimarlik.com${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-edge mb-6">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-stone)]">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="text-[var(--color-ink)]">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[var(--color-ink)]">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
