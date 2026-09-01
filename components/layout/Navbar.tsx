"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/projeler", label: "Projeler", index: "01" },
  { href: "/hizmetler", label: "Hizmetler", index: "02" },
  { href: "/hakkimizda", label: "Hakkımızda", index: "03" },
  { href: "/blog", label: "Blog", index: "04" },
  { href: "/iletisim", label: "İletişim", index: "05" },
];

function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <rect x="1" y="1" width="30" height="30" />
      <path d="M1 1L16 16" />
      <path d="M31 1L16 16" />
      <path d="M16 16V31" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-ink)]/10 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="container-edge flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-[var(--color-ink)]"
        >
          <Monogram className="h-7 w-7 shrink-0" />
          <span className="flex items-baseline gap-3">
            <span className="font-display text-lg tracking-[0.08em]">
              YUNUS MİMARLIK
            </span>
            <span className="hidden xl:inline text-[10px] tracking-[0.14em] font-body text-[var(--color-stone)]">
              İÇ MİMARLIK ATÖLYESİ
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group inline-flex items-center gap-1.5 ${
                    active ? "text-[var(--color-bronze)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-wide transition-all duration-300 overflow-hidden ${
                      active
                        ? "max-w-[1.5rem] opacity-100 text-[var(--color-bronze)]"
                        : "max-w-0 opacity-0 group-hover:max-w-[1.5rem] group-hover:opacity-60"
                    }`}
                  >
                    {l.index}
                  </span>
                  <span className="link-underline">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://instagram.com/yunusmimarlik"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[var(--color-ink)] transition-opacity hover:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.771 1.153 4.9 4.9 0 0 1 1.153 1.771c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.771 4.9 4.9 0 0 1-1.771 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.153-1.771c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.771A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.467.182-.8.399-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.055-.06 1.372-.06 4.04 0 2.67.01 2.986.06 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.05 1.37.06 4.041.06 2.67 0 2.987-.01 4.04-.06.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.05-1.055.06-1.372.06-4.041 0-2.67-.01-2.986-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.05-1.372-.06-4.041-.06zm0 4.594a5.604 5.604 0 1 1 0 11.208 5.604 5.604 0 0 1 0-11.208zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.146-9.404a1.309 1.309 0 1 1-2.618 0 1.309 1.309 0 0 1 2.618 0z" />
            </svg>
          </a>
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 text-sm text-[var(--color-ink)]"
          >
            Proje Başlat
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <button
          aria-label="Menüyü aç"
          className="lg:hidden flex flex-col gap-1.5 w-7"
          onClick={() => setOpen(true)}
        >
          <span className="h-px w-full bg-[var(--color-ink)]" />
          <span className="h-px w-full bg-[var(--color-ink)]" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-ink)] text-[var(--color-paper)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, rgba(165,138,104,0.25), transparent 55%)",
              }}
            />

            <div className="container-edge relative flex items-center justify-between py-7">
              <span className="flex items-center gap-3">
                <Monogram className="h-6 w-6" />
                <span className="font-display text-lg tracking-[0.08em]">
                  YUNUS MİMARLIK
                </span>
              </span>
              <button
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
                className="text-2xl font-light"
              >
                ×
              </button>
            </div>

            <div className="relative flex flex-1 flex-col justify-center container-edge gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 border-b border-[var(--color-paper)]/10 py-3"
                >
                  <span className="text-eyebrow text-[var(--color-paper)]/40 w-6">
                    {l.index}
                  </span>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl md:text-5xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative container-edge pb-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--color-paper)]/60"
            >
              <a href="tel:+905455453152" className="link-underline">
                0545 545 31 52
              </a>
              <a
                href="https://instagram.com/yunusmimarlik"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                @yunusmimarlik
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
