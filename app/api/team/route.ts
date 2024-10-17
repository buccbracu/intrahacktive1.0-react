import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Team from "@/models/team";

const permittedCategories = [
  "Hackathon",
  "Debuggers",
  "Database Wizards",
  "CPC",
];

export async function GET(request: NextRequest) {
  await dbConnect(); // Ensure database connection

  const url = new URL(request.url);
  const teamID = url.searchParams.get("id"); // Check if a team ID is provided

  try {
    if (teamID) {
      const team = await Team.findById(teamID);

      if (!team) {
        return NextResponse.json(
          { message: "Team not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ team }, { status: 200 });
    }

    const teams = await Team.find({});
    return NextResponse.json({ teams }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while fetching teams." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();

    if (!body.members || body.members.length < 1 || body.members.length > 3) {
      return NextResponse.json(
        {
          message: "A team must have at least 1 and no more than 3 members.",
        },
        { status: 400 }
      );
    }

    if (!permittedCategories.includes(body.category)) {
      return NextResponse.json(
        {
          message: "Invalid category. Choose a valid category.",
        },
        { status: 400 }
      );
    }

    const newTeam = await Team.create(body);

    return NextResponse.json(
      { message: "Team created successfully", newTeam },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "An error occurred while creating the team.",
      },
      { status: 500 }
    );
  }
}
