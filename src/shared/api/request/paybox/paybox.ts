import { axiosInstance } from "@/shared/api";

export const paybox = {
  create: (data: any) => axiosInstance.post("/api/paybox/create", data),
  status: (id: number) => axiosInstance.get(`/api/paybox/status?id=${id}`),
};
