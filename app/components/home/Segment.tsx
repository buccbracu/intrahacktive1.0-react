import { ISegment } from "@/lib/data.types";
import Image from "next/image";
import Link from "next/link";

interface SegmentProps extends ISegment {}

export default function Segment({ imgSrc, imgAlt, description }: SegmentProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 flex flex-col justify-between h-full">
      <div>
        <Image src={imgSrc} alt={imgAlt} className="mb-4 rounded-md" />
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-row items-center gap-8">
            <Link
              href="guidelines"
              className="text-decoration-none text-white py-2 px-3 rounded-md guidelines-btn"
            >
              Guidelines
            </Link>
            <Link
              href="registration"
              className="text-decoration-none text-white py-2 px-3 rounded-md register-btn"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
