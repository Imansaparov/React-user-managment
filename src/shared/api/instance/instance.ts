import axios from "axios";

import { baseURL} from "@/shared/constants";

export const axiosInstance = axios.create({
  baseURL
});
