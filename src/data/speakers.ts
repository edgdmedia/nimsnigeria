export interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
  tag?: string;
}

export interface SpeakerAppearance {
  speakerId: string;
  tag?: string;
}

export const speakers: Speaker[] = [
  {
    id: "tinubu",
    name: "His Excellency, President Bola Ahmed Tinubu (GCFR)",
    role: "The President of the Federal Republic of Nigeria",
    image: "/images/president-bola-ahmed-tinubu.webp"
  },
  {
    id: "shettima",
    name: "Sen. Kashim Shettima, GCON",
    role: "Vice-President, Federal Republic of Nigeria",
    image: "/images/sen-kashim-shettima.webp"
  },
  {
    id: "oduwole",
    name: "Dr. Jumoke Oduwole, MFR",
    role: "Honourable Minister, Federal Ministry of Industry, Trade and Investment, Federal Republic of Nigeria",
    image: "/images/dr-jumoke-oduwole.webp"
  },
  {
    id: "enoh",
    name: "Distinguished Senator John Owan Enoh",
    role: "Minister of State for Industry",
    image: "/images/distinguished-senator-john-owan-enoh.webp"
  },
  {
    id: "rimi",
    name: "Amb. Nura Abba Rimi",
    role: "Permanent Secretary, Federal Ministry of Industry, Trade and Investment, Federal Republic of Nigeria",
    image: "/images/amb-nura-abba-rimi.webp"
  },
  {
    id: "ayinde",
    name: "Hon. Adamson Oluwatosin Ayinde, MBA, AMNIM, CNA",
    role: "Senior Special Assistant to the President on Industrial Training and Development",
    image: "/images/hon-adamson-oluwatosin-ayinde.webp"
  },
  {
    id: "ogun",
    name: "Dr. Afiz Oluwatoyin Ogun",
    role: "Director-General, Industrial Training Fund (ITF)",
    image: "/images/dr-afiz-oluwatoyin-ogun.webp"
  },
  {
    id: "olusi",
    name: "Dr. Olasupo Olusi",
    role: "Managing Director/CEO, Bank of Industry (BOI)",
    image: "/images/dr-olasupo-olusi.webp"
  },
  {
    id: "faleye",
    name: "Mr. Faleye Oluwaseun Mayomi",
    role: "Managing Director/CEO, Nigeria Social Insurance Trust Fund (NSITF)",
    image: "/images/oluwaseun-faleye.webp"
  },
  {
    id: "osanipin",
    name: "Mr. Osanipin Oluwemimo Joseph",
    role: "Director General, National Automotive Design & Development Council (NADDC)",
    image: "/images/mr-osanipin-oluwemimo-joseph.webp"
  },
  {
    id: "okeke",
    name: "Dr. Ifeanyi Chukwunonso Okeke",
    role: "DG/CEO, Standards Organisation of Nigeria (SON)",
    image: "/images/dr-ifeanyi-chukwunonso-okeke.webp"
  },
  {
    id: "jada",
    name: "Bamanga Usman Jada",
    role: "Managing Director and Chief Executive, Oil and Gas Free Zones Authority Nigeria",
    image: "/images/bamanga-usman-jada.webp"
  },
  {
    id: "aliyu",
    name: "Abba Abubakar Aliyu",
    role: "MD/CEO, Rural Electrification Agency (REA)",
    image: "/images/abba-abubakar-aliyu.webp"
  },
  {
    id: "dingyadi",
    name: "Muhammad Maigari Dingyadi (PhD)",
    role: "Minister of Labour and Employment",
    image: "/images/muhammad-maigari-dingyadi.webp"
  },
  {
    id: "olawande",
    name: "Comrade Ayodele Olawande Emmanuel",
    role: "Minister of Youth",
    image: "/images/comrade-ayodele-olawande-emmanuel.webp"
  },
  {
    id: "audu",
    name: "Prince Shuaibu Abubakar Audu",
    role: "Minister of Steel",
    image: "/images/prince-shuaibu-abubakar-audu.webp"
  },
  {
    id: "odii",
    name: "Mr. Charles Odii",
    role: "DG/CEO, Small & Medium Enterprises Development Agency (SMEDAN)",
    image: "/images/mr-charles-odii.webp"
  },
  {
    id: "rabiu",
    name: "Abdul Samad Rabiu",
    role: "Founder, BUA Group",
    image: "/images/alhaji-abdul-samad-isyaku-rabiu.webp"
  },
  {
    id: "maduka",
    name: "Cosmas Maduka",
    role: "Founder, COSCHARIS",
    image: "/images/cosmas-maduka.webp"
  },
  {
    id: "anele",
    name: "Jude Anele",
    role: "MD/CEO, Nova Bank Plc",
    image: "/images/jude-anele.webp"
  }
];

function resolveSpeakers(appearances: SpeakerAppearance[]): Speaker[] {
  return appearances
    .map(({ speakerId, tag }) => {
      const speaker = speakers.find((s) => s.id === speakerId);
      if (!speaker) return null;
      return { ...speaker, ...(tag ? { tag } : {}) };
    })
    .filter((speaker): speaker is Speaker => speaker !== null);
}

export const speakers2025: Speaker[] = resolveSpeakers([
  { speakerId: "tinubu" },
  { speakerId: "shettima" },
  { speakerId: "oduwole" },
  { speakerId: "enoh" },
  { speakerId: "rimi" },
  { speakerId: "ayinde" },
  { speakerId: "ogun" },
  { speakerId: "olusi" },
  { speakerId: "faleye" },
  { speakerId: "osanipin" },
  { speakerId: "jada" },
  { speakerId: "aliyu" },
  { speakerId: "okeke" }
]);

export const speakers2026: Speaker[] = resolveSpeakers([
  { speakerId: "tinubu" },
  { speakerId: "oduwole" },
  { speakerId: "enoh" },
  { speakerId: "ayinde", tag: "Convener" },
  { speakerId: "ogun", tag: "Co-Host" },
  { speakerId: "rabiu" },
  { speakerId: "maduka" },
  { speakerId: "anele" },
  { speakerId: "dingyadi" },
  { speakerId: "olawande" },
  { speakerId: "audu" },
  { speakerId: "olusi" },
  { speakerId: "okeke" },
  { speakerId: "faleye" },
  { speakerId: "odii" },
  { speakerId: "osanipin" }
]);
