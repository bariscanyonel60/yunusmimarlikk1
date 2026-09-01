import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 container-edge">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
        <RevealOnScroll className="md:col-span-5 order-2 md:order-1">
          <p className="font-display font-light text-3xl md:text-4xl leading-snug mb-6">
            Mekân yalnızca dört duvardan ibaret değildir. Bir yaşam biçimidir.
          </p>
          <p className="text-[var(--color-stone)] leading-relaxed max-w-md">
            Tokat merkezli bir iç mimarlık atölyesiyiz. Her projeye, mekânı
            kullanacak insanın gündelik ritminden ve ışığın günü nasıl
            geçirdiğinden yola çıkarak başlıyoruz. Ölçekten bağımsız olarak,
            bir iç mekânın kalıcı olması için önce doğru soruları sormak
            gerektiğine inanıyoruz.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="md:col-span-7 order-1 md:order-2">
          <div className="relative aspect-[4/5] md:aspect-[5/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
              alt="Yunus Mimarlık stüdyosundan bir kesit"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
