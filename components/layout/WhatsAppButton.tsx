"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905455453152"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] pl-4 pr-4 py-4 shadow-lg transition-all duration-400 hover:pr-6"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.49.06-1.03.09-1.66-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.82-4.48-4-.13-.18-1.07-1.42-1.07-2.71s.68-1.93.92-2.19c.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.6.45.24.55.8 1.9.87 2.04.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.44.2.51.31.07.11.07.63-.17 1.32Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-400 group-hover:max-w-[10rem]">
        WhatsApp&apos;tan Yazın
      </span>
    </a>
  );
}
