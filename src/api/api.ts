import axios, { AxiosRequestConfig } from 'axios';

import { apiConfig } from './api.config';

const axiosInstance = axios.create(apiConfig);

axiosInstance.interceptors.request.use((config) => {
  const headerAuthorization = {
    'Content-Type': 'application/json',
  };

  return {
    ...config,
    headers: {
      ...config.headers,
      ...headerAuthorization,
    },
  }
});

axiosInstance.interceptors.response.use((params) => {
  // Add something if needed

  return {
    ...params
  }
}, (error) => {
  return Promise.reject(error.response);
});

export async function get<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.get(path, config);
  return data;
};

export async function post<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.post(path, reqData, config);
  return data;
};

export async function patch<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.patch(path, reqData, config);
  return data;
};

export async function put<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.put(path, reqData, config);
  return data;
};

export async function del<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.delete(path, config);
  return data;
};

export const API = {
  get,
  post,
  patch,
  put,
  del,
};