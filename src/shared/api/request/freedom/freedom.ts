import { axiosInstance } from "@/shared/api";

export const freedom = {
  create: (data: any) => axiosInstance.post("/api/freedom/create", data),
  status: (id: number) => axiosInstance.get(`/api/freedom/status?id=${id}`),
};
