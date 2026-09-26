export interface CommitteeMember {
  name: string;
  role?: string;
  image?: string;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  members: CommitteeMember[];
}

export const committees: Committee[] = [
  {
    id: "planning",
    name: "Planning Committee",
    description: "The team responsible for coordinating the overall planning and delivery of NIMS 2026.",
    members: [
      { name: "Dr. Bashir Taiwo", image: "/images/committee/planning/dr-bashir-taiwo.webp" },
      { name: "Dr. Obaro Osah", image: "/images/committee/planning/dr-obaro-osah.webp" },
      { name: "Mrs. Folusho Bolaji", image: "/images/committee/planning/mrs-folusho-bolaji.webp" },
      { name: "Otunba Francis Meshioye", image: "/images/committee/planning/otunba-francis-meshioye.webp" },
      { name: "Patient Daniel Ochugbo", image: "/images/committee/planning/patient-daniel-ochugbo.webp" },
      { name: "Prof. Anoka Njan", image: "/images/committee/planning/prof-anoka-njan.webp" },
      { name: "Yahaya Hassan", image: "/images/committee/planning/yahaya-hassan.webp" }
    ]
  },
  {
    id: "logistics",
    name: "Logistics Committee",
    description: "The team responsible for coordinating the operational and logistical requirements for the summit.",
    members: [
      { name: "Barr. Adetutu Adekoya", image: "/images/committee/logistics/barr-adetutu-adekoya.webp" },
      { name: "Hajia Tawakalitu Abdul Kareem Yusuf", image: "/images/committee/logistics/hajia-tawakalitu-abdul-kareem-yusuf.webp" },
      { name: "Mattew Ameh", image: "/images/committee/logistics/mattew-ameh.webp" },
      { name: "Mohammed Abdulaziz Jada", image: "/images/committee/logistics/mohammed-abdulaziz-jada.webp" },
      { name: "Mohammed Ahmed Rabiu", image: "/images/committee/logistics/mohammed-ahmed-rabiu.webp" }
    ]
  },
  {
    id: "speaker-guest-engagement",
    name: "Speaker & Guest Engagement Committee",
    description: "The team responsible for speaker coordination, guest engagement and stakeholder liaison.",
    members: [
      { name: "Adebola Mutiat Taiwo", image: "/images/committee/speaker-guest-engagement/adebola-mutiat-taiwo.webp" },
      { name: "Dr. Ganiyu Oluremi Sopehin", image: "/images/committee/speaker-guest-engagement/dr-ganiyu-oluremi-sopehin.webp" },
      { name: "Dr. Taiwo Bashir", image: "/images/committee/speaker-guest-engagement/dr-taiwo-bashir.webp" },
      { name: "Maryam Adamu", image: "/images/committee/speaker-guest-engagement/maryam-adamu.webp" },
      { name: "Ogochukwu Ifeoma Akabogu", image: "/images/committee/speaker-guest-engagement/ogochukwu-ifeoma-akabogu.webp" },
      { name: "Zainab Olateju", image: "/images/committee/speaker-guest-engagement/zainab-olateju.webp" }
    ]
  },
  {
    id: "media-publicity",
    name: "Media & Publicity Committee",
    description: "The team responsible for NIMS 2026 communications, media relations and public engagement.",
    members: [
      { name: "Aliyu Isa Muhammed", image: "/images/committee/media-publicity/aliyu-isa-muhammed.webp" },
      { name: "Barr. (Mrs) Ifeoma Williams", image: "/images/committee/media-publicity/barr-mrs-ifeoma-williams.webp" },
      { name: "Dr. Akinfalabi Sheu Ibrahim", image: "/images/committee/media-publicity/dr-akinfalabi-sheu-ibrahim.webp" },
      { name: "Dr. Sulaiman Kassim", image: "/images/committee/media-publicity/dr-sulaiman-kassim.webp" },
      { name: "Khalid Oshoke Ahmed", image: "/images/committee/media-publicity/khalid-oshoke-ahmed.webp" },
      { name: "Oluseyi Nurudeen", image: "/images/committee/media-publicity/oluseyi-nurudeen.webp" }
    ]
  },
  {
    id: "monitoring-evaluation",
    name: "Monitoring & Evaluation Committee",
    description: "The team responsible for tracking implementation, documenting progress and evaluating the summit's outcomes.",
    members: [
      { name: "Dr Kemi Abayeh", image: "/images/committee/monitoring-evaluation/dr-kemi-abayeh.webp" },
      { name: "Dr. Abimbola James", image: "/images/committee/monitoring-evaluation/dr-abimbola-james.webp" },
      { name: "Hakeem Olugbode", image: "/images/committee/monitoring-evaluation/hakeem-olugbode.webp" },
      { name: "Olamide Lawal", image: "/images/committee/monitoring-evaluation/olamide-lawal.webp" }
    ]
  }
];
