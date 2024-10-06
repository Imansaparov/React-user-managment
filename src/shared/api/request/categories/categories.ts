import { axiosInstance } from "@/shared/api";

export const categories = {
  getAll: () => axiosInstance.get("/api/categories"),
};
