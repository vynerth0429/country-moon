import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: false,
  baseURL: 'https://restcountries.eu/rest/v2/',
  headers: {
    'Content-Type': 'application/json'
  }
}