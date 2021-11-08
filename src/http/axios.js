import axios from "axios";

export const http = axios.create({
  baseURL: 'https://support-api.asoulfan.com/asf/mobile/',
  timeout: 10000,
})
