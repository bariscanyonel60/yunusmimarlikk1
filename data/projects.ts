import type { ImageAsset, Project, ProjectCategory, ProjectStatus } from "@/lib/types";

/*
 * PLACEHOLDER PORTFOLIO
 * Every project below is an illustrative stand-in (isPlaceholder: true) until
 * the studio supplies its real work. Replace text, figures and images here;
 * components read exclusively from this file.
 */

const FRAME = {
  landscape: { width: 2400, height: 1600 },
  wide: { width: 2560, height: 1440 },
  portrait: { width: 1600, height: 2000 },
  square: { width: 1800, height: 1800 },
} as const;

function image(slug: string, name: string, frame: keyof typeof FRAME, alt: string): ImageAsset {
  return { src: `/projects/${slug}/${name}.jpg`, alt, ...FRAME[frame], placeholder: true };
}

export const categoryLabels: Record<ProjectCategory, string> = {
  konut: "Konut",
  ticari: "Ticari",
  ofis: "Ofis",
  "ic-mimari": "İç Mimari",
  "toplu-konut": "Toplu Konut",
};

export const statusLabels: Record<ProjectStatus, string> = {
  tamamlandi: "Tamamlandı",
  "devam-ediyor": "Devam ediyor",
  konsept: "Konsept",
};

export const projects: Project[] = [
  {
    id: "p-01",
    slug: "kazova-evi",
    title: "Kazova Evi",
    category: "konut",
    discipline: "Mimari & İç Mimari",
    location: "Tokat",
    year: 2026,
    area: 420,
    status: "devam-ediyor",
    summary:
      "Ova manzarasına doğru uzanan konsol bir kütle ile taş kaplı zemin katın buluştuğu, iki kuşağın birlikte yaşayacağı müstakil konut.",
    description: [
      "Kazova Evi, geniş bir ailenin ortak yaşamını ve mahremiyet ihtiyacını aynı çatı altında dengelemek üzere kurgulandı. Zemin kat; mutfak, yemek ve oturma alanlarını tek bir akış içinde toplayarak bahçeye açılırken, üst kat yatak odalarını ovaya bakan konsol bir kütlede bir araya getiriyor.",
      "Güney cephedeki dikey lameller yaz güneşini kesip kış güneşini içeri alacak aralıklarla yerleştirildi. Zemin katta yerel taş, üst katta ise sade sıva ve ahşap kullanılarak yapının toprağa oturan ve havada duran iki karakteri birbirinden ayrıldı.",
      "İç mekânda malzeme paleti dışarının devamı olarak düşünüldü: taş zemin oturma alanına kadar uzanıyor, ahşap yüzeyler ise yalnızca dokunulan yerlerde, merdiven ve dolap cephelerinde karşımıza çıkıyor.",
    ],
    coverImage: image("kazova-evi", "cover", "landscape", "Kazova Evi: geniş saçaklı, ahşap ve taş dokulu modern konut"),
    gallery: [
      { layout: "full", image: image("kazova-evi", "01", "wide", "Kazova Evi: büyük pencerelerden gün ışığı alan oturma alanı"), caption: "Zemin kat oturma alanı" },
      {
        layout: "pair",
        images: [
          image("kazova-evi", "02", "portrait", "Beyaz, minimal merdiven"),
          image("kazova-evi", "03", "square", "Beton duvar önünde sıcak tonlu ahşap yüzey"),
        ],
      },
      {
        layout: "offset",
        image: image("kazova-evi", "04", "landscape", "Beton cephede açılır pencere detayı"),
        text: "Avluya bakan cephede pencereler iç mekândaki kullanım yoğunluğuna göre sıklaşıp seyreliyor.",
        align: "right",
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "p-02",
    slug: "yesilirmak-ofis",
    title: "Yeşilırmak Ofis",
    category: "ofis",
    discipline: "İç Mimari",
    location: "Tokat Merkez",
    year: 2025,
    area: 280,
    status: "tamamlandi",
    summary:
      "Eski bir iş hanının üst katında, açık çalışma alanı ile odaklanma odalarını ahşap bir çekirdek etrafında toplayan ofis dönüşümü.",
    description: [
      "Proje, bölünmüş küçük odalardan oluşan bir katı tek bir çalışma ortamına dönüştürme fikriyle başladı. Taşıyıcı olmayan bütün duvarlar kaldırılarak cephe boyunca kesintisiz bir gün ışığı bandı elde edildi.",
      "Islak hacimler, arşiv ve toplantı odası planın ortasına yerleştirilen ahşap kaplı bir çekirdekte toplandı. Bu çekirdek hem akustik bir tampon görevi görüyor hem de açık ofisi doğal olarak farklı yoğunluktaki bölgelere ayırıyor.",
      "Aydınlatma, çalışma masalarında görev aydınlatması ve dolaşım alanlarında dolaylı ışık olmak üzere iki katmanda kurgulandı; tavan mümkün olduğunca sade bırakıldı.",
    ],
    coverImage: image("yesilirmak-ofis", "cover", "landscape", "Yeşilırmak Ofis: ahşap kirişli, açık planlı çalışma alanı"),
    gallery: [
      { layout: "full", image: image("yesilirmak-ofis", "01", "wide", "Ahşap tavan kaplamalı ortak çalışma koridoru"), caption: "Ortak çalışma alanı" },
      {
        layout: "pair",
        images: [
          image("yesilirmak-ofis", "02", "portrait", "Pencere önünde beyaz masa ve renkli sandalyeler"),
          image("yesilirmak-ofis", "03", "square", "Beyaz duvarda ahşap panel ve oturma bankı"),
        ],
      },
      {
        layout: "offset",
        image: image("yesilirmak-ofis", "04", "landscape", "Ahşap tavanlı bekleme ve toplantı alanı"),
        text: "Odaklanma odaları açık ofisle görsel bağını koparmadan akustik olarak ayrışıyor.",
        align: "left",
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "p-03",
    slug: "avlu-kahve",
    title: "Avlu Kahve",
    category: "ticari",
    discipline: "İç Mimari",
    location: "Tokat",
    year: 2025,
    area: 160,
    status: "tamamlandi",
    summary:
      "Sokağa açılan bir avlunun etrafında kurgulanan, gün boyunca farklı kullanım senaryolarına uyum sağlayan küçük ölçekli kahve dükkânı.",
    description: [
      "Avlu Kahve'de amaç, sınırlı bir alanda hem hızlı servis yapılabilen hem de uzun süre oturulabilen bir mekân yaratmaktı. Bar, sokaktan girişte ilk karşılaşılan eleman olarak konumlandırıldı; oturma alanları ise avluya doğru sakinleşen bir sıralamayla yerleştirildi.",
      "Ahşap lamel duvar, mekânın sıcak karakterini taşırken arkasında depolama ve servis alanlarını gizliyor. Zeminde kullanılan mikro beton, avludaki taş döşemeyle aynı tonda seçilerek iç ve dış arasındaki eşik görsel olarak yumuşatıldı.",
    ],
    coverImage: image("avlu-kahve", "cover", "landscape", "Avlu Kahve: ahşap lamel duvar önünde oturma bandı"),
    gallery: [
      { layout: "full", image: image("avlu-kahve", "01", "wide", "Ahşap kirişli, aydınlık kafe salonu"), caption: "Lamel duvar ve oturma bandı" },
      {
        layout: "pair",
        images: [
          image("avlu-kahve", "02", "portrait", "Sokağa açılan kafe cephesi"),
          image("avlu-kahve", "03", "square", "Ahşap tezgâh ve tabureli kafe barı"),
        ],
      },
      {
        layout: "offset",
        image: image("avlu-kahve", "04", "landscape", "Bitkilerle çevrili, sıcak aydınlatmalı oturma alanı"),
        text: "Malzeme paleti üç kalemle sınırlandırıldı: ahşap, mikro beton ve kireç sıva.",
        align: "right",
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "p-04",
    slug: "camlibel-konutlari",
    title: "Çamlıbel Konutları",
    category: "toplu-konut",
    discipline: "Mimari",
    location: "Tokat",
    year: 2026,
    area: 3200,
    status: "konsept",
    summary:
      "Ortak bir iç avlu etrafında kademelenen, her dairenin çift yönlü havalandığı orta ölçekli konut projesi için konsept çalışma.",
    description: [
      "Çamlıbel Konutları, yoğunluğu yükseltmek yerine yaşam kalitesini merkeze alan bir yerleşim önerisi olarak geliştirildi. Bloklar arazinin eğimini takip ederek kademeleniyor ve aralarında rüzgârdan korunan ortak bir avlu oluşturuyor.",
      "Her daire en az iki yöne açılacak şekilde planlandı; böylece doğal havalandırma ve gün ışığı bütün konutlar için eşit biçimde sağlanıyor. Cephedeki derin pencere boşlukları hem güneş kontrolü sağlıyor hem de yapıya ağırlıklı, kalıcı bir karakter kazandırıyor.",
    ],
    coverImage: image("camlibel-konutlari", "cover", "landscape", "Çamlıbel Konutları: koyu çerçeveli pencerelere sahip konut bloğu"),
    gallery: [
      { layout: "full", image: image("camlibel-konutlari", "01", "wide", "Tuğla tonlu balkon ritmiyle konut cephesi"), caption: "Ana cephe" },
      {
        layout: "pair",
        images: [
          image("camlibel-konutlari", "02", "portrait", "Konut bloğunda kademeli balkonlar"),
          image("camlibel-konutlari", "03", "square", "Beton iç mekânda helezon merdiven"),
        ],
      },
      {
        layout: "offset",
        image: image("camlibel-konutlari", "04", "landscape", "Ahşap ızgara bölmeli aydınlık ortak alan"),
        text: "Ortak avlu, otopark ve servis yollarından tamamen arındırılmış bir yaya alanı olarak tasarlandı.",
        align: "left",
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "p-05",
    slug: "tas-ev-donusumu",
    title: "Taş Ev Dönüşümü",
    category: "ic-mimari",
    discipline: "İç Mimari & Restorasyon Danışmanlığı",
    location: "Tokat",
    year: 2024,
    area: 190,
    status: "tamamlandi",
    summary:
      "Kalın taş duvarlı eski bir evin özgün dokusunu koruyarak bugünün konfor beklentilerine göre yeniden düzenlenmesi.",
    description: [
      "Yapının en değerli yanı, yüzyılı aşkın kalın taş duvarları ve ahşap tavanlarıydı. Müdahaleler bu dokuyu öne çıkaracak şekilde sınırlı tutuldu; yeni eklenen her eleman, eskisinden açıkça ayırt edilebilir sade bir dille tasarlandı.",
      "Islak hacimler ve mutfak, özgün duvarlara dokunmadan bağımsız ahşap kutular içinde çözüldü. Böylece tesisat taş duvarlara gömülmeden ilerliyor ve gelecekte yapılacak her değişiklik geri alınabilir kalıyor.",
    ],
    coverImage: image("tas-ev-donusumu", "cover", "landscape", "Taş Ev Dönüşümü: taş duvar ve geniş cam yüzeyli yaşam alanı"),
    gallery: [
      { layout: "full", image: image("tas-ev-donusumu", "01", "wide", "Loş ışıkta taş duvarlı oda"), caption: "Özgün taş duvar dokusu" },
      {
        layout: "pair",
        images: [
          image("tas-ev-donusumu", "02", "portrait", "Ahşap ada tezgâhlı rustik mutfak"),
          image("tas-ev-donusumu", "03", "square", "Sıvalı duvardaki niş içinde dekoratif vazo"),
        ],
      },
      {
        layout: "offset",
        image: image("tas-ev-donusumu", "04", "landscape", "Mavi gökyüzü altında eski taş ev"),
        text: "Yeni eklenen her eleman, gerektiğinde özgün yapıya zarar vermeden sökülebilecek şekilde detaylandırıldı.",
        align: "right",
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
  {
    id: "p-06",
    slug: "atolye-showroom",
    title: "Atölye Showroom",
    category: "ticari",
    discipline: "Mimari & İç Mimari",
    location: "Tokat",
    year: 2025,
    area: 540,
    status: "devam-ediyor",
    summary:
      "Üretim atölyesi ile sergi alanını aynı yapıda buluşturan, akşam saatlerinde sokakla ilişki kuran şeffaf cepheli showroom.",
    description: [
      "Atölye Showroom, üretimin görünür olmasını bir tasarım ilkesi olarak benimsiyor. Sergi alanı ile atölye arasındaki cam bölme, ziyaretçinin ürünün nasıl yapıldığını izleyebilmesine olanak tanıyor.",
      "Cephede kullanılan geniş açıklıklar akşam saatlerinde yapıyı sokak için bir vitrine dönüştürürken, gündüz saatlerinde derin saçaklar sayesinde iç mekân doğrudan güneşten korunuyor.",
    ],
    coverImage: image("atolye-showroom", "cover", "landscape", "Atölye Showroom: gece aydınlatılmış cam cepheli yapı"),
    gallery: [
      { layout: "full", image: image("atolye-showroom", "01", "wide", "Yüksek pencereli beyaz sergi salonu"), caption: "Sergi alanı" },
      {
        layout: "pair",
        images: [
          image("atolye-showroom", "02", "portrait", "Brüt beton duvarlı iç mekân"),
          image("atolye-showroom", "03", "square", "Ahşap lamel duvar önünde oturma grubu"),
        ],
      },
      {
        layout: "offset",
        image: image("atolye-showroom", "04", "landscape", "Kabuk formlu, geniş saçaklı pavyon"),
        text: "Derin saçaklar, cam cepheyi yaz güneşinden korurken giriş önünde gölgeli bir bekleme alanı da oluşturuyor.",
        align: "left",
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];
  if (!next) {
    throw new Error("Project list is empty.");
  }
  return next;
}

export function formatArea(area: number): string {
  return `${new Intl.NumberFormat("tr-TR").format(area)} m²`;
}
