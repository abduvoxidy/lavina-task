import { MD5 } from "crypto-js";

export const md5Generator = (
  method: string,
  url: string,
  body: string,
  userSecret: string
) => {
  const signString = `${method}${url}${body}${userSecret}`;
  return MD5(signString).toString();
};
