import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { ICollection } from '@/interfaces/collection.interface';
import { IItem } from '@/interfaces/item.interface';
import api from '../api';

export const useCollections = (params: Record<string, any>) => {
  const getCollections = async ({ queryKey }: QueryFunctionContext) => {
    const [, params] = queryKey;
    const { data } = await api.get<ICollection[]>('/lists', { params });
    return data;
  };

  return useQuery({
    queryKey: ['getCollections', params],
    queryFn: getCollections,
  });
};

export const useCollectionById = (id: string) => {
  const getCollectionById = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey;
    const { data } = await api.get<IItem[]>(`/lists/${id}/items`);
    return data;
  };

  return useQuery({
    queryKey: ['getCollectionById', id],
    queryFn: getCollectionById,
    enabled: !!id,
  });
};

export const useCollectionDetails = (id: string) => {
  const getCollectionDetails = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey;
    const { data } = await api.get<ICollection>(`/lists/${id}`);
    return data;
  };

  return useQuery({
    queryKey: ['getCollectionDetails', id],
    queryFn: getCollectionDetails,
    enabled: !!id,
  });
};
