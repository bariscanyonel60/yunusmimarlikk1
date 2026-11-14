'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MediaCredit } from '@/components/ui/MediaCredit';
import { nav, site } from '@/content/site';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const update = () => {
      if (document.body.classList.contains('menu-open')) return;
      setScrolled(window.scrollY > 40);

      const y = 48;
      const darks = [...document.querySelectorAll<HTMLElement>('[data-theme="dark"]')].filter(
        (el) => !el.classList.contains('hdr'),
      );
      const hit = darks.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      });
      setOnDark(window.scrollY <= 40 ? true : Boolean(hit));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = open || !scrolled;
  const light = solid || onDark || open;
  const primaryNav = nav.filter((item) => item.href !== '/iletisim');

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={cn('hdr fixed inset-x-0 top-[var(--topcta)] z-50', solid ? 'hdr--solid' : 'hdr--glass')}
        data-theme={light ? 'dark' : 'light'}
        data-on={onDark ? 'dark' : 'light'}
      >
        <div className="mx-auto flex h-[var(--hdr)] w-full max-w-[1680px] items-center justify-between gap-4 px-[var(--gut)]">
          <Link
            href="/"
            className="relative z-10 shrink-0"
            aria-label="Yunus Mimarlık — ana sayfa"
          >
            <span
              className="relative block h-[calc(var(--hdr)-20px)] w-[calc((var(--hdr)-20px)*2.45)] max-h-[calc(var(--hdr)-20px)]"
              style={{ maxWidth: 'min(220px, 48vw)' }}
            >
              <Image
                src="/assets/brand/logo-navy.png"
                alt="Yunus Mimarlık"
                width={220}
                height={90}
                className={cn(
                  'absolute inset-0 h-full w-full object-contain object-left transition-opacity',
                  light ? 'opacity-0' : 'opacity-100',
                )}
                style={{ aspectRatio: 'auto' }}
                priority
              />
              <Image
                src="/assets/brand/logo-light.png"
                alt="Yunus Mimarlık"
                width={220}
                height={90}
                className={cn(
                  'absolute inset-0 h-full w-full object-contain object-left transition-opacity',
                  light ? 'opacity-100' : 'opacity-0',
                )}
                style={{ aspectRatio: 'auto' }}
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Ana menü">
            <ul className="flex items-center gap-6">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'text-[0.75rem] font-semibold tracking-[0.14em] uppercase transition-opacity',
                        active ? 'opacity-100' : 'opacity-75 hover:opacity-100',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <span className="mx-5 h-4 w-px bg-current opacity-25" aria-hidden />

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-[0.7rem] font-semibold tracking-[0.12em] uppercase opacity-70 transition-opacity hover:opacity-100"
            >
              Instagram
              <span className="sr-only"> (yeni sekmede açılır)</span>
            </a>

            <Link
              href="/iletisim"
              className={cn(
                'inline-flex h-10 items-center border px-4 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors',
                light
                  ? 'border-white/55 text-white hover:bg-white hover:text-[#0f1c36]'
                  : 'border-[#162a4f]/40 text-[#162a4f] hover:bg-[#162a4f] hover:text-white',
              )}
            >
              İletişim
            </Link>
          </nav>

          <div className="relative z-10 flex items-center gap-3 lg:hidden">
            <Link
              href="/iletisim"
              className={cn(
                'hidden h-9 items-center border px-3 text-[0.68rem] font-semibold tracking-[0.12em] uppercase sm:inline-flex',
                light ? 'border-white/50 text-white' : 'border-[#162a4f]/35 text-[#162a4f]',
              )}
            >
              İletişim
            </Link>
            <button
              type="button"
              className="flex items-center gap-3"
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
                {open ? 'Kapat' : 'Menü'}
              </span>
              <span className="flex w-6 flex-col gap-1.5" aria-hidden>
                <i className={cn('block h-px bg-current transition-transform', open && 'translate-y-[7px] rotate-45')} />
                <i className={cn('block h-px bg-current transition-opacity', open && 'opacity-0')} />
                <i className={cn('block h-px bg-current transition-transform', open && '-translate-y-[7px] -rotate-45')} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className={cn(
          'menu fixed inset-0 z-40 flex-col justify-between px-[var(--gut)] pb-10 pt-[calc(var(--chrome)+24px)] text-white',
          open ? 'flex' : 'hidden',
        )}
      >
        <div>
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]"
                >
                  <span className="ln">
                    <span style={{ ['--i' as string]: i }}>{item.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm text-[var(--navy-soft)]">
              <a href={site.instagram.url} rel="noopener noreferrer" target="_blank">
                Instagram {site.instagram.handle}
              </a>
            </p>
            <MediaCredit className="text-sm" />
          </div>
          <Link href="/iletisim" onClick={() => setOpen(false)} className="btn btn--solid w-fit">
            Projenizi konuşalım <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
