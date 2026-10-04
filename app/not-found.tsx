import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { DimensionLine } from "@/components/ui/DimensionLine";
import { notFoundContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section data-theme="light" className="relative flex min-h-[100svh] items-center">
      <div aria-hidden className="container-arch pointer-events-none absolute inset-0">
        <div className="arch-grid-lines h-full opacity-60" />
      </div>
      <div className="container-arch relative py-[calc(var(--header-h)+3rem)]">
        <p aria-hidden className="font-display t-num text-[clamp(6rem,24vw,20rem)] font-light leading-[0.8] tracking-[-0.06em] text-foreground/15">
          {notFoundContent.code}
        </p>
        <DimensionLine label="Ø 404" className="my-10 max-w-md" />
        <h1 className="t-h1">
          {notFoundContent.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <ArrowLink href={notFoundContent.cta.href} direction="right" variant="solid" className="mt-12">
          {notFoundContent.cta.label}
        </ArrowLink>
      </div>
    </section>
  );
}
