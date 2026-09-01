"use client";

import { useState } from "react";
import Image from "next/image";
import { materials } from "@/data/materials";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function MaterialsPalette() {
  const [active, setActive] = useState(materials[0]);

  return (
    <section className="py-24 md:py-32 container-edge">
      <RevealOnScroll className="mb-14 max-w-2xl">
        <span className="text-eyebrow block mb-4">Malzeme & Doku</span>
        <h2 className="font-display font-light text-4xl md:text-6xl mb-5">
          Her mekân, dokunulabilir bir palet ile başlar.
        </h2>
        <p className="text-[var(--color-stone)] leading-relaxed">
          Tasarıma başlamadan önce malzemeyi elimize alırız. Aşağıdaki
          örnekler, projelerimizde sık kullandığımız dokuların bir kesiti —
          birine dokunun, nerede kullandığımızı görün.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch">
          {/* Large preview */}
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[6px]">
            {materials.map((m) => (
              <div
                key={m.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  active.id === m.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-ink)]/80 to-transparent p-6 md:p-8">
              <p className="text-[var(--color-paper)] text-xs tracking-wide">
                {active.category}
              </p>
              <h3 className="font-display text-[var(--color-paper)] text-3xl md:text-4xl">
                {active.name}
              </h3>
            </div>
          </div>

          {/* Swatch list */}
          <div className="md:col-span-5 flex flex-col justify-center gap-1">
            {materials.map((m) => (
              <button
                key={m.id}
                onMouseEnter={() => setActive(m)}
                onFocus={() => setActive(m)}
                onClick={() => setActive(m)}
                className={`group flex items-center gap-5 border-b border-[var(--color-ink)]/12 py-4 text-left transition-colors ${
                  active.id === m.id ? "text-[var(--color-bronze)]" : ""
                }`}
              >
                <span
                  className="h-9 w-9 shrink-0 rounded-full border border-[var(--color-ink)]/15 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: m.hex }}
                />
                <span className="flex-1">
                  <span className="block font-display text-xl">{m.name}</span>
                  <span className="block text-xs text-[var(--color-stone)]">
                    {m.category}
                  </span>
                </span>
                <span
                  className={`text-sm transition-transform duration-300 ${
                    active.id === m.id ? "translate-x-1" : ""
                  }`}
                >
                  →
                </span>
              </button>
            ))}
            <p className="mt-6 text-sm text-[var(--color-stone)] leading-relaxed max-w-sm">
              {active.note}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
