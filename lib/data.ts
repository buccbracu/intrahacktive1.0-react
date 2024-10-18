import {
  IFinalRoundEvents,
  IOnlinePreliminaryEvents,
  ISegment,
} from "./data.types";
import hackathon from "@/app/img/segments/hackathon.jpg";
import debuggers from "@/app/img/segments/debuggers.jpg";
import databasewizard from "@/app/img/segments/database-wizard.jpg";
import cpc from "@/app/img/segments/cpc.jpg";

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
    imgSrc: hackathon,
    imgAlt: "Hackathon",
    description:
      "Immerse yourself in our hackathon where you will collaborate, innovate, and build exciting projects within a limited timeframe.",
  },
  {
    imgSrc: debuggers,
    imgAlt: "Debuggers",
    description:
      "Engage in the art of debugging by participating in our challenge to find bugs in some codebases through reverse engineering.",
  },
  {
    imgSrc: databasewizard,
    imgAlt: "Database Wizards",
    description:
      " Join our Database Wizards team contest! Gather your team of two members and compete to showcase your skills.",
  },
  {
    imgSrc: cpc,
    imgAlt: "Networking",
    description:
      "Get ready to sharpen your coding skills and compete against op programmers in our Competitive Programming contest.",
  },
];
