import { AxiosResponse } from 'axios';

import { errorHandler } from '@/shared/helpers';

type AsyncFunctionProps<T> = {
  data?: T;
  request: (data: T) => Promise<AxiosResponse>;
  onSuccess?: (
    response: AxiosResponse,
    requestParams: T
  ) => Promise<void> | void;
  onFailure?: (error: any) => void;
  onFinally?: () => void;
  withoutErrorHandler?: boolean;
};

export const asyncFunction = async <T>({
  request,
  data,
  onSuccess,
  onFailure,
  onFinally,
  withoutErrorHandler,
}: AsyncFunctionProps<T>) => {
  try {
    const response = await request(data as T);

    if (onSuccess) await onSuccess(response, data as T);
  } catch (error) {
    if (!withoutErrorHandler) {
      errorHandler(error);
    }

    if (onFailure) onFailure(error);
  } finally {
    if (onFinally) onFinally();
  }
};
