export type Project = {
  slug: string;
  index: string;
  title: string;
  location: string;
  category: string;
  tag: "Konut" | "Ticari" | "Otel" | "Ofis";
  style: string;
  year: string;
  area: string;
  status: string;
  size: "large" | "medium" | "full";
  cover: string;
  gallery: string[];
  concept: string;
  materials: string[];
  palette: string[];
};

export const projects: Project[] = [
  {
    slug: "bodrum-villa",
    index: "01",
    title: "Bodrum Villa",
    location: "Bodrum, Muğla",
    category: "İç Mimari · Villa",
    tag: "Konut",
    style: "Sıcak Minimalizm",
    year: "2026",
    area: "480 m²",
    status: "Tamamlandı",
    size: "large",
    cover:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    ],
    concept:
      "Eğimli arazinin doğal formunu bozmadan, zemine gömülü bir taş kütle ile başlıyoruz. İç mekânda ahşap ve travertenin dokusu, gün boyu değişen ışıkla birlikte yeniden tanımlanıyor.",
    materials: ["Traverten", "Ham beton", "Iroko ahşap", "Lamine cam"],
    palette: ["#EDE7DA", "#8D8980", "#A58A68", "#171715"],
  },
  {
    slug: "modern-residence",
    index: "02",
    title: "Modern Residence",
    location: "Tokat",
    category: "İç Mimari · Konut",
    tag: "Konut",
    style: "Kontemporer",
    year: "2025",
    area: "310 m²",
    status: "Uygulamada",
    size: "medium",
    cover:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    ],
    concept:
      "Kompakt bir plan şemasında katmanlı gölgeler ve yumuşak geçişlerle genişlik hissi yaratıyoruz. Mobilya seçimleri, ailenin gün içindeki hareketine göre kurgulandı.",
    materials: ["Prekast beton panel", "Meşe ahşap", "Doğal taş kaplama"],
    palette: ["#F4F1EB", "#292824", "#A58A68", "#8D8980"],
  },
  {
    slug: "interior-concept",
    index: "03",
    title: "Interior Concept",
    location: "Tokat",
    category: "İç Mimari",
    tag: "Konut",
    style: "Editorial Sıcaklık",
    year: "2025",
    area: "180 m²",
    status: "Tamamlandı",
    size: "full",
    cover:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1600&q=80",
    ],
    concept:
      "Sıcak nötr bir palet üzerine kurulu, dokunun ön planda olduğu bir iç mekân. Mobilyalar mekânın mimari çizgisini takip ediyor; hiçbir eleman rastgele durmuyor.",
    materials: ["Bulaka mermer", "Keten döşeme", "Pirinç detaylar"],
    palette: ["#FAF9F6", "#A58A68", "#171715", "#EDE7DA"],
  },
  {
    slug: "tas-ev",
    index: "04",
    title: "Taş Ev",
    location: "Amasya",
    category: "İç Mimari · Restorasyon",
    tag: "Konut",
    style: "Rustik Çağdaş",
    year: "2024",
    area: "220 m²",
    status: "Tamamlandı",
    size: "medium",
    cover:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752734-2a0cd53e0f36?w=1600&q=80",
    ],
    concept:
      "Yüz yıllık taş dokuyu koruyarak, içine çağdaş bir yaşam biçimi yerleştiriyoruz. Eski duvarlar taşıyıcı kalırken, yeni ahşap ve çelik eklemeler tarihin üzerine sessizce oturuyor.",
    materials: ["Yerel kesme taş", "Çelik profil", "Ham çam ahşap"],
    palette: ["#EAE5DB", "#292824", "#8D8980", "#A58A68"],
  },
  {
    slug: "atolye-cafe",
    index: "05",
    title: "Atölye Cafe",
    location: "Tokat",
    category: "İç Mimari · Ticari",
    tag: "Ticari",
    style: "Endüstriyel Sıcaklık",
    year: "2024",
    area: "140 m²",
    status: "Tamamlandı",
    size: "large",
    cover:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1600&q=80",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1600&q=80",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&q=80",
    ],
    concept:
      "Küçük bir ticari mekânda karakter yaratmak, büyük bir konuttan daha zor bir denklemdir. Burada ham malzemeyi sıcak ışıkla dengeleyerek, hem çalışılabilir hem samimi bir atmosfer kurguladık.",
    materials: ["Ham sıva", "Pirinç aksesuar", "Meşe bar tezgahı"],
    palette: ["#EDE7DA", "#171715", "#A58A68", "#8D8980"],
  },
  {
    slug: "loft-ofis",
    index: "06",
    title: "Loft Ofis",
    location: "Tokat",
    category: "İç Mimari · Ofis",
    tag: "Ofis",
    style: "Yalın Kontemporer",
    year: "2024",
    area: "260 m²",
    status: "Tamamlandı",
    size: "medium",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    ],
    concept:
      "Açık plan bir ofiste odaklanma ile etkileşimi aynı anda çözmek gerekiyordu. Akustik ahşap paneller ve yumuşak zonlama, ekibin farklı çalışma ritimlerine yer açıyor.",
    materials: ["Akustik ahşap panel", "Mat çelik", "Yün halı"],
    palette: ["#F4F1EB", "#292824", "#8D8980", "#A58A68"],
  },
  {
    slug: "butik-otel-lobisi",
    index: "07",
    title: "Butik Otel Lobisi",
    location: "Amasya",
    category: "İç Mimari · Otel",
    tag: "Otel",
    style: "Editorial Lüks",
    year: "2023",
    area: "210 m²",
    status: "Tamamlandı",
    size: "full",
    cover:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80",
    ],
    concept:
      "Bir otel lobisi, misafirin şehirle kurduğu ilk temastır. Yerel taş ve el işi dokumaları modern bir kütlenin içine yerleştirerek, hem yerel hem çağdaş bir karşılama alanı kurguladık.",
    materials: ["Yerel mermer", "El dokuma kilim", "Pirinç aydınlatma"],
    palette: ["#FAF9F6", "#171715", "#A58A68", "#EAE5DB"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const projectTags: Project["tag"][] = ["Konut", "Ticari", "Otel", "Ofis"];
