import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import router from "next/router";
import responseStatus from "../utils/responseStatus";

const getApiUrl = (): string => {
  if (process.env.NEXT_PUBLIC_API_URL != null) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  console.warn("NEXT_PUBLIC_API_URL is not set as environment variable. Setting API Url to http://localhost:3333");

  return "http://localhost:3333";
};

const getBackUrl = (): string => {
  if (process.env.NEXT_BACK_API_URL != null) {
    return process.env.NEXT_BACK_API_URL;
  }
  console.warn("NEXT_BACK_API_URL is not set as environment variable. Setting API Url to http://localhost:3333");

  return "http://localhost:3333";
};

const api = axios.create({
  baseURL: getApiUrl(),
});

const validateToken = (token: string, config: AxiosRequestConfig): AxiosRequestConfig => {
  if (token !== null) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};

const tokenInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { "tracking.plataform.token": token } = parseCookies();
  return validateToken(token, config);
};

const tokenError = async (error: Error): Promise<never> => {
  return await Promise.reject(error);
};

api.interceptors.request.use(tokenInterceptor, tokenError);

interface ILoginResponse {
  status: number;
}

interface ErrorResponse {
  response: {
    status: number;
  };
}

api.interceptors.response.use(
  function (response: AxiosResponse<ILoginResponse, ILoginResponse>): AxiosResponse<ILoginResponse, ILoginResponse> {
    if (response.data?.status === responseStatus.unauthorized) {
      router.push("/").finally(() => {
        console.log("permission denied");
      });
    }
    return response;
  },
  function async(error: ErrorResponse): Promise<never> | undefined {
    if (responseStatus.unauthorized === error.response.status) {
      router.push("/").finally(() => {
        console.log("permission denied");
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export const backApi = (context: GetServerSidePropsContext): AxiosInstance => {
  const back = axios.create({ baseURL: getBackUrl() });

  const interceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { "tracking.plataform.token": token } = parseCookies(context);
    return validateToken(token, config);
  };

  back.interceptors.request.use(interceptor, tokenError);
  return back;
};

export default api;
