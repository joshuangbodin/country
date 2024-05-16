import axios from "axios";

//storing url
const urlall = "https://restcountries.com/v3.1/all";
const urlSearch = "https://restcountries.com/v3.1/name/";

//rem: i did not use an async fxn to simplify not working with JSON data format
export const api = axios.get(urlall);

//export fxn that returns data based on name
export function SearchName(query: string) {
  const api = axios.get(urlSearch + query);
  return api;
}
