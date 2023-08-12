import axios from "axios";
import { logoutUser } from "../../utils/logoutUser";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const request = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

request.interceptors.response.use((response) => {
  return response;
}, errorHandler);

export function errorHandler(error: any) {
  if (error.response) {
    if (error.response.status === 401) {
      logoutUser();
    }

    return Promise.reject(error.response);
  }
  if (error.request) {
    return Promise.reject(error.request);
  }

  return Promise.reject(error);
}
