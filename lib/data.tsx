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

export const onlinePreliminaryEvents: IOnlinePreliminaryEvents[] = [
  {
    date: new Date("2024-04-10"),
    title: "Registration Opens",
    description:
      "Registration for IntraHacktive 1.0 begins. Participants can register online through the website.",
  },
  {
    date: new Date("2024-04-11"),
    title: "Online Coding Challenge",
    description:
      "Participate in our online coding challenge to test your problem-solving skills.",
  },
];

export const finalRoundEvents: IFinalRoundEvents[] = [
  {
    date: new Date("2024-04-12"),
    title: "Hackathon",
    description:
      "RJoin the thrilling hackathon where participants will collaborate, innovate, and build exciting projects within a limited timeframe.",
  },
  {
    date: new Date("2024-04-13"),
    title: "Final Presentations",
    description:
      "Finalists will present their projects to a panel of judges. Winners will be announced at the end of the event.",
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

export const importantDates: IImportantDate[] = [
  {
    label: "Registration begins",
    date: new Date("2024-04-15"),
    description: "Starting point for the event registration process.",
  },
  {
    label: "Registration closes",
    date: new Date("2024-04-19"),
    description: "Deadline for completing the event registration.",
  },
  {
    label: "Online preliminary rounds",
    date: [new Date("2024-04-20"), new Date("2024-04-23")],
    description: "Online rounds to select participants for the final rounds.",
  },
  {
    label: "Onsite final rounds",
    date: [new Date("2024-05-26"), new Date("2024-05-30")],
    description: "Final competition rounds conducted on-site.",
  },
  {
    label: "Prize-giving ceremony",
    date: [new Date("2024-05-26"), new Date("2024-05-30")],
    description: "Announcement of winners and distribution of prizes.",
  },
];
