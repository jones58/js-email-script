require("dotenv").config();
const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

function sendEmail() {
  return client
    .sendEmail({
      From: process.env.SENDEREMAIL,
      To: process.env.RECEIVEREMAIL,
      Subject: "Choose Love Report Submission",
      TextBody: "New report submitted.",
    })
    .then((response) => {
      console.log("Email sent successfully", response.messageID);
    })
    .catch((error) => {
      console.error("Email not sent", error.message);
    });
}

// Call the function to send the email
sendEmail();
