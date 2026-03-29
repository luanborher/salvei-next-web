'use client';

import CollectionPage from '@/components/Pages/CollectionPage/CollectionPage';
import { useCollections } from '@/services/collections/collections';

const CollectionInitialPage = () => {
  const { data: collection, isLoading } = useCollections({});

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (collection?.length === 0) {
    return <div>Cadastre uma coleção</div>;
  }

  return <CollectionPage id={collection?.[0]?.id?.toString() || ''} />;
};

export default CollectionInitialPage;
