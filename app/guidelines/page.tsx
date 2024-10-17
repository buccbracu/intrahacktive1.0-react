export default function Guidelines() {
  return (
    <>
      <div className="main-container mb-8">
        {/* <!-- Guidelines Content --> */}
        <div className="container mt-5">
          <div className="tab-content">
            <ul
              className="nav nav-pills flex justify-center mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active rounded-t-lg"
                  id="pills-hackathon-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hackathon"
                  type="button"
                  role="tab"
                  aria-controls="pills-hackathon"
                  aria-selected="true"
                >
                  Hackathon
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link border-t border-r border-l border-gray-300 rounded-t-lg"
                  id="pills-debuggers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-debuggers"
                  type="button"
                  role="tab"
                  aria-controls="pills-debuggers"
                  aria-selected="false"
                >
                  Debuggers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link border-t border-r border-l border-gray-300 rounded-t-lg"
                  id="pills-database-wizards-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-database-wizards"
                  type="button"
                  role="tab"
                  aria-controls="pills-database-wizards"
                  aria-selected="false"
                >
                  Database Wizards
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link border-t border-r border-l border-gray-300 rounded-t-lg"
                  id="pills-cpc-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-cpc"
                  type="button"
                  role="tab"
                  aria-controls="pills-cpc"
                  aria-selected="false"
                >
                  Competitive Programming
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-hackathon"
                role="tabpanel"
                aria-labelledby="pills-hackathon-tab"
              >
                {/* <!-- Hackathon Guidelines Content --> */}
                <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
                  Hackathon Guidelines
                </h2>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    <strong>Objective:</strong> The Hackathon segment of
                    IntraHacktive 1.0 aims to challenge participants to showcase
                    their problem-solving skills, creativity, and coding
                    proficiency within a limited timeframe.
                  </li>
                  <li className="mb-4">
                    <strong>Duration:</strong> 72 hours (Online)
                  </li>
                  <li className="mb-4">
                    <strong>Teams:</strong> Participants have to form a team
                    with 3 members.
                  </li>
                  <li className="mb-4">
                    <strong>Language and Tools:</strong> Participants are free
                    to use any programming language, development framework, or
                    tools of their choice.
                  </li>
                  <li className="mb-4">
                    <strong>Challenge:</strong>
                    <ul className="list-disc pl-8">
                      <li className="mb-4">
                        <strong>Online Preliminary:</strong> Registration with
                        idea submission. During the registration process,
                        participants are required to thoroughly document their
                        project ideas before submission. Based on the
                        documentation, finalists will be selected for the final
                        round.
                      </li>
                      <li className="mb-4">
                        <strong>Onsite Final Round:</strong> Finalists will
                        pitch their ideas and present their projects.
                        Presentations will be judged based on creativity,
                        innovation, technical complexity, and feasibility. The
                        top 3 teams based on presentation will be declared
                        winners.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    <strong>Submission:</strong> Participants must submit their
                    projects or solutions along with comprehensive documentation
                    detailing their approach, implementation details, and any
                    additional functionalities they have incorporated.
                  </li>
                  <li className="mb-4">
                    <strong>Evaluation:</strong> Projects will be evaluated
                    based on creativity, functionality, technical complexity,
                    scalability, and overall implementation quality.
                  </li>
                  <li className="mb-4">
                    <strong>Prizes:</strong> Prizes will be awarded to the
                    top-performing 3 teams based on the evaluation criteria.
                  </li>
                  <li className="mb-4">
                    <strong>Code of Conduct:</strong> Participants are expected
                    to maintain integrity, professionalism, and ethical
                    standards throughout the Hackathon. Plagiarism or any form
                    of academic dishonesty will result in disqualification.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="pills-debuggers"
                role="tabpanel"
                aria-labelledby="pills-debuggers-tab"
              >
                {/* <!-- Debuggers Guidelines Content --> */}
                <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
                  Debuggers Guidelines
                </h2>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    <strong>Objective:</strong> The Debugging Competition
                    segment of IntraHacktive 1.0 aims to evaluate participants
                    &apos ability to identify and fix bugs in provided code
                    snippets.
                  </li>
                  <li className="mb-4">
                    <strong>Format:</strong> The competition will consist of
                    multiple rounds, including online selection rounds and
                    on-site finals.
                  </li>
                  <li className="mb-4">
                    <strong>Language:</strong> The competition will focus on
                    debugging Python code.
                  </li>
                  <li className="mb-4">
                    <strong>Challenge:</strong> Participants will be given code
                    snippets containing bugs, and they must debug the code to
                    produce the correct output.
                  </li>
                  <li className="mb-4">
                    <strong>Scoring:</strong> Participants will earn points
                    based on the number of bugs they successfully identify and
                    fix within a specified time limit.
                  </li>
                  <li className="mb-4">
                    <strong>Ranking:</strong> Participants will be ranked based
                    on their total score. In case of a tie, the participant with
                    a shorter debugging time will be ranked higher.
                  </li>
                  <li className="mb-4">
                    <strong>Finals:</strong> Top-performing participants from
                    the selection rounds will advance to the on-site finals,
                    where they will compete in a live debugging challenge.
                  </li>
                  <li className="mb-4">
                    <strong>Prizes:</strong> Prizes will be awarded to the 3
                    winners of the Debugging Competition based on their
                    performance in the finals.
                  </li>
                  <li className="mb-4">
                    <strong>Code of Conduct:</strong> Participants are expected
                    to maintain integrity and professionalism throughout the
                    competition. Any form of cheating, plagiarism, or unethical
                    behavior will result in immediate disqualification.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="pills-database-wizards"
                role="tabpanel"
                aria-labelledby="pills-database-wizards-tab"
              >
                {/* <!-- Database Wizards Guidelines Content --> */}
                <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
                  Database Wizards Guidelines
                </h2>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    <strong>Objective:</strong> The Database Design Competition
                    segment of IntraHacktive 1.0 aims to assess participants
                    proficiency in designing efficient and normalized database
                    schemas.
                  </li>
                  <li className="mb-4">
                    <strong>Format:</strong> The competition will consist of
                    multiple rounds, including online submission rounds and
                    on-site presentations.
                  </li>
                  <li className="mb-4">
                    <strong>Teams:</strong> Participants have to form a team
                    with 2 members.
                  </li>
                  <li className="mb-4">
                    <strong>Challenge:</strong> Participants will be presented
                    with a scenario or problem statement requiring the design of
                    a relational database schema.
                  </li>
                  <li className="mb-4">
                    <strong>Evaluation:</strong> Submissions will be evaluated
                    based on factors such as adherence to normalization
                    principles, efficiency, scalability, and data integrity.
                  </li>
                  <li className="mb-4">
                    <strong>Presentation:</strong> Top-performing participants
                    from the submission rounds will be invited to present their
                    database designs in front of a panel of judges during the
                    on-site finals.
                  </li>
                  <li className="mb-4">
                    <strong>Scoring:</strong> Judges will assess the
                    presentations based on clarity, coherence, logical
                    organization, and effectiveness in addressing the given
                    problem statement.
                  </li>
                  <li className="mb-4">
                    <strong>Prizes:</strong> Prizes will be awarded to the
                    winners of the Database Design Competition based on their
                    performance in the finals.
                  </li>
                  <li className="mb-4">
                    <strong>Code of Conduct:</strong> Participants are expected
                    to maintain professionalism and academic integrity
                    throughout the competition. Plagiarism or any form of
                    unethical behavior will result in disqualification.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="pills-cpc"
                role="tabpanel"
                aria-labelledby="pills-cpc-tab"
              >
                {/* <!-- Competitive Programming Guidelines Content --> */}
                <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
                  Competitive Programming Guidelines
                </h2>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    <strong>Objective:</strong> The CPC segment of IntraHacktive
                    1.0 aims to test participants&apos algorithmic and coding
                    skills through competitive programming challenges.
                  </li>
                  <li className="mb-4">
                    <strong>Format:</strong> The CPC will consist of multiple
                    rounds, including online selection rounds and on-site
                    finals.
                  </li>
                  <li className="mb-4">
                    <strong>Platform:</strong> The contest will be conducted on
                    a designated online coding platform and will be announced
                    soon.
                  </li>
                  <li className="mb-4">
                    <strong>Languages:</strong> Participants can code in any
                    programming language supported by the coding platform.
                  </li>
                  <li className="mb-4">
                    <strong>Teams:</strong> Participants have to form a team
                    with 3 members.
                  </li>
                  <li className="mb-4">
                    <strong>Challenge:</strong> Participants will be presented
                    with a series of algorithmic and data structure problems of
                    varying difficulty levels.
                  </li>
                  <li className="mb-4">
                    <strong>Scoring:</strong> Participants will earn points
                    based on the correctness and efficiency of their solutions,
                    following the ACM style of scoring. In this scoring system,
                    both time and correctness play a crucial role, and penalties
                    are applied for incorrect submissions and late submissions.
                  </li>
                  <li className="mb-4">
                    <strong>Ranking:</strong> Participants will be ranked based
                    on their total score. In case of a tie, the participant with
                    a shorter submission time will be ranked higher.
                  </li>
                  <li className="mb-4">
                    <strong>Finals:</strong> Top-performing participants from
                    the selection rounds will advance to the on-site finals,
                    where they will compete in a live coding environment.
                  </li>
                  <li className="mb-4">
                    <strong>Prizes:</strong> Prizes will be awarded to the top 3
                    winners of the CPC based on their performance in the finals.
                  </li>
                  <li className="mb-4">
                    <strong>Code of Conduct:</strong> Participants are expected
                    to adhere to the coding platform&aposs code of conduct and
                    guidelines. Any form of cheating, plagiarism, or unethical
                    behavior will result in immediate disqualification.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gray-100 shadow-md">
            <div className="py-6 px-4 important-dates flex flex-col items-center">
              <button
                className="btn btn-primary mb-4 text-md font-semibold w-full md:w-1/3 md:text-lg"
                data-bs-toggle="collapse"
                data-bs-target="#importantDatesCollapse"
                aria-expanded="false"
                aria-controls="importantDatesCollapse"
              >
                Important Dates
              </button>
              <div className="w-full">
                {/* <!-- Added a wrapper with width to control the collapse width --> */}
                <div
                  className="collapse px-8 mt-8 text-left"
                  id="importantDatesCollapse"
                >
                  <ul className="list-none pl-0">
                    <li className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
                        <span className="font-semibold mr-2">
                          Registration begins:
                        </span>
                        April 15
                      </div>
                      <p className="text-gray-600">
                        Starting point for the event registration process.
                      </p>
                    </li>
                    <li className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
                        <span className="font-semibold mr-2">
                          Registration closes:
                        </span>
                        April 19
                      </div>
                      <p className="text-gray-600">
                        Deadline for completing the event registration.
                      </p>
                    </li>
                    <li className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
                        <span className="font-semibold mr-2">
                          Online preliminary rounds:
                        </span>
                        April 20-23
                      </div>
                      <p className="text-gray-600">
                        Online rounds to select participants for the final
                        rounds.
                      </p>
                    </li>
                    <li className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
                        <span className="font-semibold mr-2">
                          Onsite final rounds:
                        </span>
                        May 26-30
                      </div>
                      <p className="text-gray-600">
                        Final competition rounds conducted on-site.
                      </p>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <div className="w-4 h-4 round-circle rounded-full flex-shrink-0 mr-2"></div>
                        <span className="font-semibold mr-2">
                          Prize-giving ceremony:
                        </span>
                        May 26-30
                      </div>
                      <p className="text-gray-600">
                        Announcement of winners and distribution of prizes.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="primary-bg-color px-4 py-3 rounded-md rounded-t-none">
              <p className="text-sm text-white">
                <strong>Note:</strong> Payment will be required upon final
                selection. Registration fee details will be announced soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
