import axios, { AxiosRequestConfig } from "axios";

export function callApi<T = any>(config: AxiosRequestConfig<T>) {
  return axios({
    url: import.meta.env.VITE_ENDPOINT_URL,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${import.meta.env.VITE_ENDPOINT_KEY}`,
    },
    ...config,
  });
}
