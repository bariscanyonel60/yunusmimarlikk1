import { testimonials } from "@/data/testimonials";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import StarRating from "@/components/ui/StarRating";
import VideoTestimonial from "@/components/sections/VideoTestimonial";

const sourceLabel: Record<string, string> = {
  Google: "Google Yorumu",
  Instagram: "Instagram",
  Proje: "Proje Sahibi",
};

export default function ClientVoices() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-alt)]">
      <div className="container-edge">
        <RevealOnScroll className="mb-14 max-w-2xl">
          <span className="text-eyebrow block mb-4">Müşterilerimizden Dinleyin</span>
          <h2 className="font-display font-light text-4xl md:text-6xl mb-5">
            Bizi onlardan dinleyin.
          </h2>
          <p className="text-[var(--color-stone)] leading-relaxed">
            Her proje bir güven ilişkisiyle başlar. Tokat&apos;ta birlikte
            çalıştığımız aile ve işletmelerin kendi cümleleriyle
            deneyimlerini paylaşıyoruz.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <RevealOnScroll delay={0.08} className="md:col-span-5">
            <VideoTestimonial />
          </RevealOnScroll>

          <RevealOnScroll delay={0.14} className="md:col-span-7 flex flex-col">
            <div className="bg-[var(--color-bg)] p-8 md:p-10 rounded-[6px] flex-1 flex flex-col justify-between">
              <div>
                <StarRating rating={featured.rating} />
                <p className="font-display font-light text-2xl md:text-3xl leading-snug my-6">
                  &quot;{featured.quote}&quot;
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-display text-lg">{featured.name}</p>
                  <p className="text-[var(--color-stone)] text-xs">{featured.project}</p>
                </div>
                <span className="text-eyebrow">{sourceLabel[featured.source]}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {rest.map((t) => (
                <div
                  key={t.name}
                  className="bg-[var(--color-bg)] p-6 rounded-[6px] flex flex-col justify-between"
                >
                  <div>
                    <StarRating rating={t.rating} />
                    <p className="text-sm leading-relaxed my-4 text-[var(--color-ink)]">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-display text-base">{t.name}</p>
                      <p className="text-[var(--color-stone)]">{t.project}</p>
                    </div>
                    <span className="text-[var(--color-stone)] tracking-wide">
                      {sourceLabel[t.source]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
