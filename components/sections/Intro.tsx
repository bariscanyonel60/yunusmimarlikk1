import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Intro() {
  return (
    <section className="py-28 md:py-40 container-edge">
      <RevealOnScroll>
        <p className="font-display font-light text-3xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.25] text-[var(--color-ink)]">
          Her arazi kendi ışığını, kendi rüzgârını taşır.{" "}
          <span className="text-[var(--color-stone)]">
            Biz bir yapıyı çizmeden önce, o yeri dinliyoruz.
          </span>
        </p>
      </RevealOnScroll>
    </section>
  );
}
