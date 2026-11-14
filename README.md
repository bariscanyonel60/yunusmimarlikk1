# Yunus Mimarlık — web sitesi

Premium mimarlık stüdyosu sitesi (Next.js App Router).

## Geliştirme

```bash
npm install
npm run dev
```

→ http://localhost:3000

```bash
npm run build && npm start
```

## İçerik

- Merkezi model: `content/site.ts`
- `verified: false` / `pending` alanlar yayınlanmaz
- Görseller: `public/assets/img/` (önizleme; orijinal renderlarla değiştirilecek)

## Env

- `SITE_URL` — canonical / sitemap / Open Graph kökü

Detaylar: `AGENTS.md`
