import { axiosInstance } from "@/shared/api";

export const slider = {
  get: () => axiosInstance.get("/api/slider"),
};
