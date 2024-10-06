import { axiosInstance } from "@/shared/api";

export const collections = {
  getAll: (params?: any) => axiosInstance.get("/api/collections", { params }),
};
