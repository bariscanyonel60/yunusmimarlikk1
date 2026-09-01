# Yunus Mimarlık — Premium Digital Architecture Experience

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + GSAP + React Three Fiber ile geliştirilmiş, editorial/mimari kimlikli kurumsal site.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Production build

```bash
npm run build
npm run start
```

## Proje Yapısı

```
app/
  page.tsx                → Ana sayfa (15 bölüm)
  projeler/page.tsx       → Filtrelenebilir tüm projeler
  projeler/[slug]/page.tsx→ Proje detay (palet + malzeme dahil)
  hizmetler/page.tsx      → Hizmetler + Malzeme Paleti + SSS
  hakkimizda/page.tsx     → Hakkımızda + Tasarımcı + Süreç + Referanslar + SSS
  iletisim/page.tsx
  template.tsx            → Sayfa geçiş animasyonu
  sitemap.ts / robots.ts
components/
  layout/    → Navbar, Footer, CustomCursor, WhatsAppButton
  sections/  → Hero, Intro, Press, ProjectsSection, MaterialsPalette,
               BeforeAfter, Experience3D, Services, Designer, Testimonials,
               Process, Journal, InstagramSection, Faq, ContactCTA
  projects/  → ProjectCard, ProjectsFilter
  3d/        → Scene (R3F canvas), Room (3D geometry)
  ui/        → RevealOnScroll
data/
  projects.ts, services.ts, materials.ts, testimonials.ts, journal.ts, faq.ts
  → Tüm içerik buradan yönetilir; yeni proje/hizmet/malzeme eklemek için
    ilgili dosyaya bir obje eklemeniz yeterli.
```

## Öne Çıkan Yeni Bölümler (v2)

- **Malzeme & Doku Paleti** (`MaterialsPalette`) — imza etkileşim: swatch'lara hover/tap ile büyük görsel ve not değişiyor.
- **Önce / Sonra** (`BeforeAfter`) — sürüklenebilir karşılaştırma slider'ı.
- **Tasarımcı** (`Designer`) — kurucu iç mimar profili, felsefe ve rakamlar.
- **Referanslar** (`Testimonials`) — koyu zeminde büyük editoryal alıntılar, otomatik geçişli.
- **Atölye Notları** (`Journal`) — gerçek blog yazılarından 3 önizleme kartı.
- **Yayınlarda** (`Press`) — dergi/platform bahis şeridi.
- **SSS** (`Faq`) — accordion + FAQPage JSON-LD şeması, `/hakkimizda` ve `/hizmetler` sayfalarında.
- **Filtrelenebilir Portföy** (`ProjectsFilter`) — Konut / Ticari / Otel / Ofis etiketine göre.

## Animasyon Sistemi (v5) — Açılış & Modern Scroll Efektleri

- **Preloader** (`components/layout/Preloader.tsx`) — ilk ziyarette (oturum
  başına bir kez, `sessionStorage` ile) monogramın çizgi çizgi çizildiği,
  ardından clip-path ile açılan bir açılış ekranı. İç sayfa geçişlerinde
  tekrar gösterilmez.
- **Lenis akıcı kaydırma** (`components/layout/SmoothScroll.tsx`) — tüm
  siteye yumuşak, ataletli scroll hissi kazandırır; GSAP ticker'ı ile
  senkronize çalışır, `prefers-reduced-motion` durumunda devre dışı kalır.
- **Hero kelime-kelime reveal** — başlık, preloader kapanışıyla senkronize
  şekilde kelime kelime yukarı kayarak beliriyor (Framer Motion `variants`
  + stagger).
- **GSAP ScrollTrigger scrub animasyonu** (`Process.tsx`) — "Süreç"
  bölümündeki 6 adımın üst çizgileri, kullanıcı scroll ettikçe sırayla
  dolan bir ilerleme çizgisine dönüşüyor (scrub: scroll pozisyonuna
  birebir bağlı, otomatik oynamıyor).
- **GSAP sayaç animasyonu** (`components/layout/AnimatedStat.tsx`) —
  footer'daki "10+ Yıl / 60+ Proje / 4 Şehir" rakamları, görünüme
  girdiğinde 0'dan hedef değere sayarak beliriyor.
- **Manyetik butonlar** (`components/ui/MagneticButton.tsx`) — ana CTA
  butonları (footer ve iletişim çağrıları) imleci hafifçe takip ediyor;
  spring fizikli, `prefers-reduced-motion`'a duyarlı değil ama etkisi
  çok hafif (isteğe bağlı kaldırılabilir).

Tüm yeni animasyonlar `prefers-reduced-motion: reduce` tercihine saygı
gösterecek şekilde yazıldı (Preloader hariç — açılış ekranı kısa ve
tek seferlik olduğu için korunmuştur).

- **Navbar**: Özel çizgisel monogram (kare + köşegen + nokta), aktif sayfayı
  numarayla vurgulayan link stili (`01 Projeler`, `02 Hizmetler`...),
  masaüstünde Instagram ikonu, mobilde numaralandırılmış tam ekran menü +
  alt bilgi şeridi (telefon/Instagram).
- **Footer**: Üstte büyük CTA satırı, altında istatistik şeridi
  (10+ yıl · 60+ proje · 4 şehir), 4 sütunlu link yapısı (Stüdyo/Hizmetler/
  Kurumsal/Atölye), sosyal ikon rozetleri (Instagram, WhatsApp),
  "Hizmet Bölgesi" bilgisi ve sayfa başına dön butonu.

## Müşterilerimizden Dinleyin (v4)

`components/sections/ClientVoices.tsx` — ana sayfada ve `/hakkimizda`'da:
- Solda **fonksiyonel video oynatıcı** (`VideoTestimonial.tsx`): poster
  görsel + oynat butonu, tıklanınca gerçek bir `<video>` etiketiyle
  oynatılıyor. **Not**: şu an CC0 bir örnek video (`interactive-examples.
  mdn.mozilla.net`) kullanılıyor — gerçek müşteri video yorumunuzla
  değiştirmeniz gerekir (`components/sections/VideoTestimonial.tsx`
  içindeki `poster` ve `<source src>` değerlerini güncelleyin).
- Sağda öne çıkan büyük bir yazılı yorum + yıldız derecelendirmeli küçük
  yorum kartları (`data/testimonials.ts` — `rating` ve `source` alanlarını
  içerir: Google / Instagram / Proje Sahibi).

- **`/blog`** — Tokat mimarlık, salon tasarımı, mutfak tasarımı, iş yeri/ofis
  tasarımı, villa/konut ve cafe-restoran iç mekan tasarımı konularında 6
  yazı. Her yazı kategoriye göre filtrelenebilir.
- **`/blog/[slug]`** — Her yazıda `BlogPosting` JSON-LD, `alternates.canonical`,
  hedef anahtar kelimeler (`keywords`) ve breadcrumb bulunur. İçerik
  `data/blog.ts` üzerinden yönetilir; yeni bir yazı eklemek için o dosyaya
  bir obje eklemeniz yeterli.
- **`/gizlilik-politikasi`** — İletişim formu kişisel veri topladığı için
  eklenen KVKK aydınlatma metni / gizlilik politikası sayfası.
- **Yerel SEO & GEO**:
  - `app/layout.tsx` içinde `geo.region`, `geo.placename`, `geo.position`
    meta etiketleri ve `InteriorDesigner` + `LocalBusiness` JSON-LD
    şemalarında `GeoCoordinates`, `areaServed` (Tokat, Amasya, Sivas,
    Samsun) ve açılış saatleri tanımlı.
  - Her sayfada `alternates.canonical` ve sayfaya özel, yerel anahtar
    kelime içeren `title`/`description`.
  - `components/seo/Breadcrumbs.tsx` her alt sayfada görünür breadcrumb +
    `BreadcrumbList` JSON-LD üretir.
  - `/iletisim` sayfasında adres bazlı Google Haritalar embed'i.
  - `app/sitemap.ts` blog yazılarını da otomatik olarak sitemap'e dahil eder.

## İçerik Güncelleme

- **Projeler**: `data/projects.ts` içine yeni bir obje ekleyin. `size` alanı grid'deki genişliği belirler (`large` / `medium` / `full`).
- **Görseller**: Şu an Unsplash üzerinden örnek mimari fotoğraflar kullanılıyor. Gerçek proje fotoğraflarınızla değiştirmek için `next.config.ts` içindeki `remotePatterns`'a kendi görsel kaynağınızı (ör. bir CDN veya `/public` klasörü) ekleyin.
- **İletişim bilgileri**: Telefon/adres `app/layout.tsx` (JSON-LD), `components/sections/ContactCTA`, `app/iletisim/page.tsx` ve `components/layout/WhatsAppButton.tsx` içinde geçiyor.
- **Form**: `components/sections/ContactForm.tsx` şu an yalnızca arayüzü gösteriyor; gönderim işlemini bir API route veya form servisi (Formspree, Resend vb.) ile bağlamanız gerekir.

## Notlar

- 3D deneyim (`components/sections/Experience3D.tsx`) yalnızca masaüstü + hassas işaretçi (mouse) olan cihazlarda etkin; mobilde statik görsel fallback kullanılır ve performans için `dynamic import` ile lazy-load edilir.
- Custom cursor yalnızca `pointer: fine` cihazlarda görünür.
- Google Fonts (Cormorant Garamond, Manrope) `app/layout.tsx` içinde `<link>` etiketiyle yükleniyor; internet erişimi olmayan ortamlarda sistem fontlarına düşer (`app/globals.css` içindeki fallback zinciri).
