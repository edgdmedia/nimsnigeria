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
    date: "THURSDAY 15",
    sessions: [
      {
        timeOfDay: "MORNING",
        events: [
          { title: "Presidential Opening Ceremony" },
          { 
            title: "Presidential Keynote Address",
            speaker: "His Excellency, President Bola Ahmed Tinubu, GCFR",
            description: '"Unlocking Nigeria\'s Human Capital for Industrial Transformation"'
          },
          {
            title: "Industry Keynote",
            speaker: "Aliko Dangote",
            description: '"Building a World-Class Industrial Workforce"'
          },
          { title: "Official Opening" },
          { title: "Industrial Innovation & Technology Exhibition" }
        ]
      },
      {
        timeOfDay: "AFTERNOON",
        events: [
          { title: "Technical Paper I: Reimagining Nigeria's Industrial Workforce Development System" },
          { title: "Technical Paper II: AI, Advanced Manufacturing & Future Technologies" },
          { title: "Executive Plenary Panel: The State of Nigeria's Industrial Workforce" },
          { title: "Exhibition Tour & Industrial Innovation Showcase" },
          { title: "Networking Reception" }
        ]
      }
    ]
  },
  {
    dayTitle: "Day 2",
    date: "FRIDAY 16",
    sessions: [
      {
        timeOfDay: "MORNING",
        events: [
          {
            title: "Technology & Innovation Keynote",
            speaker: "Ridwan Olalere, CEO LemFi",
            description: '"Preparing Nigeria\'s Workforce for the Global Digital Economy"'
          },
          {
            title: "Entrepreneurship & Human Capital Keynote",
            speaker: "Tony Elumelu, CFR",
            description: '"From Skills to Prosperity: Building Entrepreneurs & Industries"'
          },
          { title: "Technical Paper III" },
          { title: "From Skills to Industrial Prosperity" },
          { title: "Strategic Roundtable Discussions" },
          { title: "Four parallel sessions on the summit sub-themes" }
        ]
      },
      {
        timeOfDay: "AFTERNOON",
        events: [
          { title: "Presentation of Roundtable Reports" },
          { title: "National Policy Dialogue & Investment Matchmaking" },
          { title: "Partnership & Collaboration Signing Ceremony" },
          { title: "Presentation of Summit Outcomes" },
          { title: "Adoption of NIMS 2026 Communiqué" },
          { title: "Gala Night & Awards Ceremony" }
        ]
      }
    ]
  }
];
