import Link from 'next/link';

export function TopCta() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[var(--topcta)] bg-[var(--navy-deep)] text-[var(--white)]">
      <div className="wrap flex h-full items-center justify-between gap-3 text-[0.65rem] font-medium tracking-[0.06em] sm:text-xs">
        <p className="min-w-0 truncate opacity-90">
          <span className="sm:hidden">Ücretsiz ön görüşme</span>
          <span className="hidden sm:inline">
            İç mimarlık projeniz için{' '}
            <span className="text-[var(--petrol-soft)]">ücretsiz ön görüşme</span> talebi bırakın.
          </span>
        </p>
        <Link
          href="/iletisim"
          className="shrink-0 inline-flex items-center gap-2 border border-[color-mix(in_srgb,var(--white)_40%,transparent)] px-3 py-1.5 uppercase tracking-[0.12em] transition-colors hover:bg-[var(--white)] hover:text-[var(--navy-deep)]"
        >
          Teklif al <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
