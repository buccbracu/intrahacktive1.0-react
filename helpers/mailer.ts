import {
  cPCMail,
  databaseWizardsMail,
  debuggerMail,
  hackathonMail,
} from "@/helpers/mailTemplates";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const hackathonSuccessMail = async (
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  // projectName: string,
  projectPlan: string,
  mem1Name: string,
  mem1Email: string,
  mem2Name: string,
  mem2Email: string
) => {
  try {
    const mailOptions = {
      from: "bucc@g.bracu.ac.bd",
      to: gSuite.toString(),
      subject: "Registration Successful - IntraHacktive 1.0",
      html: hackathonMail(
        name,
        gSuite,
        category,
        teamName,
        // projectName,
        projectPlan,
        mem1Name,
        mem1Email,
        mem2Name,
        mem2Email
      ),
    };
    await transporter.sendMail(mailOptions);

    return "Mail sent successfully";
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending mail:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
const debuggerSuccessMail = async (
  name: string,
  gSuite: string,
  category: string
) => {
  try {
    const mailOptions = {
      from: "bucc@g.bracu.ac.bd",
      to: gSuite.toString(),
      subject: "Registration Successful - IntraHacktive 1.0",
      html: debuggerMail(name, gSuite, category),
    };
    await transporter.sendMail(mailOptions);

    return "Mail sent successfully";
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending mail:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

const databaseWizardsSuccessMail = async (
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  mem1Name: string,
  mem1Email: string
) => {
  try {
    const mailOptions = {
      from: "bucc@g.bracu.ac.bd",
      to: gSuite.toString(),
      subject: "Registration Successful - IntraHacktive 1.0",
      html: databaseWizardsMail(
        name,
        gSuite,
        category,
        teamName,
        mem1Name,
        mem1Email
      ),
    };
    await transporter.sendMail(mailOptions);

    return "Mail sent successfully";
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending mail:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
const cPCSuccessMail = async (
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  mem1Name: string,
  mem1Email: string,
  mem2Name: string,
  mem2Email: string
) => {
  try {
    const mailOptions = {
      from: "bucc@g.bracu.ac.bd",
      to: gSuite.toString(),
      subject: "Registration Successful - IntraHacktive 1.0",
      html: cPCMail(
        name,
        gSuite,
        category,
        teamName,
        mem1Name,
        mem1Email,
        mem2Name,
        mem2Email
      ),
    };
    await transporter.sendMail(mailOptions);

    return "Mail sent successfully";
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending mail:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

export {
  cPCSuccessMail,
  databaseWizardsSuccessMail,
  debuggerSuccessMail,
  hackathonSuccessMail,
};
