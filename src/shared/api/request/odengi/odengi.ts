import { axiosInstance } from "@/shared/api";

export const odengi = {
  create: (data: any) => axiosInstance.post("/api/odengi/create", data),
  confirm: (data: any) => axiosInstance.post("/api/odengi/confirm", data),
  status: (quid: string) =>
    axiosInstance.get(`/api/odengi/status?quid=${quid}`),
};
