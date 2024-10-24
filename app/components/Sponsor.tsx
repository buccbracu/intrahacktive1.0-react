import BdAppsLogo from "@/app/img/sponsors/bdapps-logo.png";
import BuapsLogo from "@/app/img/sponsors/buaps-logo.png";
import ComputerManiaLogo from "@/app/img/sponsors/computer-mania-logo.png";
import DailySunLogo from "@/app/img/sponsors/daily-sun-logo.png";
import DataSolutionLogo from "@/app/img/sponsors/data-solution-360-logo.png";
import RadioLogo from "@/app/img/sponsors/radio-today-89-6-fm-logo.png";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    {
      imgSrc: ComputerManiaLogo,
      alt: "Computer Mania BD",
      label: "Presented By",
    },
    {
      imgSrc: BdAppsLogo,
      alt: "bdapps",
      label: "Powered By",
    },
    {
      imgSrc: DataSolutionLogo,
      alt: "Data Solution 360",
      label: "Supported By",
    },
    {
      imgSrc: DailySunLogo,
      alt: "The Daily Sun",
      label: "Print Media Partner",
    },
    {
      imgSrc: RadioLogo,
      alt: "The Radio",
      label: "Radio Partner",
    },
    {
      imgSrc: BuapsLogo,
      alt: "BUAPS",
      label: "Club Partner",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
        Our Sponsors and Partners
      </h2>

      {/* First Row: Presented By and Powered By */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 mb-8 text-center">
        {partners.slice(0, 2).map((partner, index) => (
          <div
            key={index}
            className="card shadow-md flex flex-col items-center p-4 bg-white rounded-lg hover:inset-y-1.5"
          >
            <Image
              src={partner.imgSrc}
              alt={partner.alt}
              className="w-auto h-16 object-contain"
            />
            <p className="mt-4 text-center text-lg font-medium">
              {partner.label}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row: Other Sponsors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 text-center ">
        {partners.slice(2).map((partner, index) => (
          <div
            key={index}
            className="card shadow-md flex flex-col items-center p-4 bg-white rounded-lg hover:inset-y-1.5"
          >
            <Image
              src={partner.imgSrc}
              alt={partner.alt}
              className="w-auto h-16 object-contain"
            />
            <p className="mt-4 text-center text-lg font-medium">
              {partner.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}