import { axiosInstance } from "@/shared/api";

export const optima = {
  create: (data: any) => axiosInstance.post("/api/optima/create", data),
  status: (txId: number) =>
    axiosInstance.get(`/api/optima/status?txId=${txId}`),
};
