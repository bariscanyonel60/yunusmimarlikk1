"use client";

import { useState, useMemo } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function BlogFilter() {
  const [category, setCategory] = useState<string>("Tümü");

  const filtered = useMemo(
    () =>
      category === "Tümü"
        ? blogPosts
        : blogPosts.filter((p) => p.category === category),
    [category]
  );

  return (
    <>
      <div className="container-edge mb-10 flex flex-wrap gap-x-8 gap-y-3">
        {["Tümü", ...blogCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-sm tracking-wide pb-1 border-b transition-colors duration-300 ${
              category === cat
                ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-stone)] hover:text-[var(--color-ink)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container-edge grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {filtered.map((post, i) => (
          <RevealOnScroll key={post.slug} delay={i * 0.06}>
            <BlogCard post={post} />
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
