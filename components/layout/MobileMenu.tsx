"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { mobileNav, site } from "@/data/site";

const EASE = [0.76, 0, 0.24, 1] as const;

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: () => void;
};

export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const background = [document.getElementById("main"), document.getElementById("site-footer")];

    root.style.overflow = "hidden";
    background.forEach((node) => node?.setAttribute("inert", ""));
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 120);

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      root.style.overflow = "";
      background.forEach((node) => node?.removeAttribute("inert"));
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className="fixed inset-0 z-40 flex flex-col bg-ink text-paper lg:hidden"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div aria-hidden className="arch-blueprint pointer-events-none absolute inset-0" />

          <nav aria-label="Mobil menü" className="container-arch relative flex flex-1 flex-col justify-center pt-[var(--header-h)]">
            <p className="t-label mb-6 flex items-center gap-4 text-paper/60">
              <span>Menü</span>
              <span aria-hidden className="h-px flex-1 bg-paper/20" />
              <span className="t-num">{String(mobileNav.length).padStart(2, "0")}</span>
            </p>
            <ul className="border-t border-paper/15">
              {mobileNav.map((item, index) => (
                <li key={item.href} className="border-b border-paper/15">
                  <m.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 + index * 0.06 }}
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex min-h-[4.5rem] items-baseline gap-5 py-3"
                    >
                      <span className="t-label t-num w-7 text-wood">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-display text-[clamp(2.6rem,12vw,4.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] [font-stretch:86%]">
                        {item.label}
                      </span>
                    </Link>
                  </m.div>
                </li>
              ))}
            </ul>
          </nav>

          <m.div
            className="container-arch relative grid grid-cols-2 gap-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div>
              <p className="t-label text-paper/50">Telefon</p>
              <a href={site.phone.href} className="t-meta mt-2 inline-flex min-h-11 items-center">
                {site.phone.display}
              </a>
            </div>
            <div>
              <p className="t-label text-paper/50">Tokat / TR</p>
              <a
                href={site.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group t-meta mt-2 inline-flex min-h-11 items-center gap-2"
              >
                Tokat Merkez
                <ArrowUpRight aria-hidden className="arrow-nudge size-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
