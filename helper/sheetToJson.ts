const getKey = (num: number) => {
  switch (num) {
    case 0:
      return "msg";
    case 1:
      return "audio";
  }
};

export const sheetToJson = (csv_string: string) => {
  const obj: any = {};
  let rows = csv_string.replace(/"/g, "")?.split("\n");
  let headers = rows[0].split(",");

  headers.forEach((element, index) => {
    obj[`${getKey(index)}`] = element;
  });

  return obj;
};
