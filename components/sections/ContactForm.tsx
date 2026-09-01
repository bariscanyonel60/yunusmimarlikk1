"use client";

import { useState } from "react";

const projectTypes = ["Villa", "Konut", "İç Mimari", "Cephe", "Diğer"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[var(--color-ink)]/15 p-10 md:p-14">
        <p className="font-display text-3xl mb-3">Teşekkürler.</p>
        <p className="text-[var(--color-stone)]">
          Mesajınız ulaştı. En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <label className="flex flex-col gap-2">
          <span className="text-eyebrow">Ad Soyad</span>
          <input
            required
            type="text"
            name="name"
            className="border-b border-[var(--color-ink)]/25 bg-transparent py-3 focus:border-[var(--color-ink)] outline-none transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-eyebrow">Telefon</span>
          <input
            required
            type="tel"
            name="phone"
            className="border-b border-[var(--color-ink)]/25 bg-transparent py-3 focus:border-[var(--color-ink)] outline-none transition-colors"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">E-posta</span>
        <input
          required
          type="email"
          name="email"
          className="border-b border-[var(--color-ink)]/25 bg-transparent py-3 focus:border-[var(--color-ink)] outline-none transition-colors"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">Proje Türü</span>
        <select
          name="projectType"
          className="border-b border-[var(--color-ink)]/25 bg-transparent py-3 focus:border-[var(--color-ink)] outline-none transition-colors"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">Proje Detayı</span>
        <textarea
          name="details"
          rows={4}
          className="border-b border-[var(--color-ink)]/25 bg-transparent py-3 focus:border-[var(--color-ink)] outline-none transition-colors resize-none"
        />
      </label>

      <button
        type="submit"
        className="group mt-4 inline-flex w-fit items-center gap-3 border border-[var(--color-ink)] px-8 py-4 text-sm tracking-wide"
      >
        Projeyi Başlat
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
