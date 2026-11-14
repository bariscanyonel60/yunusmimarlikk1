'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

export function StickyCta() {
  const [show, setShow] = useState(false);
  const phone = site.pending.phone;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed right-[var(--gut)] bottom-5 z-40 flex flex-col items-end gap-2 transition-all duration-400',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      {phone ? (
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="inline-flex min-h-12 items-center gap-2 bg-[var(--navy)] px-4 text-sm font-semibold tracking-[0.04em] text-[var(--white)] shadow-[0_8px_28px_color-mix(in_srgb,var(--navy)_45%,transparent)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
        >
          <span aria-hidden>☎</span> Hemen ara
        </a>
      ) : (
        <Link
          href="/iletisim"
          className="inline-flex min-h-12 items-center gap-2 bg-[var(--petrol)] px-4 text-sm font-semibold tracking-[0.04em] text-[var(--white)] shadow-[0_8px_24px_color-mix(in_srgb,var(--petrol)_40%,transparent)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_color-mix(in_srgb,var(--petrol)_50%,transparent)]"
        >
          Proje yazın <span aria-hidden>→</span>
        </Link>
      )}
      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 items-center border border-[var(--navy)] bg-[var(--white)]/95 px-3 text-xs font-semibold tracking-[0.08em] text-[var(--navy)] uppercase backdrop-blur transition-colors duration-300 hover:border-[var(--petrol)] hover:text-[var(--petrol)]"
      >
        Instagram
      </a>
    </div>
  );
}
