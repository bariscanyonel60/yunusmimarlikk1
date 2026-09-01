"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden rounded-[6px] bg-[var(--color-ink)]">
      {playing ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          autoPlay
          playsInline
          poster="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=80"
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Müşteri video yorumunu oynat"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=80"
            alt="Atölye Cafe projesi müşteri video yorumu"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-paper)] transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-[var(--color-ink)]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-6 left-6 text-left text-[var(--color-paper)]">
            <span className="text-eyebrow block mb-1 text-[var(--color-paper)]/70">
              Video Yorum
            </span>
            <span className="font-display text-xl block">Atölye Cafe Ekibi</span>
          </span>
        </button>
      )}
    </div>
  );
}
