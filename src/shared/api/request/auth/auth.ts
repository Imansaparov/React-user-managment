import { axiosInstance } from "@/shared/api";

export const auth = {
  google: (data: any) => axiosInstance.post("/api/auth/google", data),
  apple: (data: any) => axiosInstance.post("/api/auth/apple", data),
  refreshToken: (data: any) => axiosInstance.post("/api/auth/refresh", data),
  profile: () => axiosInstance.get("/api/auth/profile"),
  deleteAccount: () => axiosInstance.delete("/api/auth/profile"),
};
