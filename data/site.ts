import type { NavItem } from "@/lib/types";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const address = {
  building: "Cimcim İş Merkezi",
  street: "Alipaşa, Gaziosmanpaşa Blv. No:190/C Kat:3",
  postalCode: "60100",
  district: "Tokat Merkez",
  city: "Tokat",
  region: "Tokat",
  country: "TR",
  countryName: "Türkiye",
} as const;

const fullAddress = `${address.building}, ${address.street}, ${address.postalCode} ${address.district}/${address.city}`;

const mapsQuery = `Yunus Mimarlık, ${fullAddress}`;

export const site = {
  name: "Yunus Mimarlık",
  wordmark: ["YUNUS", "MİMARLIK"] as const,
  tagline: "Mimarlık & İç Mimarlık",
  taglineEn: "Architecture & Interior Design",
  url: siteUrl,
  locale: "tr_TR",
  description:
    "Yunus Mimarlık; Tokat'ta mimari tasarım, iç mimarlık, konut ve ticari mekân projeleri için özgün, işlevsel ve çağdaş tasarım çözümleri sunar.",
  address,
  fullAddress,
  phone: {
    display: "0545 545 31 52",
    href: "tel:+905455453152",
    e164: "+905455453152",
  },
  // Fill in when the studio shares a public e-mail address.
  email: null as string | null,
  maps: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  },
  // Add real profiles here; empty entries are not rendered.
  social: [] as { label: string; href: string }[],
  credits: {
    label: "Web Tasarım",
    name: null as string | null,
    href: null as string | null,
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Süreç", href: "/#surec" },
  { label: "İletişim", href: "/iletisim" },
];

export const mobileNav: NavItem[] = [
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Süreç", href: "/#surec" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalNav: NavItem[] = [{ label: "Gizlilik ve Çerezler", href: "/gizlilik" }];

export const heroContent = {
  lines: ["MEKÂNI", "YENİDEN", "DÜŞÜNÜYORUZ."],
  description:
    "Mimari ve iç mimariyi; işlev, estetik ve kullanıcı deneyimini aynı çizgide buluşturan bütüncül bir tasarım anlayışıyla ele alıyoruz.",
  cta: { label: "Projeleri keşfet", href: "#projeler" },
  image: {
    src: "/images/hero.jpg",
    alt: "Alacakaranlıkta içi aydınlatılmış, geniş camlı tek katlı modern bir konut",
    width: 2560,
    height: 1440,
    placeholder: true,
  },
  meta: ["Yunus Mimarlık", "Tokat / TR", "Architecture", "Interior Design"],
  caption: "Görsel 01 — Temsili",
};

export const beforeAfter = {
  label: "Dönüşüm",
  title: ["BİR MEKÂNIN", "DÖNÜŞÜMÜ"],
  description:
    "İç mimari projelerde değişimi en iyi anlatan şey, aynı bakış açısından görülen iki an. Çizgiyi sürükleyerek mekânın önceki ve sonraki hâlini karşılaştırın.",
  projectSlug: "tas-ev-donusumu",
  before: {
    src: "/images/before-after/before.jpg",
    alt: "Dönüşüm öncesini temsil eden soluk, renksiz oturma odası görünümü",
    width: 2400,
    height: 1600,
    placeholder: true,
  },
  after: {
    src: "/images/before-after/after.jpg",
    alt: "Dönüşüm sonrası: gün ışığı alan, açık tonlu ve sade mobilyalı oturma odası",
    width: 2400,
    height: 1600,
    placeholder: true,
  },
};

export const manifesto = {
  label: "Felsefe",
  labelEn: "Philosophy",
  /* Words wrapped in *asterisks* are set in the editorial serif. */
  statement: ["İyi mimari yalnızca", "görüneni değil,", "*yaşananı* tasarlar."],
  body: "Yaşam, çalışma ve ticari alanları yalnızca fiziksel mekânlar olarak değil; kullanıcısıyla ilişki kuran, gün içinde değişen yaşayan yapılar olarak ele alıyoruz. Her proje arsanın, ışığın ve gündelik ritmin dikkatli bir okumasıyla başlar.",
  disciplines: [
    { title: "Mimari", text: "Kütle, cephe ve yapının bulunduğu yerle kurduğu ilişki." },
    { title: "İç Mimari", text: "Kullanım senaryosu, malzeme, ışık ve özel mobilya." },
    { title: "Uygulama", text: "Detay projeleri ve şantiyede tasarımın takibi." },
  ],
  image: {
    src: "/images/manifesto.jpg",
    alt: "Zemine düşen geometrik gölgeler arasında yürüyen bir kişi",
    width: 1600,
    height: 2000,
    placeholder: true,
  },
};

export const statement = {
  words: ["İŞLEV.", "ESTETİK.", "KİMLİK."],
  notes: ["Plan / Kullanım", "Malzeme / Işık", "Bağlam / Karakter"],
  caption: "Üç kelime, tek bir tasarım disiplini.",
};

export const photoBreak = {
  image: {
    src: "/images/break.jpg",
    alt: "Havuz kenarında beyaz, düz çatılı modern bir villa",
    width: 2560,
    height: 1440,
    placeholder: true,
  },
  label: "Konut",
  caption: "Temsili görsel",
};

export const about = {
  title: "YUNUS MİMARLIK",
  lead: "Tokat merkezli mimarlık ve iç mimarlık stüdyosu.",
  quote: "Her proje bulunduğu yer, kullanıcısı ve ihtiyaçlarıyla birlikte şekillenir.",
  expertise: ["Mimari", "İç Mimari", "Uygulama", "Danışmanlık"],
  detailImage: {
    src: "/images/about-detail.jpg",
    alt: "Ahşap lamellerle kaplı cephe detayı",
    width: 1800,
    height: 1800,
    placeholder: true,
  },
  paragraphs: [
    "Yunus Mimarlık, Tokat'ta konut, ticari ve ofis yapıları için mimari proje ve iç mekân tasarımı üreten bir tasarım stüdyosudur. Bir yapıyı kabuğundan iç mekânındaki son detaya kadar tek bir bütün olarak ele alıyoruz.",
    "Ölçek ne olursa olsun yaklaşımımız aynıdır: önce yeri ve kullanıcıyı dinlemek, ardından işlevi sadeleştirip estetiği bu sadelik üzerine kurmak. Tokat'ın iklimini, malzeme kültürünü ve yapım alışkanlıklarını bilen bir ekip olarak; tasarımın uygulamada da aynı netlikle karşılık bulmasını önemsiyoruz.",
  ],
  values: [
    { title: "İşlev", text: "Her metrekarenin bir gerekçesi olmalı." },
    { title: "Estetik", text: "Sadelik, kararların toplamıdır." },
    { title: "Detay", text: "Mekânın kalitesi birleşim noktalarında okunur." },
    { title: "Süreklilik", text: "Zamanla eskimeyen, iyi yaşlanan yapılar." },
  ],
  image: {
    src: "/images/studio.jpg",
    alt: "Masadaki plan çizimi üzerine kalemle not alan bir el",
    width: 1600,
    height: 2000,
    placeholder: true,
  },
};

export const ctaContent = {
  lines: ["BİR MEKÂNI", "BİRLİKTE", "DÖNÜŞTÜRELİM."],
  description:
    "Yeni projeniz, yaşam alanınız veya ticari mekânınız için bizimle iletişime geçin.",
  primary: { label: "Projenizi konuşalım", href: "/iletisim" },
};

export const notFoundContent = {
  code: "404",
  lines: ["BU MEKÂN", "HENÜZ TASARLANMADI."],
  cta: { label: "Ana sayfaya dön", href: "/" },
};
