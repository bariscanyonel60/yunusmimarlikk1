import type { ImageAsset, Service } from "@/lib/types";

function serviceImage(name: string, alt: string): ImageAsset {
  return { src: `/images/services/${name}.jpg`, alt, width: 1600, height: 2000, placeholder: true };
}

export const services: Service[] = [
  {
    id: "s-01",
    number: "01",
    title: "Mimari Tasarım",
    slug: "mimari-tasarim",
    summary:
      "Arsanın, iklimin ve kullanıcının ihtiyaçlarının birlikte okunduğu; yapının kütlesinden cephe detayına kadar bütüncül mimari proje.",
    scope: ["Arsa ve imar analizi", "Konsept ve kütle çalışmaları", "Avan ve ön proje", "Belediye uygulama projesi"],
    image: serviceImage("mimari", "Kıvrımlı cephe hatlarıyla yükselen bir yapıya aşağıdan bakış"),
  },
  {
    id: "s-02",
    number: "02",
    title: "İç Mimari Tasarım",
    slug: "ic-mimari-tasarim",
    summary:
      "Mekânın işleyişini, ışığını ve malzemesini birlikte kurgulayan; mobilyadan aydınlatmaya uzanan iç mekân tasarımı.",
    scope: ["Mekân kurgusu ve planlama", "Malzeme ve renk paleti", "Özel mobilya tasarımı", "Aydınlatma tasarımı"],
    image: serviceImage("ic-mimari", "Beyaz kanepe ve ahşap sandalyeyle döşenmiş aydınlık oturma alanı"),
  },
  {
    id: "s-03",
    number: "03",
    title: "Konut Tasarımı",
    slug: "konut-tasarimi",
    summary:
      "Müstakil evlerden apartman dairelerine; ailenin gündelik ritmine göre biçimlenen, uzun ömürlü yaşam alanları.",
    scope: ["Müstakil konut", "Villa projeleri", "Daire yenileme", "Toplu konut konsepti"],
    image: serviceImage("konut", "Bitkilerle çerçevelenmiş beyaz, sade konut iç mekânı"),
  },
  {
    id: "s-04",
    number: "04",
    title: "Ticari Mekân Tasarımı",
    slug: "ticari-mekan-tasarimi",
    summary:
      "Marka kimliğini mekâna dönüştüren; müşteri deneyimi ile operasyonel verimliliği birlikte gözeten ticari tasarım.",
    scope: ["Mağaza ve showroom", "Kafe ve restoran", "Otel ve konaklama", "Marka mekânı kurgusu"],
    image: serviceImage("ticari", "Ahşap lamelli raflarla düzenlenmiş minimal mağaza iç mekânı"),
  },
  {
    id: "s-05",
    number: "05",
    title: "Ofis Tasarımı",
    slug: "ofis-tasarimi",
    summary:
      "Çalışma biçimini merkeze alan; odaklanma, iş birliği ve dinlenme alanlarını dengeleyen ofis mekânları.",
    scope: ["Çalışma alanı planlaması", "Akustik çözümler", "Toplantı ve ortak alanlar", "Kurumsal kimlik uyumu"],
    image: serviceImage("ofis", "Gün ışığı alan ahşap çalışma masası ve sandalye"),
  },
  {
    id: "s-06",
    number: "06",
    title: "Uygulama & Proje Yönetimi",
    slug: "uygulama-proje-yonetimi",
    summary:
      "Tasarımın şantiyede aynı netlikle hayata geçmesi için uygulama projeleri, metraj ve saha koordinasyonu.",
    scope: ["Uygulama ve detay projeleri", "Metraj ve keşif", "Şantiye koordinasyonu", "Kalite kontrol"],
    image: serviceImage("uygulama", "Kalıp izleri görünen brüt beton duvar yüzeyi"),
  },
  {
    id: "s-07",
    number: "07",
    title: "Danışmanlık",
    slug: "danismanlik",
    summary:
      "Arsa alımından yenileme kararına kadar; projenin başında doğru soruları sormanızı sağlayan mimari danışmanlık.",
    scope: ["Fizibilite değerlendirmesi", "Mevcut yapı analizi", "İhtiyaç programı", "Malzeme ve bütçe danışmanlığı"],
    image: serviceImage("danismanlik", "Masa üzerindeki mimari çizimler üzerinde çalışan eller"),
  },
];
