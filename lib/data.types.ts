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
  imgSrc: StaticImageData;
  imgAlt: string;
  description: string;
}
