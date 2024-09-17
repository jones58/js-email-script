const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

client.sendEmail({
  From: process.env.SENDEREMAIL,
  To: process.env.RECIEVEREMAIL,
  Subject: "Choose Love Report Submission",
  TextBody: "New report submitted.",
});
