// import { google } from "googleapis";
import { sheetToJson } from "./sheetToJson";

export const __checkData = async (msg: string) => {
  const fetchData = async () => {
    // https://docs.google.com/spreadsheets/d/1rNMxtsE-WTdeSYpKvp-C40baHKrJgSwgaVYU_G1Hq5I/edit#gid=0
    let sheetId = "1rNMxtsE-WTdeSYpKvp-C40baHKrJgSwgaVYU_G1Hq5I";
    let sheetName = "tts-data";
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
