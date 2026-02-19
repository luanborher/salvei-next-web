import { baseURL } from '@/services/api';

export const formatFileUrl = (url: string) => {
  const baseApiUrl = baseURL?.split('/api')[0];
  return `${baseApiUrl}${url}`;
};
