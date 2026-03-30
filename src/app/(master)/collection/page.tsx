'use client';

import Skeleton from 'react-loading-skeleton';

import CollectionPage from '@/components/Pages/CollectionPage/CollectionPage';
import { useCollections } from '@/services/collections/collections';
import ContainerPage from '@/components/ContainerPage/ContainerPage';

const CollectionInitialPage = () => {
  const { data: collection, isLoading } = useCollections({});

  if (isLoading) {
    return (
      <ContainerPage title="">
        <Skeleton
          count={5}
          width="100%"
          height={100}
          baseColor="#202020"
          highlightColor="#444"
          borderRadius={12}
        />
      </ContainerPage>
    );
  }

  if (collection?.length === 0) {
    return (
      <ContainerPage title="">
        <div>
          Nenhuma coleção encontrada. Crie uma nova coleção para começar a
          salvar seus filmes favoritos!
        </div>
      </ContainerPage>
    );
  }

  return (
    <CollectionPage
      id={collection?.[0]?.id?.toString() || ''}
      name={collection?.[0]?.name?.toString() || ''}
    />
  );
};

export default CollectionInitialPage;
