import { request } from "./axios";
import { md5Generator } from "../utils/md5Generator";

interface signUpData {
  name: string;
  email: string;
  key: string;
  secret: string;
}

export const register = async (data: signUpData) => {
  return await request({ url: "signup", method: "POST", data });
};

export const login = async (key: string, sign: string) => {
  return await request({
    url: "myself",
    method: "GET",
    headers: {
      Key: key,
      Sign: md5Generator("GET", "/myself", "", sign),
    },
  });
};
