export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Bir proje ortalama ne kadar sürüyor?",
    answer:
      "Konsept ve tasarım süreci genellikle 4-8 hafta, uygulama ise mekânın büyüklüğüne göre 2-6 ay arasında değişir. İlk görüşmede size özel bir takvim paylaşırız.",
  },
  {
    question: "Sadece tasarım mı yapıyorsunuz, uygulama da alıyor musunuz?",
    answer:
      "Hem konsept-tasarım hem de anahtar teslim uygulama hizmeti veriyoruz. Yalnızca çizim veya danışmanlık almak isteyen müşterilerle de çalışıyoruz.",
  },
  {
    question: "Tokat dışında proje alıyor musunuz?",
    answer:
      "Evet. Bodrum, Amasya ve çevre illerde tamamladığımız projeler var; şehir dışı projelerde saha ziyaretlerini sürece dahil ediyoruz.",
  },
  {
    question: "Bütçemiz sınırlıysa yine de görüşebilir miyiz?",
    answer:
      "Kesinlikle. İlk görüşmede bütçenizi ve önceliklerinizi birlikte netleştiriyor, ona göre bir kapsam öneriyoruz.",
  },
  {
    question: "3D görselleştirme hizmeti ayrı mı satın alınıyor?",
    answer:
      "3D görselleştirme, tasarım sürecinin bir parçası olarak sunuluyor. Yalnızca görselleştirme talebi için de ayrı teklif hazırlayabiliriz.",
  },
];
