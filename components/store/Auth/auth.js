import { atom } from "recoil";

export const authState = atom({
  key: "user",
  default: {
    // DB情報
    id: "",
    name: "",
    picrure: "",
    created_at: "",
    // 認証情報
    Token: "",
    login_time: "",
    refreshToken: "",
  },
});
/*
id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  picture text NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
*/
