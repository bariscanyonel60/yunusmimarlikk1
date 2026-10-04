import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/projeler", priority: 0.9 },
    { path: "/hizmetler", priority: 0.8 },
    { path: "/hakkimizda", priority: 0.7 },
    { path: "/iletisim", priority: 0.8 },
    { path: "/gizlilik", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projeler/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [absoluteUrl(project.coverImage.src)],
    })),
  ];
}
