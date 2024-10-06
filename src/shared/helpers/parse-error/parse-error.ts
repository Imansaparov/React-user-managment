import { errorMessages } from "@/shared/constants";

export const parseError = (error: any): string => {
  let errorMessage =
    error.response?.data?.message ||
    error.message ||
    error.data?.message ||
    error.comment ||
    error;

  if (Array.isArray(errorMessage)) {
    errorMessage = errorMessage[0];
  }

  if (typeof errorMessage !== "string") {
    errorMessage = JSON.stringify(errorMessage);
  }

  if (errorMessages[errorMessage]) {
    errorMessage = errorMessages[errorMessage];
  }

  return errorMessage;
};
