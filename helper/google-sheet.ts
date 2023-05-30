import { GoogleSpreadsheet } from "google-spreadsheet";
import dotenv from "dotenv";
dotenv.config();

const doc = new GoogleSpreadsheet(
  "1Ek12yD5BCpCV-duNTuTz344U2GN3Tl9nvxAdZVra6yo"
);

export async function useGoogleSheets() {
  await doc.useServiceAccountAuth({
    client_email: "haohaa.info@gmail.com",
    private_key: "AIzaSyDnMJNshYfjoSz8ZGCEcYUmsZ95M4JJt_I".replace(
      /\\n/g,
      "\n"
    ),
  });

  await doc.loadInfo();

  return doc;
}
