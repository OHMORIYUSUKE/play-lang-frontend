import { atom } from "recoil";

export const runCodeStatusState = atom({
  key: "runCodeStatus",
  default: {
    // コードの実行結果
    err: "",
    out: "",
  },
});
