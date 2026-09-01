"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "ym_preloader_shown";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "done" | "skip">("loading");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("skip");
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setPhase("done"), 1900);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "skip") return null;

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-ink)] text-[var(--color-paper)]"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-12 w-12 md:h-14 md:w-14 mb-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <motion.rect
              x="1"
              y="1"
              width="30"
              height="30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M1 1L16 16"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M31 1L16 16"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M16 16V31"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="font-display text-sm tracking-[0.3em] mb-8"
          >
            YUNUS MİMARLIK
          </motion.p>

          <div className="h-px w-40 bg-[var(--color-paper)]/15 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="h-full w-full bg-[var(--color-bronze)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
