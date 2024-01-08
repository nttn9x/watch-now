import axios, { AxiosRequestConfig } from "axios";

export function init() {
  axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT_URL;
}

export async function callApi<T>(config: AxiosRequestConfig<T>) {
  const res = await axios({
    ...config,
    params: { api_key: import.meta.env.VITE_ENDPOINT_KEY, ...config?.params },
  })
    .then((result) => {
      return { ok: true, result };
    })
    .catch(function () {
      return {
        ok: false,
      };
    });

  return res as { ok: boolean; result?: T };
}
