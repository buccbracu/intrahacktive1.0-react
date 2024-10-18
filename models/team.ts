import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gSuite: {
    type: String,
    required: true,
    match: /@g\.bracu\.ac\.bd$/,
  },
  phone: {
    type: String,
    required: true,
  },
  bracuID: {
    type: String,
    required: true,
    match: /^[0-9]{8}$/,
  },
  level: {
    type: String,
    enum: ["Senior", "Junior"],
    required: true,
  },
});

type MemberType = Document & {
  name: string;
  gSuite: string;
  phone: string;
  bracuID: string;
  level: "Senior" | "Junior";
};

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
  projectName: {
    type: String,
  },
  projectPlan: {
    type: String,
  },
  members: {
    type: [memberSchema],
    required: true,
    validate: {
      validator: function (v: MemberType[]) {
        return v.length >= 1 && v.length <= 3;
      },
      message: (props: { value: MemberType[] }) =>
        `A team must have at least 1 and no more than 3 members! Current count: ${props.value.length}`,
    },
  },
  category: {
    type: String,
    enum: ["Hackathon", "Debuggers", "Database Wizards", "CPC"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
