# Airtable JavaScript Email Script

This project contains a JavaScript module that sends an email notification when a new report is submitted in the Choose Love Airtable base.

The `sendemail.js` script uses the Postmark API to send an email notification. It's designed to be triggered when a new row is added to the "Reports" table.

## How to test:

1. Install dependencies with `npm install`

2. Add a .env file with the following variables:

   - POSTMARK_API_KEY
   - AIRTABLE_API_KEY
   - SENDEREMAIL
   - RECEIVEREMAIL
   - AIRTABLE_BASE_ID
   - AIRTABLE_TABLE_NAME

3. Run the script with `node sendemail.js`

## Credit

This project was developed by Jack Kershaw, as a take home project for an application at [Choose Love](https://chooselove.org/).
