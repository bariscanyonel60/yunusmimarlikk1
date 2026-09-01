"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80";
const AFTER_IMAGE =
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  return (
    <section className="py-24 md:py-32 container-edge">
      <RevealOnScroll className="mb-10 max-w-2xl">
        <span className="text-eyebrow block mb-4">Dönüşüm</span>
        <h2 className="font-display font-light text-4xl md:text-6xl mb-5">
          Aynı mekân, iki farklı hikaye.
        </h2>
        <p className="text-[var(--color-stone)] leading-relaxed">
          Taş Ev projesinde, yüz yıllık dokuyu koruyarak çağdaş bir yaşam
          alanı kurguladık. Ayırıcıyı sürükleyerek dönüşümü görün.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          onMouseMove={(e) => {
            if (dragging.current) updateFromClientX(e.clientX);
          }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-[6px] cursor-ew-resize"
        >
          <Image
            src={AFTER_IMAGE}
            alt="Taş Ev — sonra"
            fill
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src={BEFORE_IMAGE}
              alt="Taş Ev — önce"
              fill
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
            <span className="absolute bottom-6 left-6 text-eyebrow text-[var(--color-paper)]/80">
              ÖNCE
            </span>
          </div>
          <span className="absolute bottom-6 right-6 text-eyebrow text-[var(--color-paper)]/80">
            SONRA
          </span>

          <div
            className="absolute top-0 bottom-0 w-px bg-[var(--color-paper)]"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-paper)] flex items-center justify-center text-xs gap-0.5">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
