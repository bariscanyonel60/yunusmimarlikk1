"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/types";

type BeforeAfterProps = {
  before: ImageAsset;
  after: ImageAsset;
  beforeLabel?: string;
  afterLabel?: string;
  sizes?: string;
  className?: string;
  initial?: number;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Önce",
  afterLabel = "Sonra",
  sizes = "100vw",
  className,
  initial = 50,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(initial);

  function updateFromPointer(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (draggingRef.current) updateFromPointer(event.clientX);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 10 : 4;
    const keyMap: Record<string, number> = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      Home: 0,
      End: 100,
    };
    const next = keyMap[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setPosition(clamp(next));
  }

  return (
    <div
      ref={containerRef}
      className={cn("media-frame relative cursor-ew-resize touch-pan-y select-none", className)}
      style={{ aspectRatio: `${after.width} / ${after.height}` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <Image src={after.src} alt={after.alt} fill sizes={sizes} className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes={sizes} className="object-cover" draggable={false} />
      </div>

      <span className="t-label pointer-events-none absolute left-4 top-4 bg-ink/70 px-3 py-2 text-paper backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="t-label pointer-events-none absolute right-4 top-4 bg-paper/80 px-3 py-2 text-ink backdrop-blur-sm">
        {afterLabel}
      </span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${position}%` }}>
        <span aria-hidden className="absolute inset-y-0 -left-px w-0.5 bg-paper" />
        <div
          role="slider"
          tabIndex={0}
          aria-label={`${beforeLabel} ve ${afterLabel} karşılaştırması`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${beforeLabel} %${Math.round(position)}`}
          onKeyDown={handleKeyDown}
          className="t-label pointer-events-auto absolute top-1/2 flex h-12 -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-paper px-4 text-ink shadow-[0_8px_30px_rgb(18_28_40/0.25)] focus-visible:outline-paper"
        >
          <ArrowLeft aria-hidden className="size-4" strokeWidth={1.5} />
          Sürükle
          <ArrowRight aria-hidden className="size-4" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
