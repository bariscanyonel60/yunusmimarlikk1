import Image from "next/image";
import { Parallax } from "@/components/animations/Parallax";
import { photoBreak } from "@/data/site";

export function PhotoBreak() {
  const year = new Date().getFullYear();

  return (
    <section aria-label="Görsel ara" data-theme="dark" className="relative isolate h-[72svh] overflow-hidden md:h-[88svh]">
      <Parallax distance={80} className="absolute -inset-y-20 inset-x-0">
        <Image
          src={photoBreak.image.src}
          alt={photoBreak.image.alt}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(18_28_40/0.35)_0%,transparent_35%,transparent_60%,rgb(18_28_40/0.7)_100%)]"
      />
      <div className="container-arch absolute inset-x-0 top-0 flex justify-between pt-6 text-paper md:pt-10">
        <span className="t-label">Bölüm / C</span>
        <span className="t-label text-paper/70">{photoBreak.caption}</span>
      </div>
      <div className="container-arch absolute inset-x-0 bottom-0 pb-6 text-paper md:pb-10">
        <p className="font-display t-num text-[clamp(2.5rem,6vw,6rem)] font-medium uppercase leading-[0.9] tracking-[-0.04em] [font-stretch:86%]">
          {photoBreak.label} <span className="text-wood">/</span> {year}
        </p>
      </div>
    </section>
  );
}
