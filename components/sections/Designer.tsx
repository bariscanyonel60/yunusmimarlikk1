import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Designer() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-alt)]">
      <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        <RevealOnScroll className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
              alt="Yunus Mimarlık kurucu iç mimarı çalışma masasında"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12} className="md:col-span-7">
          <span className="text-eyebrow block mb-4">Tasarımcı</span>
          <p className="font-display font-light text-3xl md:text-5xl leading-snug mb-8 max-w-xl">
            &quot;Bir mekânı severim, çünkü içinde yaşayacak insanı henüz
            tanımadan onun için bir taslak çizmiş olurum.&quot;
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed max-w-lg mb-8">
            Yunus Mimarlık&apos;ı kurmadan önce yıllarca farklı ölçeklerde konut
            ve ticari mekan projelerinde çalıştım. Her projede aynı soruyu
            sorarım: bu mekânda kim, nasıl yaşayacak? Cevap, malzemeden ışığa
            kadar her kararı şekillendirir.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <span className="text-eyebrow block mb-1">Deneyim</span>
              <span className="font-display text-xl">10+ Yıl</span>
            </div>
            <div>
              <span className="text-eyebrow block mb-1">Tamamlanan Proje</span>
              <span className="font-display text-xl">60+</span>
            </div>
            <div>
              <span className="text-eyebrow block mb-1">Çalışma Alanı</span>
              <span className="font-display text-xl">Konut · Ticari</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
