import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Keşif",
    description:
      "Yeri yerinde görür, ihtiyaçlarınızı, bütçenizi ve beklentilerinizi dinleriz. Arsa, imar durumu ve mevcut yapı verilerini topluyoruz.",
    deliverable: "İhtiyaç programı",
  },
  {
    number: "02",
    title: "Konsept",
    description:
      "Toplanan veriyi bir tasarım fikrine dönüştürürüz. Kütle, plan şeması ve malzeme yönelimini alternatiflerle birlikte paylaşırız.",
    deliverable: "Konsept sunumu",
  },
  {
    number: "03",
    title: "Tasarım",
    description:
      "Seçilen fikri plan, kesit ve görünüşlerle geliştiririz. İç mekân, aydınlatma ve malzeme kararları bu aşamada netleşir.",
    deliverable: "Ön proje ve sunum",
  },
  {
    number: "04",
    title: "Projelendirme",
    description:
      "Ruhsat ve uygulama için gereken mimari projeleri hazırlar, statik ve tesisat disiplinleriyle koordinasyonu sağlarız.",
    deliverable: "Uygulama projesi",
  },
  {
    number: "05",
    title: "Uygulama",
    description:
      "Şantiyede tasarımın sahibi olarak yer alırız. Detayların, malzemelerin ve iş kalitesinin projeye uygunluğunu takip ederiz.",
    deliverable: "Saha koordinasyonu",
  },
  {
    number: "06",
    title: "Teslim",
    description:
      "Son kontrolleri birlikte yapar, mekânı kullanıma hazır şekilde teslim ederiz. Teslim sonrası sorularınız için yanınızdayız.",
    deliverable: "Teslim ve takip",
  },
];
