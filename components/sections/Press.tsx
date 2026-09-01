import RevealOnScroll from "@/components/ui/RevealOnScroll";

const mentions = ["Mimarist", "İç Mekan Dergisi", "Habitat", "Arkitera", "XXI"];

export default function Press() {
  return (
    <section className="py-16 md:py-20 border-y border-[var(--color-ink)]/10">
      <div className="container-edge">
        <RevealOnScroll>
          <p className="text-eyebrow mb-8 text-center md:text-left">
            Yayınlarda
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6">
            {mentions.map((name) => (
              <span
                key={name}
                className="font-display text-2xl md:text-3xl text-[var(--color-stone)] opacity-70"
              >
                {name}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
