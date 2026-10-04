"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const sync = () => {
      if (query.matches) {
        lenis?.destroy();
        lenis = null;
      } else if (!lenis) {
        lenis = new Lenis({ autoRaf: true, autoToggle: true, anchors: true, lerp: 0.11 });
      }
    };

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return null;
}
