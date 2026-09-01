"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  { index: "01", title: "Tanışma", description: "Arazi, bütçe ve beklentileri birlikte konuşuyoruz." },
  { index: "02", title: "Analiz", description: "Yön, eğim, iklim ve çevresel veriyi topluyoruz." },
  { index: "03", title: "Konsept", description: "Kütle ve mekân kurgusunu ilk kez somutlaştırıyoruz." },
  { index: "04", title: "Tasarım", description: "Plan, cephe ve malzeme kararlarını detaylandırıyoruz." },
  { index: "05", title: "Uygulama", description: "Şantiyeyi ve imalatı yerinde takip ediyoruz." },
  { index: "06", title: "Teslim", description: "Mekânı, tasarlandığı gibi teslim ediyoruz." },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 container-edge">
      <RevealOnScroll className="mb-14">
        <span className="text-eyebrow block mb-4">Süreç</span>
        <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
          Nasıl çalışıyoruz.
        </h2>
      </RevealOnScroll>

      <div className="relative h-px w-full bg-[var(--color-ink)]/10 mb-0 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="absolute inset-0 h-px bg-[var(--color-bronze)]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
        {steps.map((step, i) => (
          <div key={step.index} className="relative pt-5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.12 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ originX: 0 }}
              className="absolute top-0 left-0 h-[1.5px] w-full bg-[var(--color-ink)]/30"
            />
            <span className="text-eyebrow block mb-4">{step.index}</span>
            <h3 className="font-display text-2xl mb-2">{step.title}</h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
