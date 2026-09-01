import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const posts = [
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80",
];

export default function InstagramSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-edge flex items-end justify-between mb-10">
        <RevealOnScroll>
          <span className="text-eyebrow block mb-4">@yunusmimarlik</span>
          <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
            Süreci Instagram&apos;dan takip edin.
          </h2>
        </RevealOnScroll>
        <a
          href="https://instagram.com/yunusmimarlik"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block link-underline text-sm shrink-0"
        >
          Instagram&apos;da daha fazlasını keşfet →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {posts.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/yunusmimarlik"
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={src}
              alt="Yunus Mimarlık Instagram paylaşımı"
              fill
              sizes="20vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </a>
        ))}
      </div>

      <a
        href="https://instagram.com/yunusmimarlik"
        target="_blank"
        rel="noreferrer"
        className="md:hidden container-edge inline-block link-underline text-sm mt-6"
      >
        Instagram&apos;da daha fazlasını keşfet →
      </a>
    </section>
  );
}
