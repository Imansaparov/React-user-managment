import axios from "axios";

import { BASE_URL} from "@/shared/constants";

console.log(BASE_URL)

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
