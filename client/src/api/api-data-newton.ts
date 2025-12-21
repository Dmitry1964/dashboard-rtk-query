import axios from "axios";

const MANAGER = 'MANAGER_BLOCK';
const ADDRESS = 'ADDRESS_BLOCK';
const CONTACT = 'CONTACT_BLOCK';
const DATA_KEY = import.meta.env.VITE_API_DATA_NEWTON_KEY;

const BASE_URL = `https://api.datanewton.ru/v1/counterparty?key=${DATA_KEY}&filters=${MANAGER}%2C${ADDRESS}%2C${CONTACT}`;
const TIME_OUT = 10000;

const apiDataNewton = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default apiDataNewton;