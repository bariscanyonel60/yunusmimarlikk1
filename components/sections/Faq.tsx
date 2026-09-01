"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import JsonLd from "@/components/seo/JsonLd";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 md:py-32 container-edge">
      <JsonLd data={jsonLd} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <RevealOnScroll className="md:col-span-4">
          <span className="text-eyebrow block mb-4">Sık Sorulanlar</span>
          <h2 className="font-display font-light text-4xl md:text-5xl">
            Merak ettikleriniz.
          </h2>
        </RevealOnScroll>

        <div className="md:col-span-8">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <RevealOnScroll key={item.question} delay={i * 0.05}>
                <div className="border-b border-[var(--color-ink)]/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl md:text-2xl">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 text-2xl font-light transition-transform duration-400 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                    style={{ display: "grid" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[var(--color-stone)] leading-relaxed max-w-xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
