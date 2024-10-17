import Image from "next/image";
import Logo from "@/app/img/logo/bucc-logo-full.svg";
import Link from "next/link";
import hackathon from "@/app/img/segments/hackathon.jpg";
import debuggers from "@/app/img/segments/debuggers.jpg";
import databasewizard from "@/app/img/segments/database-wizard.jpg";
import cpc from "@/app/img/segments/cpc.jpg";
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
                {/* <!-- Day 1 --> */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="preliminary-round-circle rounded-full h-16 w-16 flex items-center justify-center text-white font-semibold">
                      Day 1
                    </div>
                    <p className="text-lg ml-4">April 10, 2024</p>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-semibold mb-2">
                      Registration Opens
                    </h4>
                    <p className="text-gray-700">
                      Registration for IntraHacktive 1.0 begins. Participants
                      can register online through the website.
                    </p>
                  </div>
                </div>
                {/* <!-- Day 2 --> */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="preliminary-round-circle rounded-full h-16 w-16 flex items-center justify-center text-white font-semibold">
                      Day 2
                    </div>
                    <p className="text-lg ml-4">April 11, 2024</p>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-semibold mb-2">
                      Online Coding Challenge
                    </h4>
                    <p className="text-gray-700">
                      Participate in our online coding challenge to test your
                      problem-solving skills.
                    </p>
                  </div>
                </div>
                {/* <!-- Add more preliminary events if needed --> */}
              </div>
            </div>
            {/* <!-- Final Round Events --> */}
            <div className="md:w-1/2">
              <div>
                <h3 className="text-2xl font-semibold mb-4 secondary-color">
                  Final Round Events
                </h3>
                {/* <!-- Day 3 --> */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="final-round-circle rounded-full h-16 w-16 flex items-center justify-center text-white font-semibold">
                      Day 3
                    </div>
                    <p className="text-lg ml-4">April 12, 2024</p>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-semibold mb-2">Hackathon</h4>
                    <p className="text-gray-700">
                      Join the thrilling hackathon where participants will
                      collaborate, innovate, and build exciting projects within
                      a limited timeframe.
                    </p>
                  </div>
                </div>
                {/* <!-- Day 4 --> */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="final-round-circle rounded-full h-16 w-16 flex items-center justify-center text-white font-semibold">
                      Day 4
                    </div>
                    <p className="text-lg ml-4">April 13, 2024</p>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-xl font-semibold mb-2">
                      Final Presentations
                    </h4>
                    <p className="text-gray-700">
                      Finalists will present their projects to a panel of
                      judges. Winners will be announced at the end of the event.
                    </p>
                  </div>
                </div>
                {/* <!-- Add more final round events if needed --> */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* <!-- Segment 1 --> */}
            <div className="bg-white rounded-lg shadow-md p-3 flex flex-col justify-between h-full">
              <div>
                <Image
                  src={hackathon}
                  alt="Hackathon"
                  className="mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4">
                  Immerse yourself in our hackathon where you will collaborate,
                  innovate, and build exciting projects within a limited
                  timeframe.
                </p>
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
            {/* <!-- Segment 2 --> */}
            <div className="bg-white rounded-lg shadow-md p-3 flex flex-col justify-between h-full">
              <div>
                <Image
                  src={debuggers}
                  alt="Debuggers"
                  className="mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4">
                  Engage in the art of debugging by participating in our
                  challenge to find bugs in some codebases through reverse
                  engineering.
                </p>
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
            {/* <!-- Segment 3 --> */}
            <div className="bg-white rounded-lg shadow-md p-3 flex flex-col justify-between h-full">
              <div>
                <Image
                  src={databasewizard}
                  alt="Database Wizards"
                  className="mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4">
                  Join our Database Wizards team contest! Gather your team of
                  two members and compete to showcase your skills.
                </p>
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
            {/* <!-- Segment 4 --> */}
            <div className="bg-white rounded-lg shadow-md p-3 flex flex-col justify-between h-full">
              <div>
                <Image src={cpc} alt="Networking" className="mb-4 rounded-md" />
                <p className="text-gray-700 mb-4">
                  Get ready to sharpen your coding skills and compete against
                  top programmers in our Competitive Programming contest.
                </p>
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
