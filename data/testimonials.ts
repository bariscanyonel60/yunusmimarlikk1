export type Testimonial = {
  quote: string;
  name: string;
  project: string;
  rating: number;
  source: "Google" | "Instagram" | "Proje";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Evimize girdiğimizde kendi hikayemizi görüyoruz; hiçbir köşe rastgele değil. Süreç boyunca her kararın arkasında bir gerekçe vardı.",
    name: "Elif & Kaan T.",
    project: "Modern Residence, Tokat",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Cafemizin karakterini bulmamız üç haftamızı aldı ama sonuç, müşterilerimizin ilk söylediği şey oldu: burası çok sıcak.",
    name: "Atölye Cafe Ekibi",
    project: "Atölye Cafe, Tokat",
    rating: 5,
    source: "Instagram",
  },
  {
    quote:
      "Ofis taşınması gerginlik yaratır diye düşünüyorduk; oysa ekip çalışma alışkanlıklarımızı bizden daha iyi anladı.",
    name: "Deniz Yılmaz",
    project: "Loft Ofis, Tokat",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Taş evin restorasyonunda hem eski dokuyu koruyacaklarını hem de modern bir yaşam alanı kuracaklarını söylediklerinde emin değildim. Sonuç beklentimin çok üzerinde oldu.",
    name: "Mehmet Aydın",
    project: "Taş Ev, Amasya",
    rating: 5,
    source: "Proje",
  },
];
