import type { Metadata } from "next";
import BlogFilter from "@/components/blog/BlogFilter";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Tokat Mimarlık ve İç Mimarlık Rehberi — Yunus Mimarlık",
  description:
    "Tokat mimarlık ve iç mimarlık üzerine yazılar: salon tasarımı, mutfak tasarımı, iş yeri tasarımı ve villa projeleri hakkında pratik rehberler.",
  alternates: { canonical: "https://yunusmimarlik.com/blog" },
  openGraph: {
    title: "Blog | Tokat Mimarlık ve İç Mimarlık Rehberi",
    description:
      "Tokat mimarlık ve iç mimarlık üzerine yazılar: salon tasarımı, mutfak tasarımı, iş yeri tasarımı ve villa projeleri hakkında pratik rehberler.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="pt-36 md:pt-44 pb-24">
      <Breadcrumbs
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <div className="container-edge mb-10">
        <span className="text-eyebrow block mb-4">Tokat İç Mimarlık Blogu</span>
        <h1 className="font-display font-light text-5xl md:text-7xl max-w-2xl mb-6">
          Blog
        </h1>
        <p className="text-[var(--color-stone)] max-w-xl leading-relaxed">
          Tokat mimarlık ve iç mimarlık üzerine; salon tasarımı, mutfak
          tasarımı, iş yeri tasarımı ve villa projelerinden notlar,
          gözlemler ve pratik öneriler.
        </p>
      </div>

      <BlogFilter />
    </main>
  );
}
