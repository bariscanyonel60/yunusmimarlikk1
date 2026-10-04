"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { Magnetic } from "@/components/animations/Magnetic";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Wordmark } from "@/components/ui/Wordmark";
import { ctaContent, mainNav } from "@/data/site";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 32;

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasDarkHero(pathname: string) {
  return pathname === "/" || /^\/projeler\/[^/]+$/.test(pathname);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );

  const onDark = menuOpen || (!scrolled && hasDarkHero(pathname));
  const solid = scrolled && !menuOpen;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500",
          onDark ? "text-paper" : "text-graphite",
          solid
            ? "border-b border-graphite/15 bg-paper/95 backdrop-blur-md backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-arch flex h-[var(--header-h)] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="relative z-10 -my-2 justify-self-start py-2"
            aria-label="Yunus Mimarlık — ana sayfa"
            onClick={() => setMenuOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-10">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="link-line t-label inline-flex min-h-11 items-center pb-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Magnetic className="hidden md:inline-block">
              <Link
                href={ctaContent.primary.href}
                className={cn(
                  "group t-label inline-flex min-h-12 items-center gap-3 border px-6 transition-colors duration-500",
                  onDark
                    ? "border-paper/40 hover:border-paper hover:bg-paper hover:text-ink"
                    : "border-graphite/30 hover:border-graphite hover:bg-graphite hover:text-paper",
                )}
              >
                {ctaContent.primary.label}
                <ArrowUpRight aria-hidden className="arrow-nudge size-4" strokeWidth={1.5} />
              </Link>
            </Magnetic>

            <button
              ref={menuButtonRef}
              type="button"
              className="t-label relative z-10 -mr-3 inline-flex min-h-11 min-w-11 items-center gap-3 px-3 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            >
              <span>{menuOpen ? "Kapat" : "Menü"}</span>
              <span aria-hidden className="relative block h-2.5 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-px w-6 bg-current transition-transform duration-500",
                    menuOpen ? "top-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute right-0 h-px bg-current transition-all duration-500",
                    menuOpen ? "top-1/2 w-6 -rotate-45" : "bottom-0 w-4",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} onNavigate={() => setMenuOpen(false)} />
    </>
  );
}
