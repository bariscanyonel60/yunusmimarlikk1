import Link from 'next/link';
import { faqs } from '@/content/seo';
import { Reveal } from '@/lib/motion/Reveal';
import { faqJsonLd } from '@/lib/seo';

export function Faq({ compact = false }: { compact?: boolean }) {
  const list = compact ? faqs.slice(0, 5) : faqs;
  const ld = faqJsonLd(list);

  return (
    <section className="wrap py-[clamp(4rem,10vw,7rem)]" id="sss" aria-labelledby="sss-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <p className="eyebrow">Sıkça sorulan sorular</p>
      <Reveal as="h2" className="h2 mb-10 max-w-[12ch]" id="sss-h">
        MERAK EDİLENLER.
      </Reveal>
      <div className="mx-auto max-w-3xl divide-y divide-[var(--stone)] border-y border-[var(--stone)]">
        {list.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em] marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span className="text-[var(--petrol)] transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-[var(--ink-2)]">{item.a}</p>
          </details>
        ))}
      </div>
      {compact ? (
        <p className="mt-8">
          <Link href="/sss" className="link">
            Tüm soruları gör <span aria-hidden>→</span>
          </Link>
        </p>
      ) : null}
    </section>
  );
}
