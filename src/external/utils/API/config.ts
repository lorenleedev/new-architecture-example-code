import {AxiosRequestConfig} from "axios";

export const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://example.api.host/', // todo: env로 변경
  // responseType: 'json',
  // headers: {
  //     'Content-Type': 'application/json',
  // },
};

