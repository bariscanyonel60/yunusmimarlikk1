"use client";

import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string, serverValue = false): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

export const FINE_POINTER = "(hover: hover) and (pointer: fine)";
export const DESKTOP = "(min-width: 64rem)";
