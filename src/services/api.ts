/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';
import { localStorageKeys } from '@/utils/localStorageKeys';

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem(localStorageKeys.accessToken);
    if (
      accessToken &&
      !config.url?.includes('auth/login') &&
      !config.url?.includes('auth/register')
    ) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;

export async function refreshAccessToken() {
  try {
    const credentials = localStorage.getItem(localStorageKeys.refreshToken);

    if (typeof credentials === 'string') {
      const { data } = await api.post('/auth/refresh', {
        refreshToken: credentials,
      });
      localStorage.setItem(localStorageKeys.accessToken, data.jwt);
      localStorage.setItem(localStorageKeys.refreshToken, data.refreshToken);

      return data?.jwt;
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = '/';
  }

  localStorage.clear();
  window.location.href = '/';
}

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest.retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      originalRequest.retry = true;
      const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);
