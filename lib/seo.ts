import type { Metadata } from "next";
import { site } from "@/data/site";
import type { ImageAsset } from "@/lib/types";

const DEFAULT_OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Yunus Mimarlık — Tokat mimarlık ve iç mimarlık stüdyosu",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
  absoluteTitle?: boolean;
};

export function absoluteUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({ title, description, path, image, absoluteTitle }: PageMetadataInput): Metadata {
  const ogImage = image
    ? { url: image.src, width: image.width, height: image.height, alt: image.alt }
    : DEFAULT_OG_IMAGE;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}
