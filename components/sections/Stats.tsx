import { Counter } from "@/components/animations/Counter";
import { hasPublishedStats, stats } from "@/data/stats";

/**
 * Renders only once real figures exist in data/stats.ts. In development the
 * empty grid is shown so the layout can be reviewed without inventing numbers.
 */
export function Stats() {
  const preview = !hasPublishedStats && process.env.NODE_ENV !== "production";
  if (!hasPublishedStats && !preview) return null;

  return (
    <section data-theme="dark" aria-label="Rakamlarla Yunus Mimarlık" className="relative">
      <div className="container-arch pb-[var(--section-y-sm)]">
        {preview ? (
          <p className="t-label mb-6 border border-dashed border-border px-4 py-3 text-muted">
            Geliştirme önizlemesi — gerçek veriler data/stats.ts dosyasına girildiğinde bu bölüm yayında görünür.
          </p>
        ) : null}
        <dl className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="border-b border-border py-8 pr-4 odd:border-r max-lg:even:pl-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="t-label flex items-center gap-2 text-muted">
                <span className="t-num">{String(index + 1).padStart(2, "0")}</span>
                {stat.label}
              </dt>
              <dd className="font-display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none tracking-[-0.04em]">
                {stat.value === null ? (
                  <span className="text-muted">
                    <span aria-hidden>—</span>
                    <span className="sr-only">Veri bekleniyor</span>
                  </span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
