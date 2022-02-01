import { atom } from "recoil";

export const codeState = atom({
  key: "code",
  default: {
    id: null,
    user_id: "",
    title: "",
    code_text: "",
    input_text: "",
    created_at: "",
  },
});

/*
  id serial,
  user_id varchar(255) NOT NULL,
  title varchar(255) NOT NULL,
  code_text text,
  input_text text,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
*/
