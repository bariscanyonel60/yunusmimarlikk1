export type Material = {
  id: string;
  name: string;
  category: string;
  hex: string;
  image: string;
  note: string;
};

export const materials: Material[] = [
  {
    id: "traverten",
    name: "Traverten",
    category: "Taş",
    hex: "#D8CFBE",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    note: "Gözenekli yüzeyi ışığı yumuşatır, banyo ve zeminlerde tercih ederiz.",
  },
  {
    id: "iroko",
    name: "Iroko Ahşap",
    category: "Ahşap",
    hex: "#A9743F",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80",
    note: "Sıcak ton ve yüksek dayanımı ile mutfak ve dolap yüzeylerinde kullanırız.",
  },
  {
    id: "ham-beton",
    name: "Ham Beton",
    category: "Beton",
    hex: "#8D8980",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80",
    note: "Dokusal bir zemin katmanı olarak, sıcak malzemelerle dengede kullanılır.",
  },
  {
    id: "keten",
    name: "Keten Döşeme",
    category: "Tekstil",
    hex: "#C9BFA8",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=80",
    note: "Perde ve döşemelik olarak mekâna yumuşak bir akustik katman ekler.",
  },
  {
    id: "pirinc",
    name: "Pirinç Detay",
    category: "Metal",
    hex: "#B08D57",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
    note: "Aydınlatma ve kulp detaylarında, ışığı yansıtan sıcak bir vurgu.",
  },
  {
    id: "bulaka-mermer",
    name: "Bulaka Mermer",
    category: "Taş",
    hex: "#EDE7DA",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80",
    note: "Damarlı dokusuyla tezgah ve masa yüzeylerinde odak noktası yaratır.",
  },
];
