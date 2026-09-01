import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Journal() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 container-edge">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <RevealOnScroll>
          <span className="text-eyebrow block mb-4">Atölye Notları</span>
          <h2 className="font-display font-light text-4xl md:text-6xl max-w-xl">
            Tokat&apos;tan tasarım üzerine notlar.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Link href="/blog" className="link-underline text-sm">
            Tüm Yazılar →
          </Link>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {latest.map((post, i) => (
          <RevealOnScroll key={post.slug} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <p className="text-eyebrow mb-3">
                {post.category} · {post.date}
              </p>
              <h3 className="font-display text-2xl mb-2 leading-snug link-underline">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
