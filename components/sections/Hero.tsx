"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HEADLINE_WORDS = ["İç", "mekâna", "kimlik", "kazandırıyoruz."];

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: 0.35 + i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Sıcak ışıkla aydınlanmış, doğal malzemeli modern iç mekân"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/25 to-[var(--color-ink)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/50 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end container-edge pb-20 md:pb-24 text-[var(--color-paper)]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-eyebrow text-[var(--color-paper)]/70 mb-6"
        >
          Yunus Mimarlık — İç Mimarlık Atölyesi, Tokat
        </motion.span>

        <h1 className="font-display font-light text-huge max-w-4xl flex flex-wrap gap-x-[0.22em]">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word} className="overflow-hidden inline-block pb-[0.1em]">
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <p className="text-sm tracking-wide text-[var(--color-paper)]/80">
            İç Mimari &nbsp;·&nbsp; Stil Danışmanlığı &nbsp;·&nbsp; Malzeme Küratörlüğü &nbsp;·&nbsp; Uygulama
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/projeler" className="group inline-flex items-center gap-2">
              Projeleri Keşfet
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="/iletisim" className="group inline-flex items-center gap-2">
              Bir Projeniz mi Var?
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-3 text-[var(--color-paper)]/55">
        <span className="text-[10px] tracking-[0.2em] [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="h-10 w-px bg-[var(--color-paper)]/50" />
      </div>
    </section>
  );
}
