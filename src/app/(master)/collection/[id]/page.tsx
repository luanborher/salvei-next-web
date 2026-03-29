'use client';

import { useParams } from 'next/navigation';

import CollectionPage from '@/components/Pages/CollectionPage/CollectionPage';

const Collection = () => {
  const { id } = useParams() as { id: string };

  return <CollectionPage id={id} />;
};

export default Collection;
