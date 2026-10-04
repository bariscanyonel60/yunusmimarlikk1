export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** True while the file is a generated stand-in rather than a real photograph. */
  placeholder?: boolean;
};

export type ProjectCategory = "konut" | "ticari" | "ofis" | "ic-mimari" | "toplu-konut";

export type ProjectStatus = "tamamlandi" | "devam-ediyor" | "konsept";

export type GalleryBlock =
  | { layout: "full"; image: ImageAsset; caption?: string }
  | { layout: "pair"; images: [ImageAsset, ImageAsset] }
  | { layout: "offset"; image: ImageAsset; text: string; align: "left" | "right" };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  discipline: string;
  location: string;
  year: number;
  /** Gross area in square meters. */
  area: number;
  status: ProjectStatus;
  client?: string;
  summary: string;
  description: string[];
  coverImage: ImageAsset;
  gallery: GalleryBlock[];
  featured: boolean;
  isPlaceholder: boolean;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  slug: string;
  summary: string;
  scope: string[];
  image: ImageAsset;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverable: string;
};

export type Stat = {
  id: string;
  label: string;
  value: number | null;
  suffix?: string;
  note?: string;
};

export type NavItem = {
  label: string;
  href: string;
};
