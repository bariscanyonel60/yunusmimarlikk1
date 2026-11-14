import { site } from './site';

/** Benzersiz sayfa meta açıklamaları — her rota ayrı */
export const pageSeo = {
  home: {
    title: `${site.name} — İç Mimarlık ve Mimari Tasarım Stüdyosu`,
    description:
      'Yunus Mimarlık ile iç mimarlık, konut, klinik ve ticari mekân tasarımı. Işık, malzeme ve renk odaklı mimari projeler.',
    path: '/',
    image: '/assets/img/hero-yunus-giris-desktop.jpg',
  },
  projeler: {
    title: `Projeler — ${site.name} İç Mimarlık Portföyü`,
    description:
      'Klinik, konut ve ticari mekân projelerinden seçilmiş Yunus Mimarlık çalışmaları. İç mimarlık ve mimari görselleştirme örnekleri.',
    path: '/projeler',
    image: '/assets/img/cover-klinik.jpg',
  },
  hizmetler: {
    title: `Hizmetler — İç Mimarlık ve Mimari Tasarım | ${site.name}`,
    description:
      'Mimari tasarım, iç mimarlık, konut ve ticari mekân projeleri ile mimari görselleştirme hizmetleri. Yunus Mimarlık stüdyosu.',
    path: '/hizmetler',
    image: '/assets/img/cover-konut.jpg',
  },
  hakkimizda: {
    title: `Stüdyo — ${site.name} Hakkında`,
    description:
      'Yunus Mimarlık stüdyo yaklaşımı: oran, ışık ve malzemeyle iç mekânlara kimlik kazandıran mimari tasarım anlayışı.',
    path: '/hakkimizda',
    image: '/assets/img/studio-calisma.jpg',
  },
  iletisim: {
    title: `İletişim — Projenizi Konuşalım | ${site.name}`,
    description:
      'Yunus Mimarlık ile projenizi konuşun. İç mimarlık ve mimari tasarım talepleriniz için iletişim formu ve Instagram.',
    path: '/iletisim',
    image: '/assets/img/hero-yunus-giris-desktop.jpg',
  },
  sss: {
    title: `Sıkça Sorulan Sorular — ${site.name}`,
    description:
      'İç mimarlık süreci, proje süreleri, görselleştirme ve Yunus Mimarlık çalışma modeli hakkında sık sorulan sorular.',
    path: '/sss',
    image: '/assets/img/atmos-malzeme.jpg',
  },
  gizlilik: {
    title: `Gizlilik Politikası — ${site.name}`,
    description:
      'Yunus Mimarlık web sitesi gizlilik politikası: kişisel verilerin işlenmesi, çerezler ve KVKK kapsamındaki bilgilendirme.',
    path: '/gizlilik-politikasi',
    image: '/assets/img/hero-yunus-giris-desktop.jpg',
  },
  tesekkurler: {
    title: `Teşekkürler — Mesajınız Alındı | ${site.name}`,
    description: 'İletişim formunuz Yunus Mimarlık’a ulaştı. En kısa sürede size dönüş yapılacaktır.',
    path: '/tesekkurler',
    image: '/assets/img/hero-yunus-giris-desktop.jpg',
  },
} as const;

export const faqs = [
  {
    q: 'Yunus Mimarlık hangi tür projelerde çalışıyor?',
    a: 'Konut, klinik ve sağlık yapıları, ticari mekânlar ile iç mimarlık ve mimari görselleştirme odaklı projelerde çalışıyoruz. Her projede ışık, malzeme ve kullanıcı ihtiyacı birlikte ele alınır.',
  },
  {
    q: 'İç mimarlık süreci nasıl ilerliyor?',
    a: 'İhtiyaç analizi ve keşif ile başlanır; kavramsal tasarım, malzeme seçimleri ve görselleştirme adımlarıyla ilerlenir. Onaylanan kararlar uygulama dokümanlarına dönüştürülür.',
  },
  {
    q: 'Proje görselleştirmesi (3B) sunuyor musunuz?',
    a: 'Evet. Uygulama öncesinde mekânı okunabilir kılmak için gerçekçi mimari görselleştirmeler hazırlanır; böylece oran, malzeme ve ışık kararları birlikte değerlendirilebilir.',
  },
  {
    q: 'Bir projeye nasıl başlayabilirim?',
    a: 'İletişim formundan veya Instagram üzerinden kısa bir proje özeti paylaşabilirsiniz. Proje türü, konum bilgisi ve beklentileriniz netleştikçe süreç planlanır.',
  },
  {
    q: 'Teklif ve süre nasıl belirleniyor?',
    a: 'Kapsam, metrekare, mevcut durum ve istenen detay seviyesine göre netleşir. İlk görüşmede ihtiyaçlar toplandıktan sonra çalışma planı ve tahmini süre paylaşılır.',
  },
] as const;

/** Yalnızca verified:true olanlar sitede yayınlanır — sahte puan/yorum yok */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  project?: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  // Onaylı müşteri yorumları buraya eklenecek (verified: true)
];

export const privacySections = [
  {
    title: '1. Veri sorumlusu',
    body: 'Bu web sitesi üzerinden iletilen talepler Yunus Mimarlık tarafından, proje görüşmesi amacıyla işlenir. Resmi iletişim ve adres bilgileri onaylandıktan sonra bu sayfada güncellenir.',
  },
  {
    title: '2. Toplanan veriler',
    body: 'İletişim formunda ad-soyad, e-posta, telefon (isteğe bağlı), proje türü, açıklama ve konum (isteğe bağlı) bilgileri alınabilir. Formda KVKK onayı zorunludur.',
  },
  {
    title: '3. İşleme amacı',
    body: 'Veriler yalnızca proje talebinizi değerlendirmek, size dönüş yapmak ve hizmet süreçlerini yürütmek için kullanılır. Pazarlama amacıyla üçüncü taraflara satılmaz.',
  },
  {
    title: '4. Saklama ve güvenlik',
    body: 'Talepler, işlemin gerektirdiği süre boyunca saklanır. Teknik altyapıda erişim sınırlandırılır; gereksiz veriler silinir veya anonimleştirilir.',
  },
  {
    title: '5. Haklarınız',
    body: 'KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlemeyi kısıtlama taleplerinizi iletişim kanallarımız üzerinden iletebilirsiniz.',
  },
  {
    title: '6. Çerezler',
    body: 'Site, temel işlevsellik ve performans için gerekli çerezleri kullanabilir. Zorunlu olmayan çerezler için ayrıca bilgilendirme yapılacaktır.',
  },
] as const;
