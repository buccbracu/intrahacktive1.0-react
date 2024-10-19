import { IImportantDate } from "@/lib/data.types";
import { parseDate } from "@/lib/utils";

type ImportantDateProps = IImportantDate;

export default function ImportantDate({
  label,
  date,
  description,
}: ImportantDateProps) {
  const parsedDate = parseDate(date);
  return (
    <li className="mb-6">
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
        <span className="font-semibold mr-2">{label}:</span>
        {Array.isArray(parsedDate)
          ? `${parsedDate[0].month} ${parsedDate[0].day}-${parsedDate[1].day}`
          : `${parsedDate.month} ${parsedDate.day}`}
      </div>
      <p className="text-gray-600">{description}</p>
    </li>
  );
}
