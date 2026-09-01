export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  image: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tokat-ic-mimarlik-hizmeti",
    title: "Tokat'ta İç Mimarlık Hizmeti Almanın Avantajları",
    seoTitle: "Tokat İç Mimarlık Hizmeti | Neden Yerel Bir Ekip Seçmelisiniz",
    seoDescription:
      "Tokat mimarlık ve iç mimarlık hizmeti alırken nelere dikkat etmelisiniz? Yerel bir iç mimarlık atölyesiyle çalışmanın avantajlarını anlatıyoruz.",
    excerpt:
      "Tokat mimarlık ve iç mimarlık hizmeti ararken yerel bir ekiple çalışmanın projeye kattığı fark nedir? Kısaca anlatıyoruz.",
    category: "Tokat Mimarlık",
    date: "28 Ağustos 2026",
    isoDate: "2026-08-28",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    keywords: ["Tokat mimarlık", "Tokat iç mimarlık", "iç mimar Tokat"],
    sections: [
      {
        paragraphs: [
          "Tokat mimarlık ve iç mimarlık alanında hizmet ararken karşınıza çoğu zaman iki seçenek çıkar: büyük şehirlerden uzaktan çalışan bir ofis, ya da bölgeyi, iklimi ve yerel malzemeyi tanıyan bir ekip. Yunus Mimarlık olarak on yılı aşkın süredir Tokat ve çevresinde konut, villa ve ticari mekan projeleri yürütüyoruz; bu deneyim bize sadece estetik değil, uygulanabilirlik konusunda da avantaj sağlıyor.",
        ],
      },
      {
        heading: "Yerel bir iç mimar neden fark yaratır?",
        paragraphs: [
          "Tokat'ın iklimi, kışın soğuk ve yazın sıcak geçen bir karasal iklim. Bu, salon tasarımından pencere yönlendirmesine, mutfak havalandırmasından malzeme seçimine kadar birçok kararı doğrudan etkiliyor. Bölgeyi tanımayan bir ekip, güzel görünen ama kışın ısı kaybı yaşayan ya da yazın aşırı ısınan mekanlar tasarlayabilir. Tokat'ta iç mimarlık yaparken, yerel iklim verisini tasarımın en başından itibaren hesaba katıyoruz.",
          "Ayrıca yerel tedarikçi ve usta ağı, bir projenin bütçesini ve takvimini doğrudan etkiler. Tokat ve Amasya bölgesindeki doğal taş ocakları, ahşap atölyeleri ve mobilya üreticileriyle kurduğumuz ilişkiler sayesinde, İstanbul veya Ankara'dan malzeme getirtmek zorunda kalmadan kaliteli ve uygun maliyetli çözümler sunabiliyoruz.",
        ],
      },
      {
        heading: "Konuttan iş yerine geniş bir hizmet yelpazesi",
        paragraphs: [
          "Tokat mimarlık hizmetlerimiz yalnızca konutlarla sınırlı değil. Salon tasarımı, mutfak tasarımı, yatak odası düzenlemeleri gibi ev projelerinin yanı sıra, ofis, mağaza, cafe ve otel gibi iş yeri tasarım projelerinde de çalışıyoruz. Her iki alanda da yaklaşımımız aynı: önce mekânı ve orada yaşayacak ya da çalışacak insanları anlamak, sonra tasarıma başlamak.",
          "Bir iç mimarlık projesine başlarken ilk adım her zaman bir keşif görüşmesidir. Bütçenizi, önceliklerinizi ve zaman çizelgenizi birlikte netleştirir, ardından size özel bir kapsam öneririz. Tokat'ta bir projeniz varsa, ilk görüşme için bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "tokat-salon-tasarimi-rehberi",
    title: "Tokat'ta Salon Tasarımı: Şık ve Fonksiyonel Oturma Alanları İçin Rehber",
    seoTitle: "Tokat Salon Tasarımı Rehberi | Şık ve Fonksiyonel Oturma Alanı",
    seoDescription:
      "Tokat'ta salon tasarımı yaparken ışık, mobilya yerleşimi ve malzeme seçiminde nelere dikkat edilmeli? İç mimarlık atölyemizden pratik öneriler.",
    excerpt:
      "Tokat'ta salon tasarımı planlıyorsanız, ışık ve mobilya yerleşiminden malzeme seçimine kadar dikkat etmeniz gereken noktaları derledik.",
    category: "Salon Tasarımı",
    date: "20 Ağustos 2026",
    isoDate: "2026-08-20",
    readTime: "6 dk",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
    keywords: ["salon tasarımı Tokat", "oturma odası tasarımı", "Tokat iç mimarlık"],
    sections: [
      {
        paragraphs: [
          "Salon, bir evin en çok vakit geçirilen ve misafirlerin ilk gördüğü alanıdır. Tokat'ta salon tasarımı projelerinde en sık aldığımız istek, hem samimi hem de şık görünen, gösterişten uzak ama karakterli bir oturma alanı yaratmak. Bunun için birkaç temel prensibi her projede tekrar ediyoruz.",
        ],
      },
      {
        heading: "Işığı doğru okumak",
        paragraphs: [
          "Tokat'ın kış ayları uzun ve gün ışığı süresi kısa geçebiliyor. Bu yüzden salon tasarımında doğal ışığı en verimli şekilde kullanmak, perde seçiminden mobilya yerleşimine kadar her kararı etkiliyor. Ana oturma grubunu pencereye dik değil, ışığı karşılayacak şekilde konumlandırmak, gündüz saatlerinde ek aydınlatmaya olan ihtiyacı azaltır.",
          "Akşam saatleri için ise tek bir tavan aydınlatmasına güvenmek yerine, katmanlı bir aydınlatma kurgusu öneriyoruz: genel aydınlatma, okuma köşesi için noktasal ışık ve duvar veya raf aydınlatmasıyla atmosfer oluşturan sıcak bir ışık katmanı.",
        ],
      },
      {
        heading: "Malzeme ve renk paleti",
        paragraphs: [
          "Sıcak nötr tonlar (krem, kum beji, sıcak gri) bir salon tasarımında zamana dayanıklı bir zemin oluşturur. Bunun üzerine ahşap, keten ve yün gibi doğal dokuları ekleyerek mekâna karakter katıyoruz. Vurgu rengini ise genelde tek bir noktada — bir koltuk, bir tablo ya da bir halı üzerinde — kullanmayı tercih ediyoruz; böylece göz yorulmadan mekân bütünlüğü korunuyor.",
          "Tokat'ta salon tasarımı projelerinde traverten sehpa yüzeyleri, pirinç aydınlatma detayları ve keten döşemeli koltuklar sıkça tercih ettiğimiz kombinasyonlar arasında. Malzeme ve doku seçimlerimizin tamamını web sitemizdeki malzeme paleti bölümünden inceleyebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "tokat-mutfak-tasarimi",
    title: "Tokat'ta Mutfak Tasarımı: Modern ve Kullanışlı Çözümler",
    seoTitle: "Tokat Mutfak Tasarımı | Modern, Kullanışlı ve Şık Çözümler",
    seoDescription:
      "Tokat'ta mutfak tasarımı yaparken planlama, tezgah malzemesi ve depolama çözümlerinde dikkat edilmesi gerekenleri iç mimarlık atölyemiz anlatıyor.",
    excerpt:
      "Tokat'ta mutfak tasarımı planlarken doğru planlama ve malzeme seçimi, hem estetiği hem de kullanım kolaylığını belirliyor.",
    category: "Mutfak Tasarımı",
    date: "12 Ağustos 2026",
    isoDate: "2026-08-12",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
    keywords: ["mutfak tasarımı Tokat", "mutfak dolabı tasarımı", "Tokat iç mimarlık"],
    sections: [
      {
        paragraphs: [
          "Mutfak, bir evin en çok kullanılan ve en çok yıpranan alanlarından biri. Tokat'ta mutfak tasarımı projelerinde estetik kadar dayanıklılığı ve iş akışını da önceliklendiriyoruz; çünkü güzel görünen ama kullanışsız bir mutfak, zamanla ailenin en sık şikayet ettiği alan haline gelebiliyor.",
        ],
      },
      {
        heading: "Doğru planlama iş üçgeninden başlar",
        paragraphs: [
          "Klasik iş üçgeni prensibi — ocak, evye ve buzdolabı arasındaki mesafe — hâlâ geçerliliğini koruyor. Tokat'taki mutfak tasarımı projelerimizde önce mekânın metrekaresini ve kullanıcı sayısını değerlendiriyor, ardından tezgah uzunluğunu ve depolama ihtiyacını buna göre planlıyoruz. Açık mutfak tercih eden ailelerde, salon ile mutfak arasındaki görsel geçişi de tasarımın bir parçası olarak ele alıyoruz.",
        ],
      },
      {
        heading: "Tezgah ve dolap malzemesi seçimi",
        paragraphs: [
          "Mutfak tezgahında en çok tercih ettiğimiz malzemeler arasında dayanıklılığıyla öne çıkan kompozit taş ve doğal mermer bulunuyor. Dolap yüzeylerinde ise mat lake veya doğal ahşap kaplama, hem şıklık hem bakım kolaylığı sunuyor. Iroko ve meşe gibi sıcak tonlu ahşaplar, Tokat'ta mutfak tasarımı yaptığımız projelerde sıkça tercih ettiğimiz seçenekler arasında.",
          "Depolama konusunda ise çekmece içi organizerlar, köşe dolap çözümleri ve tezgah üstü açık raf dengesini her projede yeniden kuruyoruz. Amaç, mutfağı hem düzenli hem de günlük kullanımda pratik hale getirmek.",
        ],
      },
    ],
  },
  {
    slug: "tokat-is-yeri-ofis-tasarimi",
    title: "Tokat'ta İş Yeri ve Ofis Tasarımı: Markanızı Mekâna Taşımak",
    seoTitle: "Tokat İş Yeri ve Ofis Tasarımı | Markanızı Mekâna Taşıyın",
    seoDescription:
      "Tokat'ta iş yeri ve ofis tasarımı yaparken marka kimliğini mekâna nasıl taşırız? Ticari mekan tasarımı sürecimizi anlatıyoruz.",
    excerpt:
      "Tokat'ta iş yeri ve ofis tasarımı, sadece dekorasyon değil markanızı mekâna çevirme sürecidir. Nasıl çalıştığımızı anlatıyoruz.",
    category: "İş Yeri Tasarımı",
    date: "3 Ağustos 2026",
    isoDate: "2026-08-03",
    readTime: "6 dk",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    keywords: [
      "iş yeri tasarımı Tokat",
      "ofis tasarımı Tokat",
      "ticari mekan tasarımı Tokat",
    ],
    sections: [
      {
        paragraphs: [
          "Bir iş yeri, müşterinizin veya çalışanınızın markanızla kurduğu ilk fiziksel temastır. Tokat'ta iş yeri ve ofis tasarımı projelerinde amacımız, mekânı yalnızca 'güzel' değil, markanın kimliğini ve çalışma kültürünü yansıtan bir alan haline getirmek.",
        ],
      },
      {
        heading: "Ofis tasarımında zonlama ve akustik",
        paragraphs: [
          "Açık plan ofislerde en sık karşılaşılan sorun, odaklanma ile etkileşim ihtiyacının çatışmasıdır. Tokat'ta tamamladığımız ofis tasarımı projelerinde, akustik ahşap paneller ve yumuşak zonlama ile sessiz çalışma alanlarını toplantı ve sosyal alanlardan ayırıyoruz. Bu, hem verimliliği hem de çalışan memnuniyetini doğrudan etkileyen bir karar.",
        ],
      },
      {
        heading: "Cafe, mağaza ve otel projelerinde marka dili",
        paragraphs: [
          "Ticari mekan tasarımı söz konusu olduğunda — ister bir cafe, ister bir mağaza ya da otel lobisi olsun — malzeme ve renk paleti markanın kimliğiyle uyumlu olmalı. Tokat'ta tasarladığımız iş yeri projelerinde önce markanın hikayesini dinliyor, ardından bu hikayeyi malzeme, ışık ve mekân kurgusuna çeviriyoruz.",
          "Küçük bir ticari mekânda karakter yaratmak, büyük bir konuttan çoğu zaman daha zor bir denklemdir; çünkü her metrekare hem işlevsel hem de anlatı taşıyıcı olmak zorundadır. Bu dengeyi kurmak, Tokat'ta iş yeri tasarımı hizmetimizin merkezinde yer alıyor.",
        ],
      },
    ],
  },
  {
    slug: "tokat-villa-konut-ic-mimarlik",
    title: "Tokat'ta Villa ve Konut Projelerinde İç Mimarlık Süreci",
    seoTitle: "Tokat Villa Tasarımı ve Konut İç Mimarlık Süreci",
    seoDescription:
      "Tokat'ta villa tasarımı ve konut iç mimarlık projelerinde süreç nasıl işler? Keşiften teslime adım adım anlatıyoruz.",
    excerpt:
      "Tokat'ta villa tasarımı ve konut iç mimarlık projelerinde süreç, keşiften teslime kadar altı net adımdan oluşuyor.",
    category: "Villa & Konut",
    date: "25 Temmuz 2026",
    isoDate: "2026-07-25",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    keywords: ["villa tasarımı Tokat", "konut iç mimarlık Tokat", "Tokat mimarlık"],
    sections: [
      {
        paragraphs: [
          "Tokat ve çevresinde villa tasarımı ve konut iç mimarlık projelerinde çalışırken, sürecin baştan net olması hem bizim hem de müşterimiz için önemli. Aşağıda, Bodrum'dan Amasya'ya kadar tamamladığımız projelerde izlediğimiz altı adımlı süreci özetliyoruz.",
        ],
      },
      {
        heading: "Keşiften teslime altı adım",
        paragraphs: [
          "Süreç, arazi veya mevcut mekânın ziyaretiyle başlar; burada yön, ışık ve manzara ilişkisini değerlendiririz. İkinci adımda aile yapısı, günlük ritim ve bütçe üzerine detaylı bir analiz yaparız. Üçüncü adımda ilk konsept sunumunu hazırlarız — kütle, plan şeması ve genel atmosfer burada netleşir.",
          "Konsept onaylandıktan sonra tasarım detaylandırılır: malzeme, mobilya ve aydınlatma kararları bu aşamada kesinleşir. Uygulama aşamasında şantiyeyi düzenli olarak ziyaret eder, imalatı yerinde takip ederiz. Son adım teslimdir — mekânı, tasarlandığı gibi, eksiksiz teslim ederiz.",
        ],
      },
      {
        heading: "Villa projelerinde arazi ile uyum",
        paragraphs: [
          "Tokat'ta villa tasarımı projelerinde en çok önem verdiğimiz nokta, yapının araziyle kurduğu ilişki. Eğimli bir arazide zemine gömülü bir kütle, düz bir arazide ise yatay çizgileri öne çıkaran bir yaklaşım tercih ediyoruz. Amaç her zaman aynı: yapının, bulunduğu yere ait hissettirmesi.",
        ],
      },
    ],
  },
  {
    slug: "tokat-cafe-restoran-ic-mekan-tasarimi",
    title: "Tokat'ta Cafe ve Restoran İç Mekan Tasarımı Nasıl Yapılır",
    seoTitle: "Tokat Cafe ve Restoran İç Mekan Tasarımı Rehberi",
    seoDescription:
      "Tokat'ta cafe ve restoran iç mekan tasarımı yaparken atmosfer, malzeme ve oturma düzeni kararlarını nasıl verdiğimizi anlatıyoruz.",
    excerpt:
      "Tokat'ta cafe ve restoran iç mekan tasarımı, doğru atmosfer ve oturma düzeniyle işletmenin karakterini belirler.",
    category: "Ticari Mekan",
    date: "15 Temmuz 2026",
    isoDate: "2026-07-15",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1600&q=80",
    keywords: ["cafe tasarımı Tokat", "restoran iç mekan tasarımı", "Tokat iç mimarlık"],
    sections: [
      {
        paragraphs: [
          "Bir cafe veya restoranın başarısı yalnızca menüsüne değil, misafirin içeri girdiği andan itibaren hissettiği atmosfere de bağlıdır. Tokat'ta cafe ve restoran iç mekan tasarımı projelerinde, işletmenin karakterini mekâna doğru şekilde çevirmeye çalışıyoruz.",
        ],
      },
      {
        heading: "Oturma düzeni ve akış",
        paragraphs: [
          "Oturma düzeni planlanırken hem kapasiteyi hem de misafir konforunu dengelemek gerekiyor. Masalar arasında yeterli geçiş alanı bırakmak, servis akışını kolaylaştırırken misafirlerin de rahat hissetmesini sağlar. Pencere kenarları ve köşe alanlar, farklı grup büyüklükleri için esnek şekilde tasarlanmalı.",
        ],
      },
      {
        heading: "Malzeme ve ışıkla atmosfer kurmak",
        paragraphs: [
          "Ham sıva, meşe bar tezgahı ve pirinç aydınlatma detayları, Tokat'ta tamamladığımız Atölye Cafe projesinde olduğu gibi, hem sıcak hem de karakterli bir atmosfer yaratmak için sıkça kullandığımız kombinasyonlar. Aydınlatmada tek bir güçlü kaynak yerine, farklı yükseklikte ve sıcaklıkta ışık kaynaklarını katmanlamayı tercih ediyoruz — bu, günün farklı saatlerinde mekânın karakterini korumasını sağlıyor.",
          "Tokat'ta bir cafe, restoran ya da mağaza projeniz varsa, konsept aşamasından uygulamaya kadar süreci birlikte yürütebiliriz.",
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const blogCategories = Array.from(
  new Set(blogPosts.map((p) => p.category))
);
