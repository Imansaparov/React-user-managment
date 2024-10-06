import { axiosInstance } from "@/shared/api";

export const mbank = {
  create: (data: any) => axiosInstance.post("/api/mbank/create", data),
  confirm: (data: any) => axiosInstance.post("/api/mbank/confirm", data),
  status: (quid: string) => axiosInstance.get(`/api/mbank/status?quid=${quid}`),
  dpCreate: (data: any) =>
    axiosInstance.post("/api/mbank/direct-provider/create", data),
};
