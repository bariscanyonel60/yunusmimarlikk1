import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import BlogCard from "@/components/blog/BlogCard";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `https://yunusmimarlik.com/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.isoDate,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: post.image,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: "Yunus Mimarlık",
    },
    publisher: {
      "@type": "Organization",
      name: "Yunus Mimarlık",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokat",
        addressCountry: "TR",
      },
    },
    mainEntityOfPage: `https://yunusmimarlik.com/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <main className="pt-36 md:pt-44 pb-24">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <div className="container-edge mb-10">
          <span className="text-eyebrow block mb-4">
            {post.category} · {post.date} · {post.readTime} okuma
          </span>
          <h1 className="font-display font-light text-4xl md:text-6xl max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="container-edge mb-14">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[6px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 md:col-start-3 flex flex-col gap-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl md:text-3xl mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-[var(--color-stone)] leading-relaxed mb-4 text-base md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-ink)]/10">
              {post.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-[4px] border border-[var(--color-ink)]/15 px-3 py-1.5 text-xs text-[var(--color-stone)]"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="container-edge pt-20 md:pt-28">
        <span className="text-eyebrow block mb-8">Diğer Yazılar</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <section className="container-edge pt-20 md:pt-28 pb-8 text-center">
        <p className="font-display font-light text-3xl md:text-5xl max-w-2xl mx-auto mb-8">
          Tokat&apos;ta bir projeniz mi var?
        </p>
        <Link
          href="/iletisim"
          className="group inline-flex items-center gap-3 border border-[var(--color-ink)] px-8 py-4 text-sm tracking-wide"
        >
          Projeyi Başlat
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
