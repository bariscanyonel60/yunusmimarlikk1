// Merkezi içerik modeli — sayfa bileşenlerine dağılmış sabit metin yok.
// `verified: false` olan alanlar işletme onayına kadar sitede gösterilmez.

export type Media = { src: string; alt: string };

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  secondaryCategory: string;
  location: string | null;
  year: number | null;
  summary: string;
  description: string;
  approach: string[];
  materials: string[];
  cover: Media;
  gallery: Media[];
  verified: { client: boolean; location: boolean; year: boolean };
};

export type Service = {
  n: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const site = {
  name: 'Yunus Mimarlık',
  url: process.env.SITE_URL || 'https://yunusmimarlik.example',
  locale: 'tr_TR',
  description:
    'Yunus Mimarlık; konut, klinik ve ticari mekânlarda iç mimarlık ve mimari tasarım projeleri geliştiren bir stüdyodur.',
  tagline: ['İç mekâna kimlik,', 'yaşama ışık.'] as const,
  intro:
    'İç mekânları yeniden düşünüyoruz: ışık, malzeme ve renk ile; orada yaşayacak insanın ritminden yola çıkarak.',
  studio: {
    eyebrow: 'Stüdyo',
    title: ['MİMARLIK,', 'BİR BAKIŞ', 'AÇISIDIR.'] as const,
    paragraphs: [
      'Yunus Mimarlık; konut, klinik ve ticari mekânlarda mimari tasarım ve iç mimarlık projeleri geliştirir. Her çalışma ölçü, ışık ve malzemeyle başlar; ardından mekâna, kullanıcısına uygun bir kimlik kazandırılır.',
      'Projeler, uygulama öncesinde gerçekçi 3B görselleştirmelerle sunulur; böylece mekân henüz kurulmadan okunabilir hâle gelir.',
    ],
  },
  cta: {
    title: ['Yeni bir projeye', 'başlayalım mı?'] as const,
    subtitle: 'Projenizi konuşalım. Mekânınızın ihtiyacını birlikte netleştirelim.',
  },
  instagram: {
    url: 'https://www.instagram.com/yunusmimarlik/',
    handle: '@yunusmimarlik',
    verified: true as const,
  },
  mediaCredit: {
    label: 'Media',
    name: 'BCY DİJİTAL',
    url: 'https://bariscanyonel.com',
  },
  founder: { name: 'Yunus Emre İçlioğlu', title: 'Mimar', verified: false as const },
  pending: {
    phone: null as string | null,
    email: null as string | null,
    address: null as string | null,
  },
  preview: true,
};

export const categories = [
  'Konut Mimarlığı',
  'İç Mimarlık',
  'Ticari Mekân',
  'Sağlık Yapıları',
  'Mimari Görselleştirme',
] as const;

export const nav = [
  { href: '/projeler', label: 'Projeler' },
  { href: '/hakkimizda', label: 'Stüdyo' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

export const projects: Project[] = [
  {
    slug: 'klinik-ic-mekan',
    number: '01',
    title: 'Klinik İç Mekân Tasarımı',
    category: 'Sağlık Yapıları',
    secondaryCategory: 'İç Mimarlık',
    location: null,
    year: null,
    summary:
      'Dalgalı bir duvar kıvrımı, sıcak ahşap çıtalar ve açık renk zeminle kurgulanan bir klinik iç mekânı.',
    description:
      'Bekleme alanından muayene birimlerine uzanan akış, tek bir kıvrımlı çizgiyle okunuyor. Duvarın dalgası hem yönlendiriyor hem de sert klinik atmosferini yumuşatıyor.',
    approach: [
      'Klinik mekânlarda soğuk ve mesafeli hissi azaltmak için sıcak ahşap tonları ve organik formlar öne çıkarıldı.',
      'Cam bölmeler ışığın derinlere ulaşmasını sağlarken birimler arasında görsel süreklilik kuruyor.',
    ],
    materials: ['Ahşap çıta panel', 'Açık renk zemin', 'Cam bölme', 'Bitkilendirilmiş iç mekân'],
    cover: {
      src: 'cover-klinik.jpg',
      alt: 'Modern klinik bekleme alanı; kıvrımlı duvar, ahşap çıta ve soft aydınlatma',
    },
    gallery: [
      { src: 'cover-klinik.jpg', alt: 'Modern klinik bekleme alanı genel görünüm' },
      { src: 'hero-ic-mekan.jpg', alt: 'Klinik resepsiyon ve kıvrımlı iç mekân' },
      { src: 'klinik-giris.jpg', alt: 'Cam bölmeli klinik muayene birimi' },
      { src: 'klinik-bekleme.jpg', alt: 'Ahşap çıtalarla ayrılmış klinik bekleme alanı' },
      { src: 'klinik-resepsiyon.jpg', alt: 'Oval hatlı klinik resepsiyon bankosu' },
      { src: 'klinik-merdiven.jpg', alt: 'Cam korkuluklu, ahşap basamaklı merdiven' },
    ],
    verified: { client: false, location: false, year: false },
  },
  {
    slug: 'aycillar-konut-projesi',
    number: '02',
    title: 'Aycılar İnşaat Konut Projesi',
    category: 'Konut Mimarlığı',
    secondaryCategory: 'Mimari Görselleştirme',
    location: null,
    year: null,
    summary: 'Beyaz ve krem cephelerde düşey çıtalar, ışık detayları ve ölçülü balkon ritmi.',
    description:
      'İki katlı konut cephesinde sade kütleler, düşey çıta ritmi ve akşam ışığını gösteren aydınlatma detaylarıyla sakin bir dış mekân dili kuruldu.',
    approach: [
      'Cephe, tekrar eden düşey çıtalar ve balkon boşluklarıyla okunabilir bir ritme oturtuldu.',
      'Peyzaj elemanları yapının sert hatlarını yumuşatacak şekilde yerleştirildi.',
    ],
    materials: ['Açık renk cephe kaplaması', 'Düşey çıta detay', 'Metal balkon korkuluğu'],
    cover: {
      src: 'cover-konut.jpg',
      alt: 'Akşam ışığında modern konut cephesi ve peyzaj',
    },
    gallery: [
      { src: 'cover-konut.jpg', alt: 'Akşam ışığında modern konut cephesi' },
      { src: 'konut-cephe-1.jpg', alt: 'Konut projesinin giriş cephesi ve peyzaj düzeni' },
      { src: 'konut-cephe-2.jpg', alt: 'Konut blokları arasından cephe görünümü' },
      { src: 'konut-cephe-3.jpg', alt: 'Aycılar İnşaat konut projesinin cephe detayı' },
    ],
    verified: { client: false, location: false, year: false },
  },
  {
    slug: 'tunc-kuyumculuk',
    number: '03',
    title: 'Tunç Kuyumculuk',
    category: 'Ticari Mekân',
    secondaryCategory: 'İç Mimarlık',
    location: null,
    year: null,
    summary: 'Mermer, koyu çıta paneller ve altın detaylarla kurgulanan bir kuyumcu mağazası.',
    description:
      'Mağaza, vitrin düzeninden iç mekâna kadar siyah, beyaz ve altın üçlüsü etrafında kurgulandı. Vitrinler ve aydınlatma, ürünü ön plana çıkaracak şekilde konumlandı.',
    approach: [
      'Koyu çıta paneller ve mermer yüzeyler arasındaki kontrast, altın detaylarla dengelendi.',
      'Giriş cephesi, içerideki zenginliği sokaktan okunur kılacak şeffaflıkta tasarlandı.',
    ],
    materials: ['Mermer yüzey', 'Koyu çıta panel', 'Altın rengi metal detay'],
    cover: {
      src: 'cover-kuyumcu.jpg',
      alt: 'Lüks kuyumcu mağazası iç mekânı; mermer, koyu çıta ve altın vitrinler',
    },
    gallery: [
      { src: 'cover-kuyumcu.jpg', alt: 'Lüks kuyumcu mağazası iç mekân genel görünüm' },
      { src: 'kuyumcu-ic-1.jpg', alt: 'Kuyumcu mağazası vitrin ve tezgâh düzeni' },
      { src: 'kuyumcu-ic-2.jpg', alt: 'Altın detaylı kuyumcu mağazası iç görünümü' },
      { src: 'kuyumcu-ic-3.jpg', alt: 'Mermer duvarlı kuyumcu mağazası iç mekânı' },
      { src: 'kuyumcu-vitrin-1.jpg', alt: 'Kuyumcu mağazası dış cephesi ve oturma alanı' },
      { src: 'kuyumcu-vitrin-3.jpg', alt: 'Kuyumcu mağazası giriş cephesi' },
    ],
    verified: { client: false, location: false, year: false },
  },
];

export const services: Service[] = [
  {
    n: '01',
    title: 'Mimari Tasarım',
    text: 'Yapının kütlesini, cephesini ve çevresiyle ilişkisini baştan kurgulayan tasarım çalışmaları.',
    image: 'konut-cephe-1.jpg',
    alt: 'Modern konut cephesi ve peyzaj',
  },
  {
    n: '02',
    title: 'İç Mimarlık',
    text: 'Mekânın akışını, malzemesini ve ışığını kullanıcıya göre düzenleyen iç mekân tasarımı.',
    image: 'cover-klinik.jpg',
    alt: 'Klinik iç mekânı',
  },
  {
    n: '03',
    title: 'Konut Projeleri',
    text: 'Konut ölçeğinde yapı ve cephe tasarımı, peyzajla bütünleşen çözümler.',
    image: 'cover-konut.jpg',
    alt: 'Konut projesi akşam cephesi',
  },
  {
    n: '04',
    title: 'Ticari Mekânlar',
    text: 'Mağaza, klinik ve ofis gibi ticari alanlarda marka kimliğini mekâna taşıyan tasarımlar.',
    image: 'cover-kuyumcu.jpg',
    alt: 'Kuyumcu mağazası iç mekânı',
  },
  {
    n: '05',
    title: 'Mimari Görselleştirme',
    text: 'Projeyi uygulama öncesinde gerçekçi 3B görsellerle anlatan sunumlar.',
    image: 'hero-ic-mekan.jpg',
    alt: 'İç mekân görselleştirmesi',
  },
];

export function imgPath(src: string) {
  return `/assets/img/${src}`;
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return null;
  return projects[(i + 1) % projects.length];
}
