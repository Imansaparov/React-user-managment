import { useState } from "react";
import { AxiosResponse } from "axios";

import { errorHandler } from "@/shared/helpers";

type useAsyncFunctionProps<T> = {
  request: (data: T) => Promise<AxiosResponse>;
  onSuccess?: (response: AxiosResponse, requestParams: T) => Promise<void> | void;
  onError?: (error: any) => void;
  onFinally?: () => void;
  withoutErrorHandler?: boolean;
  withoutLoading?: boolean;
};

export const useAsyncFunction = <T>({
  request,
  onSuccess,
  onError,
  onFinally,
  withoutErrorHandler,
  withoutLoading,
}: useAsyncFunctionProps<T>) => {
  const [loading, setLoading] = useState<boolean>(false);

  const callFn = async (data?: T) => {
    try {
      if (!withoutLoading) {
        setLoading(true);
      }

      const response = await request(data as T);

      if (response.data.success === false || response.data.statusCode === 500) {
        if (!withoutErrorHandler) {
          errorHandler(response);
        }
        if (onError) onError(response);
        return;
      }

      if (onSuccess) await onSuccess(response, data as T);
    } catch (error) {
      if (!withoutErrorHandler) {
        errorHandler(error);
      }
      if (onError) onError(error);
    } finally {
      if (!withoutLoading) {
        setLoading(false);
      }
      if (onFinally) onFinally();
    }
  };

  return { loading, callFn };
};
