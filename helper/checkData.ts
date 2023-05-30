// import { google } from "googleapis";
import { sheetToJson } from "./sheetToJson";

export const __checkData = async (msg: string) => {
  const fetchData = async () => {
    let sheetId = "1Ek12yD5BCpCV-duNTuTz344U2GN3Tl9nvxAdZVra6yo";
    let sheetName = "shan-tts-data";
    let gid = "0";

    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}&gid=${gid}&tq=SELECT+A%2CB+where+A+contains+%27${msg}%27`;
    const e = await fetch(url);
    const res: any = await e.text();

    return res;
  };

  const _data: any = await fetchData();
  const res__ = sheetToJson(_data);

  return res__;
};

// export const handleAddSheet = async ({ msg, audio }: any) => {
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.CLIENT_EMAIL,
//       client_id: process.env.CLIENT_ID,
//       // @ts-ignore
//       private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
//     },
//     scopes: [
//       "https://www.googleapis.com/auth/drive",
//       "https://www.googleapis.com/auth/drive.file",
//       "https://www.googleapis.com/auth/spreadsheets",
//     ],
//   });

//   const sheets = google.sheets({
//     auth,
//     version: "v4",
//   });

//   const response = await sheets.spreadsheets.values.append({
//     spreadsheetId: process.env.DATABASE_ID,
//     range: "Sheet1!A2:C",
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//       values: [[msg, audio]],
//     },
//   });

//   console.log("her eis response:", response);
//   return response;
// };
