export default function DebuggingGuideline() {
  return (
    <>
      <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
        Debuggers Guidelines
      </h2>
      <ul className="list-disc pl-8">
        <li className="mb-4">
          <strong className="primary-color">Objective:</strong> The Debugging
          Competition segment of IntraHacktive 1.0 aims to evaluate
          participants&apos; ability to identify and fix bugs in provided code
          snippets.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Who Can Participate:</strong> The
          event is open for every current BRACU students except for
          IntraHacktive Volunteers. Anyone from BRAC University and the BRAC
          University Computer Club can participate, except for volunteers
          working on IntraHacktive 1.0.
          <br />
          <br />
          {/* <i> */}
          The segment Debuggers is aim to challenge the debugging skill of young
          programmers. So, please note that this segment is only for those who
          are{" "}
          <b className="primary-color">
            currently doing OR done with CSE110, CSE111, CSE220 & CSE221 AND not
            yet completed CSE370.
            {/* </i> */}
          </b>
        </li>
        <li className="mb-4">
          <strong className="primary-color">Format:</strong> The competition
          will consist of two rounds:
          <ul className="list-disc pl-8">
            <li className="mb-4">
              <strong className="primary-color">Online Round:</strong>{" "}
              Participants will compete in an online proctored coding challenge.
              This will be to test the basics of the participants. Based on
              their performance, top participants will qualify for the final
              round.
            </li>
            <li className="mb-4">
              <strong className="primary-color">Onsite Final Round:</strong>{" "}
              Finalists will compete in a live debugging challenge held on
              campus, where they will be given more complex code snippets to
              debug. The questions will have many bugs like logical errors,
              syntax errors, etc. The participants have to find and fix them
              within a limited time.
            </li>
          </ul>
        </li>
        <li className="mb-4">
          <strong className="primary-color">Proctored Guidelines:</strong> The
          online round will be proctored to ensure fairness and integrity.
          Participants must follow the proctoring guidelines provided during the
          competition. Participants must take the exam using a laptop or{" "}
          <b className="primary-color">PC equipped with a webcam</b>. The exam
          will be auto-proctored, so participants needs to ensure that their
          setup is ready before the exam starts.
          <br /> During the test,{" "}
          <b className="primary-color">
            switching tabs is strictly prohibited
          </b>{" "}
          and will result in disqualification. Our proctoring software will
          monitor all activities and detect any attempts to switch tabs or leave
          the exam window.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Fees:</strong> There is a
          registration fee of <b className="primary-color">100 BDT</b> per
          participants. No fees are required for the online preliminary round.
          But upon selection for the final round participants will have to pay
          the registration fee. The fee must be paid before the deadline to
          confirm participation. If selected participants do not complete the
          payment by the deadline, participants from the waiting list will be
          invited to fill the available spots.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Languages:</strong> Participants can
          choose to debug code written in either Python or Java, providing
          flexibility to work in their preferred language. The code snippets
          will be provided in the two languages.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Challenge:</strong> Participants
          will be given code snippets containing bugs, and they must debug the
          code to produce the correct output within a specified time limit.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Scoring:</strong> Participants will
          earn points based on the number of bugs they successfully identify and
          fix. The more bugs they fix, the higher their score.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Ranking:</strong> Participants will
          be ranked based on their total score. In case of a tie, the
          participant who completes the challenge in a shorter time will be
          ranked higher.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Finals:</strong> Top-performing
          participants from the online round will advance to the onsite finals,
          where they will compete in a live debugging challenge.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Prizes:</strong> There is a prize
          money of <b className="primary-color">10000 BDT</b> for the Debuggers.
          Prizes will be awarded to the top 3 winners of the Debugging
          Competition based on their performance in the finals. The winning
          participants will receive awards and recognition during the
          prize-giving ceremony.
        </li>
        <li className="mb-4">
          <strong className="primary-color">Code of Conduct:</strong>{" "}
          Participants are expected to maintain integrity and professionalism
          throughout the competition. Any form of cheating, plagiarism, or
          unethical behavior will result in immediate disqualification.
        </li>
      </ul>
    </>
  );
}
