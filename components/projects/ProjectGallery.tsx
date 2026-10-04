import { ImageReveal } from "@/components/animations/ImageReveal";
import { Reveal } from "@/components/animations/Reveal";
import { ArchImage } from "@/components/ui/ArchImage";
import { cn } from "@/lib/cn";
import type { GalleryBlock } from "@/lib/types";

export function ProjectGallery({ blocks }: { blocks: GalleryBlock[] }) {
  return (
    <div className="space-y-[clamp(4rem,9vw,9rem)]">
      {blocks.map((block, index) => (
        <GalleryItem key={`${block.layout}-${index}`} block={block} index={index} total={blocks.length} />
      ))}
    </div>
  );
}

function GalleryItem({ block, index, total }: { block: GalleryBlock; index: number; total: number }) {
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  switch (block.layout) {
    case "full":
      return (
        <figure>
          <ImageReveal>
            <ArchImage image={block.image} ratio="var(--r)" sizes="100vw" className="[--r:4/5] sm:[--r:16/9]" />
          </ImageReveal>
          <figcaption className="container-arch mt-4 flex justify-between text-muted">
            <span className="t-label">{block.caption ?? block.image.alt}</span>
            <span className="t-label t-num">{counter}</span>
          </figcaption>
        </figure>
      );
    case "pair":
      return (
        <div className="container-arch">
          <div className="grid-arch gap-y-10">
            <figure className="col-span-4 md:col-span-7">
              <ImageReveal from="left">
                <ArchImage image={block.images[0]} ratio="4 / 5" sizes="(min-width: 768px) 58vw, 100vw" />
              </ImageReveal>
              <figcaption className="t-label mt-3 text-muted">{block.images[0].alt}</figcaption>
            </figure>
            <figure className="col-span-3 col-start-2 md:col-span-4 md:col-start-9 md:mt-[30%]">
              <ImageReveal from="right" delay={0.1}>
                <ArchImage image={block.images[1]} ratio="1 / 1" sizes="(min-width: 768px) 33vw, 75vw" />
              </ImageReveal>
              <figcaption className="mt-3 flex justify-between gap-4 text-muted">
                <span className="t-label">{block.images[1].alt}</span>
                <span className="t-label t-num shrink-0">{counter}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      );
    case "offset": {
      const imageRight = block.align === "right";
      return (
        <div className="container-arch">
          <div className="grid-arch items-end gap-y-8">
            <figure
              className={cn(
                "col-span-4 md:col-span-8",
                imageRight ? "md:col-start-5 md:row-start-1" : "md:col-start-1",
              )}
            >
              <ImageReveal from={imageRight ? "right" : "left"}>
                <ArchImage image={block.image} ratio="3 / 2" sizes="(min-width: 768px) 66vw, 100vw" />
              </ImageReveal>
            </figure>
            <Reveal
              className={cn(
                "col-span-4 md:col-span-3",
                imageRight ? "md:col-start-1 md:row-start-1" : "md:col-start-10",
              )}
            >
              <p className="t-label t-num text-accent">{counter}</p>
              <p className="t-lead mt-4">{block.text}</p>
            </Reveal>
          </div>
        </div>
      );
    }
    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
}
