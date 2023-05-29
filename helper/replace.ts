export const replaceWords = (word: string) => {
  let __msg1 = word?.replaceAll("ၾ", "ၽ");
  let __msg2 = __msg1?.replaceAll("ထမ်ႇမ", "ထမ်ႇမႃႉ");
  let __msg3 = __msg2?.replaceAll("ထမ်မ", "ထမ်ႇမႃ.");

  return __msg3;
};
