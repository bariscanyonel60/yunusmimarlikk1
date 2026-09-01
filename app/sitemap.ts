import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yunusmimarlik.com";
  const staticRoutes = [
    "",
    "/projeler",
    "/hizmetler",
    "/hakkimizda",
    "/blog",
    "/iletisim",
    "/gizlilik-politikasi",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${base}/projeler/${p.slug}`,
    lastModified: new Date(),
  }));
  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.isoDate,
  }));
  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
