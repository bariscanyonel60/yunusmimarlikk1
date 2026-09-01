"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="text-xs tracking-[0.2em] text-[var(--color-paper)]/60">
        MEKÂN YÜKLENİYOR
      </span>
    </div>
  ),
});

export default function Experience3D() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    setIsDesktop(mq.matches);
  }, []);

  return (
    <section className="py-24 md:py-32 container-edge">
      <RevealOnScroll className="mb-10">
        <span className="text-eyebrow block mb-4">3D Mekân</span>
        <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
          Uygulamadan önce mekânı dolaşın.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-ink)] rounded-[6px]">
          {isDesktop ? (
            active ? (
              <Scene />
            ) : (
              <button
                onClick={() => setActive(true)}
                className="group absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
                  alt="Modern iç mekân önizlemesi"
                  fill
                  className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                />
                <span className="relative z-10 flex items-center gap-3 rounded-full border border-[var(--color-paper)]/60 px-6 py-3 text-sm text-[var(--color-paper)]">
                  Mekânı Keşfet
                </span>
              </button>
            )
          ) : (
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
                alt="Beton, ahşap ve doğal taşın buluştuğu minimal modern oda"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 text-[var(--color-paper)] text-xs tracking-wide">
                3D deneyim, performans için masaüstünde etkinleştirilir.
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
}
