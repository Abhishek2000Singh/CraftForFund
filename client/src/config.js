import axios from "axios";
const BASE_URL = import.meta.env.VITE_SERVER_URL;
export const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
