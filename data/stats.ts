import type { Stat } from "@/lib/types";

/*
 * STATS CONFIG
 * Values are intentionally null until the studio confirms real figures.
 * The Stats section stays hidden while every value is null, so no invented
 * numbers can reach production. Set `value` to a number to publish a stat.
 */
export const stats: Stat[] = [
  { id: "completed", label: "Tamamlanan proje", value: null, suffix: "+" },
  { id: "area", label: "Toplam tasarım alanı", value: null, suffix: " m²" },
  { id: "experience", label: "Yıllık deneyim", value: null },
  { id: "ongoing", label: "Devam eden proje", value: null },
];

export const hasPublishedStats = stats.some((stat) => stat.value !== null);
