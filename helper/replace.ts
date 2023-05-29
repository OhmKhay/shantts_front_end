export const replaceWords = (word: string) => {
  let __msg1 = word?.replaceAll("ၾ", "ၽ");
  let __msg2 = __msg1?.replaceAll("ထၢမ်ႇမ", "ထၢမ်ႇမႃႉ");

  return __msg2;
};
