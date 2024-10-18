export const parseDate = (dateObj: Date): string => {
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
  const date = {
    year: dateObj.getFullYear(),
    month: months[dateObj.getMonth()],
    day: dateObj.getDate(),
  };

  return `${date.month} ${date.day}, ${date.year}`;
};
