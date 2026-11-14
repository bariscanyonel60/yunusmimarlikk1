import type { MetadataRoute } from 'next';
import { projects, site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    '',
    '/projeler',
    '/hizmetler',
    '/hakkimizda',
    '/iletisim',
    '/sss',
    '/gizlilik-politikasi',
  ].map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path === '/projeler' ? 0.9 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projeler/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
