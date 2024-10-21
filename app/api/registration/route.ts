import {
  cPCSuccessMail,
  databaseWizardsSuccessMail,
  debuggerSuccessMail,
  hackathonSuccessMail,
} from "@/helpers/mailer";
import dbConnect from "@/lib/dbConnect";
import Team from "@/models/team";
import { NextRequest, NextResponse } from "next/server";

const permittedCategories = [
  "Hackathon",
  "Debuggers",
  "Database Wizards",
  "CPC",
];

export async function GET(request: NextRequest) {
  await dbConnect();

  const url = new URL(request.url);
  const teamID = url.searchParams.get("id");

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
    if (body.category == "Hackathon") {
      await hackathonSuccessMail(
        body.members[0].name,
        body.members[0].gSuite,
        body.category,
        body.teamName,
        // body.projectName,
        body.projectPlan,
        body.members[1].name,
        body.members[1].gSuite,
        body.members[2].name,
        body.members[2].gSuite
      );
      await hackathonSuccessMail(
        body.members[1].name,
        body.members[1].gSuite,
        body.category,
        body.teamName,
        // body.projectName,
        body.projectPlan,
        body.members[0].name,
        body.members[0].gSuite,
        body.members[2].name,
        body.members[2].gSuite
      );
      await hackathonSuccessMail(
        body.members[2].name,
        body.members[2].gSuite,
        body.category,
        body.teamName,
        // body.projectName,
        body.projectPlan,
        body.members[0].name,
        body.members[0].gSuite,
        body.members[1].name,
        body.members[1].gSuite
      );
    }
    if (body.category == "Debuggers") {
      await debuggerSuccessMail(
        body.members[0].name,
        body.members[0].gSuite,
        body.category
      );
    }
    if (body.category == "Database Wizards") {
      await databaseWizardsSuccessMail(
        body.members[0].name,
        body.members[0].gSuite,
        body.category,
        body.teamName,
        body.members[1].name,
        body.members[1].gSuite
      );
      await databaseWizardsSuccessMail(
        body.members[1].name,
        body.members[1].gSuite,
        body.category,
        body.teamName,
        body.members[0].name,
        body.members[0].gSuite
      );
    }
    if (body.category == "CPC") {
      await cPCSuccessMail(
        body.members[0].name,
        body.members[0].gSuite,
        body.category,
        body.teamName,
        body.members[1].name,
        body.members[1].gSuite,
        body.members[2].name,
        body.members[2].gSuite
      );
      await cPCSuccessMail(
        body.members[1].name,
        body.members[1].gSuite,
        body.category,
        body.teamName,
        body.members[0].name,
        body.members[0].gSuite,
        body.members[2].name,
        body.members[2].gSuite
      );
      await cPCSuccessMail(
        body.members[2].name,
        body.members[2].gSuite,
        body.category,
        body.teamName,
        body.members[0].name,
        body.members[0].gSuite,
        body.members[1].name,
        body.members[1].gSuite
      );
    }

    return NextResponse.json(
      { message: "Registration Successful ", newTeam },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "An error occurred while registering the team.",
      },
      { status: 500 }
    );
  }
}
