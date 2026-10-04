"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Click-to-load Google Maps embed: no third-party requests or cookies until
 * the visitor asks for the map.
 */
export function MapPanel({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("media-frame relative aspect-[4/3] w-full", className)}>
      {loaded ? (
        <iframe
          title={`${site.name} konumu — Google Haritalar`}
          src={site.maps.embedUrl}
          className="absolute inset-0 size-full border-0 grayscale-[0.85] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="arch-grid-lines absolute inset-0 flex flex-col justify-between p-5 md:p-6">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute left-1/2 top-0 h-full w-px bg-foreground/15" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-foreground/15" />
            <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/25" />
            <MapPin
              className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-full text-accent"
              strokeWidth={1.5}
            />
          </div>

          <div className="relative flex justify-between text-muted">
            <span className="t-label">{site.address.district}</span>
            <span className="t-label t-num">{site.address.postalCode}</span>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="t-label inline-flex min-h-11 items-center bg-foreground px-5 text-background transition-colors duration-500 hover:bg-accent hover:text-paper"
            >
              Haritayı yükle
            </button>
            <a
              href={site.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group t-label inline-flex min-h-11 items-center gap-2"
            >
              <span className="link-line">Yol tarifi al</span>
              <ArrowUpRight aria-hidden className="arrow-nudge size-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
