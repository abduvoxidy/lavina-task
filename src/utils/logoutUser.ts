import { destroyCookie } from "nookies";
import LocalStorage from "./LocalStorage";
import { store } from "../store";
import { authActions } from "../store/auth/auth.slice";

export const logoutUser = () => {
  LocalStorage.remove("userData");
  store.dispatch(authActions.logout());
  destroyCookie(null, "userKey");
  destroyCookie(null, "userSecret");
  location.reload();
};
