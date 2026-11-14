# Yunus Mimarlık — agent notes

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Stack

- Next.js App Router + TypeScript + Tailwind CSS v4
- GSAP + ScrollTrigger + Lenis (no Three.js / WebGL)
- Content: `content/site.ts` (typed; `verified` flags gate unpublished facts)

## Env

- `SITE_URL` — canonical origin (default `https://yunusmimarlik.example`)
- Contact form posts to `/api/contact` (honeypot + zod); no mail provider wired yet — logs success in preview

## Do not

- Invent phone / email / address / awards / years
- Add WebGL / Spline / R3F
- Commit secrets
- Edit plan files

## Assets

- Images: `public/assets/img/` (demo Instagram crops until originals arrive)
- Brand: `public/assets/brand/`
