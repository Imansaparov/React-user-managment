import { axiosInstance } from "@/shared/api";

export const subscriptions = {
  getAll: () => axiosInstance.get("/api/subscriptions/mine"),
};
