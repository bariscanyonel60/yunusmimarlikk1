'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { categories } from '@/content/site';

type Status = 'idle' | 'loading' | 'ok' | 'error';

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus('error');
        setMessage(json.error || 'Gönderim başarısız. Lütfen tekrar deneyin.');
        return;
      }
      setStatus('ok');
      router.push('/tesekkurler');
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası. Lütfen tekrar deneyin.');
    }
  }

  return (
    <form className="relative space-y-6" onSubmit={onSubmit} noValidate>
      {/* honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Ad Soyad" name="name" required autoComplete="name" />
        <Field label="E-posta" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
        <div>
          <label className="cat mb-3 block" htmlFor="projectType">
            Proje türü
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full border border-[var(--stone)] bg-transparent px-4 py-3 outline-none focus:border-[var(--navy)]"
            defaultValue=""
          >
            <option value="" disabled>
              Seçin
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>
      <div>
        <label className="cat mb-3 block" htmlFor="message">
          Proje açıklaması
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y border border-[var(--stone)] bg-transparent px-4 py-3 outline-none focus:border-[var(--navy)]"
        />
      </div>
      <div>
        <label className="cat mb-3 block" htmlFor="location">
          Konum (isteğe bağlı)
        </label>
        <input
          id="location"
          name="location"
          className="w-full border border-[var(--stone)] bg-transparent px-4 py-3 outline-none focus:border-[var(--navy)]"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-[var(--ink-2)]">
        <input type="checkbox" name="kvkk" value="1" required className="mt-1" />
        <span>
          Kişisel verilerimin proje talebi kapsamında işlenmesini kabul ediyorum.{' '}
          <a href="/gizlilik-politikasi" className="underline underline-offset-2">
            Gizlilik politikası
          </a>
        </span>
      </label>

      <button type="submit" className="btn btn--solid" disabled={status === 'loading'}>
        {status === 'loading' ? 'Gönderiliyor…' : 'Gönder'} <span aria-hidden>→</span>
      </button>

      <p
        className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-[var(--ink-2)]'}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="cat mb-3 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-[var(--stone)] bg-transparent px-4 py-3 outline-none focus:border-[var(--navy)]"
      />
    </div>
  );
}
