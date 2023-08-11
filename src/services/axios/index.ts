import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const request = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});
