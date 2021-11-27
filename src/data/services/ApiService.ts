import axios from "axios";

const path = "https://coronavirus-19-api.herokuapp.com/countries";

export const ApiService = axios.create({
  baseURL: path,
  timeout: 1000 * 5,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    method: "GET",
    mode: "cors",
    cache: "default",
  },
});
