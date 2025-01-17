import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

export interface IUserQueryHookProps<T> extends IUserQueryHookCallbackProps<T> {
  url: string;
  options: AxiosRequestConfig;
}

export interface IUserQueryHookCallbackProps<T> {
  onCompleted?: (data: T) => void;
  onError?: (error: any) => void;
}

export function useQueryHook<T = any>(props: IUserQueryHookProps<T>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    axios.get(props.url, props.options).then(
      (response) => {
        setData(response.data);
        setLoading(false);
      },
      function (error) {
        setError(error);
        setLoading(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}

export function useQueryHookLazy<T = any, V = any>(
  props: IUserQueryHookProps<T>
): [
  (params: V, options?: IUserQueryHookCallbackProps<T>) => Promise<T>,
  { data: T | undefined; loading: boolean; error: any },
] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const fetchData = async (
    params: any,
    { onCompleted, onError }: IUserQueryHookCallbackProps<T> = {}
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      axios
        .get(props.url, {
          ...props.options,
          params: {
            ...props.options.params,
            ...params,
          },
        })
        .then(
          (response) => {
            const data = response.data as T;
            setData(data);
            setLoading(false);
            props?.onCompleted?.(data);
            onCompleted?.(data);
            resolve(data);
          },
          (error) => {
            setError(error);
            setLoading(false);
            props.onError?.(error);
            onError?.(error);
            reject(error);
          }
        );
    });
  };

  return [fetchData, { data, loading, error }];
}
