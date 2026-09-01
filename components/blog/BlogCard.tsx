import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
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
        {post.category} · {post.date} · {post.readTime} okuma
      </p>
      <h3 className="font-display text-2xl mb-2 leading-snug link-underline">
        {post.title}
      </h3>
      <p className="text-sm text-[var(--color-stone)] leading-relaxed">
        {post.excerpt}
      </p>
    </Link>
  );
}
