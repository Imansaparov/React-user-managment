import { toast } from "react-toastify";
import { parseError } from "@/shared/helpers";

export const errorHandler = (error: any) => {
  const errorMessage = parseError(error);

  toast(errorMessage, {
    type: "error",
  });
};
