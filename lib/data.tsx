import DBWizardGuideline from "@/app/components/guidelines/content/DBWizardGuideline";
import DebuggingGuideline from "@/app/components/guidelines/content/DebuggingGuideline";
import HackathonGuideline from "@/app/components/guidelines/content/HackathonGuideline";
import databasewizard from "@/app/img/segments/database-wizard.jpg";
import debuggers from "@/app/img/segments/debuggers.jpg";
import hackathon from "@/app/img/segments/hackathon.jpg";
import {
  IFinalRoundEvents,
  IImportantDate,
  IOnlinePreliminaryEvents,
  ISegment,
  ITabContent,
  ITabItem,
} from "./data.types";
import HackathonResult from "@/app/components/selected-teams/contents/HackathonResult";
import DebuggerResult from "@/app/components/selected-teams/contents/DebuggerResult";
import DatabaseWizardResult from "@/app/components/selected-teams/contents/DatabaseWizardResult";

export const onlinePreliminaryEvents: IOnlinePreliminaryEvents[] = [
  {
    date: new Date("2024-10-24"),
    title: "Registration Opens",
    description:
      "Registration for IntraHacktive 1.0 begins. Participants can register online through the website.",
  },
  {
    date: new Date("2024-10-28"),
    title: "Debuggers and Database Wizard Deadline",
    description:
      "Registration deadline for Debuggers and Database Wizard challenges. Ensure your registration are completed by this date.",
  },
  {
    date: new Date("2024-10-31"),
    title: "Hackathon Deadline",
    description:
      "Registration along with the submission deadline for the high-level solution and video presentation for the Hackathon. Teams will be shortlisted based on this submission.",
  },
];

export const finalRoundEvents: IFinalRoundEvents[] = [
  {
    date: new Date("2024-11-03"),
    title: "Online Round for Debuggers & Database Wizard",
    description:
      "Compete in the online preliminary round for Debuggers and Database Wizard. Participants will be tested on their debugging skills or database management expertise.",
  },
  {
    date: new Date("2024-11-08"),
    title: "Online Hackathon Begins",
    description:
      "The online Hackathon starts. Teams will receive a contained version of their preliminary problem statement and must create a product within 72 hours.",
  },
  {
    date: new Date("2024-11-10"),
    title: "Online Hackathon Ends",
    description:
      "The 72-hour online Hackathon comes to an end. Submissions must be made before the deadline.",
  },
  {
    date: new Date("2024-11-11"),
    title: "Final Round and Presentations",
    description:
      "On-campus final round for Hackathon, Debuggers, and Database Wizard. Teams will polish their products for Hackathon and present their solution to judges. For Debuggers and Database Wizards there will be a offline competition.",
  },
];

export const segments: ISegment[] = [
  {
    id: "pills-hackathon",
    imgSrc: hackathon,
    imgAlt: "Hackathon",
    description:
      "Immerse yourself in our hackathon where you will collaborate, innovate, and build exciting projects within a limited timeframe.",
  },
  {
    id: "pills-debuggers",
    imgSrc: debuggers,
    imgAlt: "Debuggers",
    description:
      "Engage in the art of debugging by participating in our challenge to find bugs in some codebases through reverse engineering.",
  },
  {
    id: "pills-database-wizards",
    imgSrc: databasewizard,
    imgAlt: "Database Wizards",
    description:
      " Join our Database Wizards team contest! Gather your team of two members and compete to showcase your skills.",
  },
  // {
  //   id: "pills-cpc",
  //   imgSrc: cpc,
  //   imgAlt: "Networking",
  //   description:
  //     "Get ready to sharpen your coding skills and compete against op programmers in our Competitive Programming contest.",
  // },
];

export const tabItems: ITabItem[] = [
  {
    label: "Hackathon",
    id: "pills-hackathon",
    selected: true,
    onClick: () => {},
  },
  {
    label: "Debuggers",
    id: "pills-debuggers",
    selected: false,
    onClick: () => {},
  },
  {
    label: "Database Wizards",
    id: "pills-database-wizards",
    selected: false,
    onClick: () => {},
  },
  // {
  //   label: "Competitive Programming",
  //   id: "pills-cpc",
  //   selected: false,
  // },
];

export const tabContents: ITabContent[] = [
  {
    id: "pills-hackathon",
    content: HackathonGuideline,
    selected: true,
  },
  {
    id: "pills-debuggers",
    content: DebuggingGuideline,
    selected: false,
  },
  {
    id: "pills-database-wizards",
    content: DBWizardGuideline,
    selected: false,
  },
  // {
  //   id: "pills-cpc",
  //   content: CPCGuideline,
  //   selected: false,
  // },
];

export const resultTabContents: ITabContent[] = [
  {
    id: "pills-hackathon",
    content: HackathonResult,
    selected: true,
  },
  {
    id: "pills-debuggers",
    content: DebuggerResult,
    selected: false,
  },
  {
    id: "pills-database-wizards",
    content: DatabaseWizardResult,
    selected: false,
  },
  // {
  //   id: "pills-cpc",
  //   content: CPCGuideline,
  //   selected: false,
  // },
];

export const importantDates: IImportantDate[] = [
  {
    label: "Registration begins",
    date: new Date("2024-10-24"),
    description: "Starting point for the event registration process.",
  },
  {
    label: "Debuggers & Database Wizard Registration Deadline",
    date: new Date("2024-10-28"),
    description: "Deadline for Debuggers and Database Wizard registration.",
  },
  {
    label: "Hackathon Registration Deadline",
    date: new Date("2024-10-31"),
    description:
      "Deadline for registration along with submitting high-level solutions and video presentations for the Hackathon.",
  },
  {
    label: "Online preliminary rounds for Debuggers & Database Wizard",
    date: new Date("2024-11-03"),
    description:
      "Online preliminary rounds to select participants for the final rounds of Debuggers and Database Wizard.",
  },
  {
    label: "Online Hackathon",
    date: [new Date("2024-11-08"), new Date("2024-11-10")],
    description:
      "72-hour online hackathon where participants will create a product based on a problem statement.",
  },
  {
    label: "Onsite final rounds",
    date: new Date("2024-11-11"),
    description:
      "Final round held on campus for Hackathon, Debuggers, and Database Wizard participants.",
  },
  {
    label: "Final Presentations & Prize-giving ceremony",
    date: new Date("2024-11-11"),
    description:
      "Final presentations and prize-giving ceremony for Hackathon, Debuggers, and Database Wizard competitions.",
  },
];
