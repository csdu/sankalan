// write a next.js api route that reads a google sheet and returns the data as json

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


export default async function handler(req, res) {
  const registrationId = req.body.id;

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[1];
  const cellValues = await sheet.getCellsInRange('M2:M1000');

  const values = cellValues.map(cell => cell[0]);

  if (values.includes(registrationId)) {
    return res.status(400).json({ message: 'User already registered' });
  }

  return res.status(200).json({ message: 'User can register'});
}
