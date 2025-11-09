import axios from "axios";
import { getToken } from "./token";

const BASE_URL = 'http://localhost:3000/api';
const TIME_OUT = 10000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default api;