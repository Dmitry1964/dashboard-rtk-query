import axios from "axios";


const BASE_URL = 'https://api-fns.ru/api';
const TIME_OUT = 10000;

const apiFns = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});


export default apiFns;