import { injectable } from 'inversify';
import 'reflect-metadata';
import { baseConfig } from './config.ts';
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
// axios를 알고 있는 곳은 이 파일 뿐이어야함

interface HttpMethodRequest {
  url: string;
  data?: Record<string, never>;
  config?: AxiosRequestConfig;
}

@injectable()
class ApiService {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create(baseConfig);
    this.setInterceptorOnRequest();
    this.setInterceptorOnResponse();
  }

  setInterceptorOnRequest() {
    // this.apiInstance.interceptors.request.use((config) => {
    //   const accessToken = localStorage.getItem('accessToken');
    //   if (accessToken) {
    //     const tempConfig = {
    //       ...config,
    //       headers: {
    //         ...config.headers,
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     };
    //     return tempConfig;
    //   }
    //   return config;
    // });
  }

  setInterceptorOnResponse() {
    // this.apiInstance.interceptors.response.use(
    //   (response) => {
    //     // 응답 가로채기
    //     return response;
    //   },
    //   async (error) => {
    //     // 에러 가로채기
    //     // Console.log('error', error);
    //     const originalRequest = error.config;
    //     const refreshToken = localStorage.getItem('refreshToken');
    //
    //     if (
    //       error.response.status === 401 &&
    //       !originalRequest._retry &&
    //       originalRequest.url !== '/auth/getToken' && // fixMe: 서버에서 인증만료에 대한 유니크한 응답을 보내줘야한다.
    //       refreshToken
    //     ) {
    //       originalRequest._retry = true;
    //       const config = {
    //         ...baseConfig,
    //         headers: {
    //           ...baseConfig.headers,
    //           Authorization: `Bearer ${refreshToken}`,
    //         },
    //       };
    //
    //       try {
    //         const response = await this.apiInstance.get<{ data: string }>('/auth/getToken', {}, config); // fixMe: 응답으로 accessToken과 refreshToken을 모두 필요
    //         if (response.ok && response.status) {
    //           const updatedToken = (response.data && response.data.data) || '';
    //           localStorage.setItem('accessToken', updatedToken);
    //           localStorage.setItem('refreshToken', updatedToken);
    //           originalRequest.headers.Authorization = `Bearer ${updatedToken}`;
    //         }
    //         return this.apiInstance(originalRequest);
    //       } catch (refreshError) {
    //         // Console.log('리프레시 토큰 갱신에 실패했습니다.', refreshError);
    //         return error.response;
    //       }
    //     }
    //     return error.response;
    //   },
    // );
  }

  get<T>({ url, config }: HttpMethodRequest) {
    const combinedConfig: AxiosRequestConfig = { ...baseConfig, ...config };
    // const params = data ? { params: data } : {}; TODO: params를 url에 넣어주는 로직이 필요함
    return this.apiInstance.get<T>(url, combinedConfig);
  }
}

export default ApiService;





