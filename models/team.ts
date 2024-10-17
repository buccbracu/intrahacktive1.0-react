import mongoose from "mongoose";

// Member Schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gSuite: {
    type: String,
    required: true,
    match: /@g\.bracu\.ac\.bd$/, // Ensure valid BRACU G-Suite email
  },
  phone: {
    type: String,
    required: true,
    match: /^\+8801[3-9][0-9]{8}$/, // Validate Bangladeshi phone number
  },
  bracuID: {
    type: String,
    required: true,
    match: /^[0-9]{8}$/, // Ensure valid BRACU ID format
  },
  level: {
    type: String,
    enum: ["Senior", "Junior"],
    required: true,
  },
});

// Define the TypeScript type for members array
type MemberType = Document & {
  name: string;
  gSuite: string;
  phone: string;
  bracuID: string;
  level: "Senior" | "Junior";
};

// Team Schema
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
        return v.length >= 1 && v.length <= 3; // Minimum 1 member, maximum 3 members
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
