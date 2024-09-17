// Load environment variables from .env file
require("dotenv").config();

// Initialise Postmark client with API key
const postmark = require("postmark");
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

// Initialise Airtable connection
const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);

// Store the ID of the last seen record //
let lastRecordId = "";

// Function to check for new reports in Airtable
function checkNewReports() {
  // check for list of reports in Airtable, go over them with a forEach loop
  table.select({}).eachPage(function page(records) {
    records.forEach(function (record) {
      // if the record has not been seen before, send an email
      if (record.id !== lastRecordId) {
        sendEmail();
        lastRecordId = record.id;
      }
    });
  });
}

// Function to send email notification
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

// Initial check when the script starts
checkNewReports();
