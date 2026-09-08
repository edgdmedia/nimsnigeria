export interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
  years: number[];
}

export const speakers: Speaker[] = [
  {
    id: "1",
    name: "His Excellency, President Bola Ahmed Tinubu (GCFR)",
    role: "The President of the Federal Republic of Nigeria",
    image: "/images/bat-copy.webp",
    years: [2025]
  },
  {
    id: "2",
    name: "Sen. Kashim Shettima, GCON",
    role: "Vice-President, Federal Republic of Nigeria",
    image: "/images/Sen. Kashim shettima.png",
    years: [2025]
  },
  {
    id: "3",
    name: "Dr. Jumoke Oduwole, MFR",
    role: "Honorable Minister, Federal Ministry of Industry, Trade and Investment, Federal Republic of Nigeria",
    image: "/images/Dr. Jumoke Oduwole.png",
    years: [2025]
  },
  {
    id: "4",
    name: "Distinguished Senator John Owan Enoh",
    role: "Minister of State for Industry",
    image: "/images/distinguish-senator-john-owan-enoh-minister-of-state-for-industry.png",
    years: [2025]
  },
  {
    id: "5",
    name: "Amb. Nura Abba Rimi",
    role: "Permanent Secretary, Federal Ministry of Industry, Trade and Investment, Federal Republic of Nigeria",
    image: "/images/9.png",
    years: [2025]
  },
  {
    id: "6",
    name: "HON. Adamson Oluwatosin Ayinde, MBA, AMNIM, CNA",
    role: "Senior Special Assistant to the President on Industrial Training and Development",
    image: "/images/ssa2.png",
    years: [2025]
  },
  {
    id: "7",
    name: "Dr. Afiz Ogun Oluwatoyin",
    role: "Director-General, Industrial Training Fund (ITF)",
    image: "/images/dg-itf-g.png",
    years: [2025]
  },
  {
    id: "8",
    name: "Dr. Olasupo Olusi",
    role: "Managing Director/CEO, Bank of Industry (BOI)",
    image: "/images/dr-olasupo-olusi-managing-directorceo-bank-of-industry-boi.png",
    years: [2025]
  },
  {
    id: "9",
    name: "Mr. Faleye Oluwaseun Mayomi",
    role: "Managing Director/CEO, Nigeria Social Industrial Trust Fund (NSITF)",
    image: "/images/mr-faleye-oluwaseun-mayomi-manging-directorceo-nigeria-social-industrial-trust-fund-nsitf.png",
    years: [2025]
  },
  {
    id: "10",
    name: "Mr. Oluwemimo Joseph Osanipin",
    role: "Director General, NADDC",
    image: "/images/olwwwwww.png",
    years: [2025]
  },
  {
    id: "11",
    name: "Bamanga Usman Jada",
    role: "Managing Director and Chief Executive, Oil and Gas Free Zones Authority Nigeria",
    image: "/images/bambam.png",
    years: [2025]
  },
  {
    id: "12",
    name: "Abba Abubakar Aliyu",
    role: "MD/CEO, Rural Electrification Agency (REA)",
    image: "/images/abba-abubakar-aliyu.png",
    years: [2025]
  },
  {
    id: "13",
    name: "Dr. Ifeanyi Chukwunonso Okeke",
    role: "",
    image: "/images/1.png",
    years: [2025]
  },
  {
    id: "2026-1",
    name: "President Bola Ahmed Tinubu",
    role: "President, Federal Republic of Nigeria",
    image: "/images/bat-copy.webp",
    years: [2026]
  },
  {
    id: "2026-2",
    name: "Distinguished Senator John Owan Enoh",
    role: "Minister of State for Industry",
    image: "/images/Senator John Owan Enoh.jpeg",
    years: [2026]
  },
  {
    id: "2026-3",
    name: "Hon Adamson Oluwatosin Ayinde",
    role: "Senior Special Assistant to the President on Industrial Training and Development",
    image: "/images/ssa2.png",
    years: [2026]
  },
  {
    id: "2026-4",
    name: "Dr. Afiz Oluwatoyin Ogun",
    role: "Director-General, Industrial Training Fund (ITF)",
    image: "/images/Dr. Afiz Oluwatoyin Ogun.jpg",
    years: [2026]
  },
  {
    id: "2026-5",
    name: "Dr. Olasupo Olusi",
    role: "Managing Director/CEO, Bank of Industry (BOI)",
    image: "/images/Dr. Olasupo Olusi.jpeg",
    years: [2026]
  },
  {
    id: "2026-6",
    name: "Dr. Ifeanyi Chukwunonso Okeke",
    role: "DG/CEO, Standards Organisation of Nigeria (SON)",
    image: "/images/Dr. Ifeanyi Chukwunonso Okeke.jpg",
    years: [2026]
  },
  {
    id: "2026-7",
    name: "Oluwaseun Faleye",
    role: "Managing Director/CEO, Nigeria Social Insurance Trust Fund (NSITF)",
    image: "/images/Oluwaseun Faleye.jpeg",
    years: [2026]
  },
  {
    id: "2026-8",
    name: "Mr. Charles Odii",
    role: "DG/CEO, Small & Medium Enterprises Development Agency (SMEDAN)",
    image: "/images/dr-charles-odii.jpeg",
    years: [2026]
  },
  {
    id: "2026-9",
    name: "Mr. Osanipin Oluwemimo Joseph",
    role: "Director General, National Automotive Design & Development Council (NADDC)",
    image: "/images/Mr. Osanipin Oluwemimo Joseph.jpeg",
    years: [2026]
  }
];

export const speakers2025: Speaker[] = speakers.filter((speaker) => speaker.years.includes(2025));

export const speakers2026: Speaker[] = speakers.filter((speaker) => speaker.years.includes(2026));
