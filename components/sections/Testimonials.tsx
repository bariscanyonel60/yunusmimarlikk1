import { testimonials } from '@/content/seo';
import { site } from '@/content/site';
import { Reveal } from '@/lib/motion/Reveal';

export function Testimonials() {
  const published = testimonials.filter((t) => t.verified);

  return (
    <section className="bg-[var(--white)] py-[clamp(4rem,10vw,6rem)]" aria-labelledby="yorum-h">
      <div className="wrap">
        <p className="eyebrow">Geri bildirim</p>
        <Reveal as="h2" className="h2 mb-8 max-w-[14ch]" id="yorum-h">
          MÜŞTERİ DENEYİMİ.
        </Reveal>

        {published.length === 0 ? (
          <div className="max-w-2xl border border-[var(--stone)] p-6 text-[var(--ink-2)]">
            <p>
              Onaylı müşteri yorumları, yazılı izin alındıktan sonra burada yayınlanır. Sahte puan veya
              uydurma referans kullanılmaz.
            </p>
            {site.preview ? (
              <p className="mt-3 text-sm text-[var(--concrete)]">
                Önizleme: yorum alanı SEO ve E-E-A-T için hazır; içerik onay sonrası eklenecektir.
              </p>
            ) : null}
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {published.map((t) => (
              <li key={t.id} className="border border-[var(--stone)] p-6">
                <blockquote className="text-[var(--ink-2)]">“{t.quote}”</blockquote>
                <p className="mt-5 font-semibold text-[var(--navy)]">{t.name}</p>
                <p className="text-sm text-[var(--concrete)]">
                  {t.role}
                  {t.project ? ` · ${t.project}` : ''}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
