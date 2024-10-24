"use client";

import { useEffect, useState } from "react";

interface Member {
  name: string;
  gSuite: string;
  phone: string;
  bracuID: string;
  level: "Senior" | "Junior";
}

interface Team {
  _id: string; // Assuming _id is a string
  teamName: string;
  projectPlan: string;
  category: "Hackathon" | "Debuggers" | "Database Wizards" | "CPC";
  members: Member[];
}

const TeamTable = () => {
  const [teams, setTeams] = useState<Team[]>([]); // Use the Team type
  const [error, setError] = useState<string | null>(null); // Use string | null for error state

  useEffect(() => {
    const fetchTeams = async (password: string) => {
      try {
        const response = await fetch(`api/registered?password=${password}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeams(
          data.hackathonTeams.concat(
            data.debuggerTeams,
            data.databaseWizardsTeams
          )
        );
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    const password = prompt("Please enter the admin password:");
    if (password) {
      fetchTeams(password);
    } else {
      setError("Password is required to access this data.");
    }
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Count total teams in each category
  const categoryCounts = teams.reduce(
    (acc, team) => {
      acc[team.category] = (acc[team.category] || 0) + 1;
      return acc;
    },
    {
      Hackathon: 0,
      Debuggers: 0,
      "Database Wizards": 0,
    }
  );

  return (
    <div className="w-full">
      {/* Display category counts */}
      <div className="m-4 p-4 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
        <h2 className="text-lg font-bold">Total Count by Category:</h2>
        <div className="flex w-full justify-between mt-2">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div
              key={category}
              className="w-96 text-center bg-gray-200 rounded-lg p-10"
            >
              <span className="font-semibold">{category}:</span> {count}
            </div>
          ))}
        </div>
      </div>

      <table className="font-semibold table-fixed text-black border-2 border-slate-600 w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 text-left">Team Name</th>
            <th className="p-3 text-left">Project Plan</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td className="border-b border-gray-200 p-3">
                {team.teamName || "No Team Name"}
              </td>
              <td className="border-b border-gray-200 p-3">
                {team.projectPlan || "No Project Plan for This Category"}
              </td>
              <td className="border-b border-gray-200 p-3">{team.category}</td>
              <td className="border-b border-gray-200 p-3">
                <ul className="list-disc pl-5">
                  {team.members.length > 0 ? (
                    team.members.map((member) => (
                      <li key={member.bracuID}>
                        {member.name} ({member.bracuID})
                      </li>
                    ))
                  ) : (
                    <li>No Members</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
