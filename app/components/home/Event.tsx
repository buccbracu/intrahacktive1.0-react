import { parseDate } from "@/lib/utils";

interface EventProps {
  index: number;
  date: Date;
  title: string;
  description: string;
  variant?: "preliminary" | "final";
}

export default function Event({
  variant = "preliminary",
  date,
  description,
  index,
  title,
}: EventProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <div
          className={`${variant}-round-circle rounded-full h-16 w-16 flex items-center justify-center text-white font-semibold`}
        >
          Day {index + 1}
        </div>
        <p className="text-lg ml-4">{parseDate(date)}</p>
      </div>
      <div className="ml-12">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
