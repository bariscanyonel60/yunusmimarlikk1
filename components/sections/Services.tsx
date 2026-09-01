"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const preview = hovered !== null ? services[hovered] : services[0];

  return (
    <section id="hizmetler" className="relative py-24 md:py-32 container-edge">
      <RevealOnScroll className="mb-14">
        <span className="text-eyebrow block mb-4">Hizmetler</span>
        <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
          Fikirden teslime, tek elden.
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-7 border-t border-[var(--color-ink)]/15">
          {services.map((service, i) => (
            <div
              key={service.index}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between border-b border-[var(--color-ink)]/15 py-7 md:py-9"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="text-eyebrow w-8">{service.index}</span>
                <h3 className="font-display text-3xl md:text-5xl transition-colors duration-300 group-hover:text-[var(--color-bronze)]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden">
            {services.map((service) => (
              <Image
                key={service.index}
                src={service.image}
                alt={service.title}
                fill
                sizes="40vw"
                className={`object-cover transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  preview.index === service.index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <p className="mt-5 text-sm text-[var(--color-stone)] leading-relaxed max-w-sm">
            {preview.description}
          </p>
        </div>
      </div>
    </section>
  );
}
