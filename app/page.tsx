import Logo from "@/app/img/logo/bucc-logo-full.svg";
import {
  finalRoundEvents,
  onlinePreliminaryEvents,
  segments,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Event from "./components/home/Event";
import Segment from "./components/home/Segment";
export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-blue-900 text-white py-16 hero-section flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ready to take on the challenge?
          </h1>
          <p className="text-lg mb-8">
            Join us at the BUCC IntraHacktive 1.0 for an exhilarating journey
            into innovation and collaboration!
          </p>
          <Link
            className="learn-more-btn text-decoration-none"
            href="#event-details"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* <!-- Event Details --> */}
      <section className="py-16" id="event-details">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center primary-color">
            Event Details
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* <!-- Online Preliminary Events --> */}
            <div className="md:w-1/2">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 secondary-color">
                  Online Preliminary Events
                </h3>
                {/* <!-- Online Preliminary Events --> */}
                {onlinePreliminaryEvents.map((e, i) => (
                  <Event
                    date={e.date}
                    description={e.description}
                    index={i}
                    title={e.title}
                    key={i}
                  />
                ))}
              </div>
            </div>
            {/* <!-- Final Round Events --> */}
            <div className="md:w-1/2">
              <div>
                <h3 className="text-2xl font-semibold mb-4 secondary-color">
                  Final Round Events
                </h3>
                {/* <!-- Final Round Events --> */}
                {finalRoundEvents.map((e, i) => (
                  <Event
                    date={e.date}
                    description={e.description}
                    index={i + 2}
                    title={e.title}
                    key={i}
                    variant="final"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Segments --> */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center primary-color">
            Segments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* <!-- Segments --> */}
            {segments.map((segment, i) => (
              <Segment
                key={i}
                id={segment.id}
                description={segment.description}
                imgAlt={segment.imgAlt}
                imgSrc={segment.imgSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/*  <!-- Organized by BUCC --> */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center primary-color">
            Organized by BUCC
          </h2>
          <div className="flex flex-col md:flex-row justify-center">
            {/* <!-- Logo --> */}
            <div className="flex justify-center h-full">
              <Image
                src={Logo}
                alt="BUCC"
                className="mb-4 md:mb-0 rounded-md w-60 md:mr-8 mx-auto"
              />
            </div>

            {/* <!-- Divider --> */}
            <hr className="hidden md:block border-t border-gray-300 my-0 mx-8 md:h-12 md:w-0" />
            <hr className="block md:hidden border-t border-gray-300 my-8 w-full" />
            {/* <!-- Contact Details --> */}
            <div className="text-gray-700 text-center md:text-left md:text-left md:w-auto">
              {/* <!-- For large screens, text alignment to the left --> */}
              <p className="md:text-left">Contact Number: +8801717399105</p>
              <p className="md:text-left">
                Email: marketing.bucc@g.bracu.ac.bd
              </p>
              <p className="md:text-left">
                Website:{" "}
                <Link
                  className="text-gray-700 text-decoration-none"
                  href="https://bracucc.org"
                >
                  www.bracucc.org
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
