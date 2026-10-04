import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/types";

type ArchImageProps = {
  image: ImageAsset | null | undefined;
  sizes: string;
  /** CSS aspect-ratio override, e.g. "16 / 9". Defaults to the asset's intrinsic ratio. */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
  quality?: 70 | 80;
  interactive?: boolean;
};

export function ArchImage({
  image,
  sizes,
  ratio,
  className,
  imageClassName,
  preload = false,
  quality = 80,
  interactive = false,
}: ArchImageProps) {
  const aspectRatio = ratio ?? (image ? `${image.width} / ${image.height}` : "3 / 2");

  return (
    <div
      className={cn("media-frame", interactive && "media-zoom media-shade", className)}
      style={{ aspectRatio }}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          quality={quality}
          preload={preload}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <MissingImage />
      )}
    </div>
  );
}

function MissingImage() {
  return (
    <div
      role="img"
      aria-label="Görsel hazırlanıyor"
      className="arch-grid-lines absolute inset-0 flex items-end justify-between p-4 text-muted"
    >
      <span className="t-label">Görsel hazırlanıyor</span>
      <span className="t-label t-num">00 / 00</span>
    </div>
  );
}
