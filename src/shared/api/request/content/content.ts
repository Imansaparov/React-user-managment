import { axiosInstance } from "@/shared/api";

export const content = {
  getById: (id: number | string) => axiosInstance.get(`/api/content/${id}`),
};
