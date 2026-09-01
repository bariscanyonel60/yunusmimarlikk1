"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Sayfa başına dön"
      className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-paper)]/25 transition-colors duration-300 hover:border-[var(--color-paper)]/60"
    >
      <span className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  );
}
