import axios from "axios";

const urlall = "https://restcountries.com/v3.1/all";
const urlSearch = "https://restcountries.com/v3.1/name/";

export const api = axios.get(urlall);

export function SearchName(query: string) {
  const api = axios.get(urlSearch + query);
  return api;
}
