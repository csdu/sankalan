// write a next.js api route that reads a google sheet and returns the data as json
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const base64EncodedServiceAccount = process.env.BASE64_ENCODED_SERVICE_ACCOUNT;
const decodedServiceAccount = Buffer.from(base64EncodedServiceAccount, 'base64').toString('utf-8');
const credentials = JSON.parse(decodedServiceAccount);

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: credentials.private_key,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const {
      email, 
      fullName,
      mobileNumber,
      course,
      year,
      collegeName,
      university,
      event,
      referral,
      medium,
      participantId,
      registrationId
    } = req.body;

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];
    
    const payload = {
      timestamp: new Date().toISOString(),
      email: session.user.email, 
      fullName,
      mobileNumber,
      course,
      year,
      collegeName,
      university,
      event,
      referral,
      medium,
      participantId,
      registrationId
    };

    console.log('payload', payload);

    const result = await sheet.addRow(Object.values(payload));

    console.log('result', result);

    res.status(200).send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.status(403).send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}


