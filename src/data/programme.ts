export interface ProgrammeEvent {
  title: string;
  speaker?: string;
  description?: string;
}

export interface ProgrammeSession {
  timeOfDay: string; // e.g. "MORNING", "AFTERNOON"
  events: ProgrammeEvent[];
}

export interface ProgrammeDay {
  dayTitle: string;
  date: string;
  sessions: ProgrammeSession[];
}

export const programmeSchedule: ProgrammeDay[] = [
  {
    dayTitle: "Day 1",
    date: "THURSDAY 15TH",
    sessions: [
      {
        timeOfDay: "MORNING",
        events: [
          { title: "Presidential Opening Ceremony & Keynote Address" },
          { title: "Industry Keynote" },
          { title: "Technical Papers I & II" }
        ]
      },
      {
        timeOfDay: "AFTERNOON",
        events: [
          { title: "Executive Plenary Session" },
          { title: "Exhibition Opening" },
          { title: "Networking & Reception" }
        ]
      }
    ]
  },
  {
    dayTitle: "Day 2",
    date: "FRIDAY 16TH",
    sessions: [
      {
        timeOfDay: "MORNING",
        events: [
          { title: "Technology Keynote" },
          { title: "Entrepreneurship Keynote" },
          { title: "Technical Paper III & Strategic Roundtables" }
        ]
      },
      {
        timeOfDay: "AFTERNOON",
        events: [
          { title: "Policy Dialogues & Partnership Signings" },
          { title: "Communique Adoption" },
          { title: "Gala Night Awards" }
        ]
      }
    ]
  }
];
