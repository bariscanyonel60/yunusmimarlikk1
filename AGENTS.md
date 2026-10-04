# Yunus Mimarlık — web sitesi

Tokat merkezli mimarlık / iç mimarlık stüdyosu için kurumsal site. Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS v4, Motion, Lucide.

## Komutlar

| İş | Komut |
| --- | --- |
| Geliştirme | `npm run dev` (http://localhost:3000) |
| Lint | `npm run lint` (ESLint 9 flat config) |
| Tip kontrolü | `npm run typecheck` |
| Production build | `npm run build` ve ardından `npm start` |
| Temsili fotoğrafları yeniden indir | `npm run images:fetch` (ağ erişimi gerekir; tek dosya için `npm run images:fetch -- hero.jpg`) |

Her değişiklikten sonra `npm run lint` ve `npm run build` temiz geçmeli.

## Ortam değişkenleri

- `NEXT_PUBLIC_SITE_URL`: canonical, sitemap, OG ve JSON-LD için kök URL. Tanımlı değilse `http://localhost:3000` kullanılır. Production'da mutlaka ayarlanmalı.

Başka gizli anahtar yok. Harita, API anahtarı gerektirmeyen ve tıklanınca yüklenen bir Google Maps embed'idir.

## Yapı

- `data/`: tüm içerik (site/NAP, projeler, hizmetler, süreç, istatistikler). Metin değişiklikleri burada yapılır, bileşenlerde yapılmaz.
- `components/sections/`: ana sayfa ve iç sayfa bölümleri.
- `components/layout/`: Header, MobileMenu, Footer, PageHeader.
- `app/globals.css`: renk token'ları ve bölüm temaları (`data-theme`: `light`, `dark`, `graphite`, `sage`, `mist`).
- `scripts/fetch-photos.mjs`: `public/images/` ve `public/projects/` altındaki temsili fotoğrafları Unsplash'ten (Unsplash License, ticari kullanım serbest) indirir. Seçimler `scripts/photo-picks.json` içinde sabitlenir, reddedilenler `scripts/photo-rejected.json` içindedir, fotoğrafçı bilgileri `data/photo-credits.json` dosyasına yazılır. `before-after/before.jpg` (after.jpg'nin soluk türevi) ve `og.jpg` (hero + logo yazısı) her çalıştırmada yeniden üretilir.

## Renk paleti

Lacivert (koyu bölümler), bordo (açık zeminde vurgu), ahşap (koyu zeminde vurgu), açık yeşil (stüdyo bölümü), gri ve kırık beyaz. Yeni renk eklerken `@theme` token'larını ve tema değişkenlerini kullan; bileşenlere ham hex yazma.

## İçerik kuralları (dokunma / uydurma)

- NAP her yerde aynı kalmalı: "Yunus Mimarlık", "CİMCİM İŞ MERKEZİ, Alipaşa, Gaziosmanpaşa Blv. NO:190/C KAT:3, 60100 Tokat Merkez/Tokat", "0545 545 31 52". Kaynak: `data/site.ts`.
- Sahte istatistik, ödül, müşteri, koordinat ya da proje bilgisi ekleme. `data/stats.ts` değerleri `null` kaldıkça bölüm production'da gizlidir.
- Projelerin tümü `isPlaceholder: true` ve görseller temsili stok fotoğraflardır (3D render kullanılmaz). Gerçek fotoğraflar geldiğinde `public/images/` ve `public/projects/` altındaki dosyaları aynı adla değiştir, `width` / `height` / `alt` değerlerini güncelle, `isPlaceholder` / `placeholder` bayraklarını kaldır ve dosyayı `scripts/photo-picks.json` içinden sil (yoksa `images:fetch` üzerine yazar).
- Başka firmaların (ör. referans alınan sitelerin) fotoğraflarını kullanma.

## Kod kuralları

- Union ve enum üzerindeki `switch` ifadelerinde `default` dalında `never` kontrolü kullan.
- Import'lar dosyanın başında olmalı; inline import kullanma.
- Animasyonlar `prefers-reduced-motion` ayarına uymalı (`MotionConfig reducedMotion="user"` ve CSS'teki reduced-motion bloğu).
- Kod dosyalarında emoji kullanma; oklar için Lucide ikonlarını kullan.
