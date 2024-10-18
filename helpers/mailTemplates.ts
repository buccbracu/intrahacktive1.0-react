function hackathonMail(
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  projectName: string,
  projectPlan: string,
  mem1Name: string,
  mem1Email: string,
  mem2Name: string,
  mem2Email: string
) {
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Hackathon Submission Confirmation</h2>
    <p>Dear ${name},</p>
    <p>Thank you for registering for the event <strong>${category}</strong>.</p>
    <p>Here are your submission details:</p>
    <ul>
      <li><strong>Team Name:</strong> ${teamName}</li>
      <li><strong>Project Name:</strong> ${projectName}</li>
      <li><strong>Project Plan:</strong> ${projectPlan}</li>
      <li><strong>Your Name:</strong> ${name}</li>
      <li><strong>Your Email:</strong> ${gSuite}</li>
      <li><strong>Team Member 1:</strong> ${mem1Name} (${mem1Email})</li>
      <li><strong>Team Member 2:</strong> ${mem2Name} (${mem2Email})</li>
    </ul>
    <p>We are excited to have you with us and wish you the best of luck with your project!</p>
    <p>If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
    <p>Best Regards,<br />IntraHacktive 1.0 Team</p>
  </div>`;
}
function debuggerMail(name: string, gSuite: string, category: string) {
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
  <h2>Welcome, ${name}!</h2>
  <p>Thank you for registering for the event <strong>${category}</strong>.</p>
  <p>We are excited to have you with us.</p>
  <ul>
    <li><strong>Category:</strong> ${category}</li>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Email:</strong> ${gSuite}</li>
  </ul>
  <p>If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
  <p>Best Regards,<br />IntraHacktive 1.0 Team</p>
</div>`;
}
function databaseWizardsMail(
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  mem1Name: string,
  mem1Email: string
) {
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Database Wizards Registration Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for registering for the <strong>${category}</strong> event.</p>
      <p>Here are your registration details:</p>
      <ul>
        <li><strong>Team Name:</strong> ${teamName}</li>
        <li><strong>Your Name:</strong> ${name}</li>
        <li><strong>Your Email:</strong> ${gSuite}</li>
        <li><strong>Team Member:</strong> ${mem1Name} (${mem1Email})</li>
      </ul>
      <p>We are excited to have you with us and look forward to your participation!</p>
      <p>If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
      <p>Best Regards,<br />Database Wizards Team</p>
    </div>`;
}
function cPCMail(
  name: string,
  gSuite: string,
  category: string,
  teamName: string,
  mem1Name: string,
  mem1Email: string,
  mem2Name: string,
  mem2Email: string
) {
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>CPC Registration Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for registering for the <strong>${category}</strong> event.</p>
      <p>Here are your registration details:</p>
      <ul>
        <li><strong>Team Name:</strong> ${teamName}</li>
        <li><strong>Your Name:</strong> ${name}</li>
        <li><strong>Your Email:</strong> ${gSuite}</li>
        <li><strong>Team Member 1:</strong> ${mem1Name} (${mem1Email})</li>
        <li><strong>Team Member 2:</strong> ${mem2Name} (${mem2Email})</li>
      </ul>
      <p>We are excited to have you with us and look forward to your participation!</p>
      <p>If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
      <p>Best Regards,<br />CPC Team</p>
    </div>`;
}

export { hackathonMail, debuggerMail, databaseWizardsMail, cPCMail };
