import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ParsedDate = { year: number; month: string; day: number };

// Helper type to infer return type based on the input
export const parseDate = <T extends Date | Date[]>(
  dateObj: T
): T extends Date ? ParsedDate : ParsedDate[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (Array.isArray(dateObj)) {
    return dateObj.map((date) => ({
      year: date.getFullYear(),
      month: months[date.getMonth()],
      day: date.getDate(),
    })) as T extends Date ? ParsedDate : ParsedDate[];
  }

  return {
    year: dateObj.getFullYear(),
    month: months[dateObj.getMonth()],
    day: dateObj.getDate(),
  } as T extends Date ? ParsedDate : ParsedDate[];
};
