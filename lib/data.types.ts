import { StaticImageData } from "next/image";

export interface IOnlinePreliminaryEvents {
  date: Date;
  title: string;
  description: string;
}

export interface IFinalRoundEvents {
  date: Date;
  title: string;
  description: string;
}

export interface ISegment {
  id: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  description: string;
}

export interface ITabItem {
  label: string;
  id: string;
  selected: boolean;
  onClick: () => void;
}

export interface ITabContent {
  id: string;
  selected: boolean;
  content: () => JSX.Element;
}

export interface IImportantDate {
  label: string;
  date: Date | Date[];
  description: string;
}
