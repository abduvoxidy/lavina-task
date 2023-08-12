import { destroyCookie } from "nookies";
import LocalStorage from "./LocalStorage";

export const logoutUser = () => {
  LocalStorage.remove("userData");
  LocalStorage.set("isAuth", false);
  destroyCookie(null, "userKey");
  destroyCookie(null, "userSecret");
  location.reload();
};
