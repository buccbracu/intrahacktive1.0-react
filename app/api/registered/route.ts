import dbConnect from "@/lib/dbConnect";
import Team from "@/models/team";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Connect to the database
  await dbConnect();

  // Extract the password from the query parameters
  const url = new URL(request.url);
  const password = url.searchParams.get("password");

  // Check if the user is an admin
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { message: "You are not authorized to access this route." },
      { status: 403 } // Set the 403 Forbidden status
    );
  }

  // Fetch all the registered teams
  const teams = await Team.find();

  // Filter the teams based on the categories
  const hackathonTeams = teams.filter((team) => team.category === "Hackathon");
  const debuggerTeams = teams.filter((team) => team.category === "Debuggers");
  const databaseWizardsTeams = teams.filter(
    (team) => team.category === "Database Wizards"
  );

  // Send the response
  return NextResponse.json({
    hackathonTeams,
    debuggerTeams,
    databaseWizardsTeams,
  });
}
