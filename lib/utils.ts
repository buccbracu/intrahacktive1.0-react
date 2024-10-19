type ParsedDate = { year: number; month: string; day: number };

export const parseDate = (
  dateObj: Date | Date[]
): ParsedDate | ParsedDate[] => {
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
    return [
      {
        year: dateObj[0].getFullYear(),
        month: months[dateObj[0].getMonth()],
        day: dateObj[0].getDate(),
      },
      {
        year: dateObj[1].getFullYear(),
        month: months[dateObj[1].getMonth()],
        day: dateObj[1].getDate(),
      },
    ];
  }

  return {
    year: dateObj.getFullYear(),
    month: months[dateObj.getMonth()],
    day: dateObj.getDate(),
  };
};
