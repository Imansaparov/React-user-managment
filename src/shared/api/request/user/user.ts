import { axiosInstance } from "@/shared/api";

export const user = {
  list: () => axiosInstance.get("/users"),
};
