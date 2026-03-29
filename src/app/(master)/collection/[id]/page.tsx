'use client';

import { useParams, useSearchParams } from 'next/navigation';

import CollectionPage from '@/components/Pages/CollectionPage/CollectionPage';

const Collection = () => {
  const { id } = useParams() as { id: string };
  const params = useSearchParams();
  const name = params.get('name') || '';

  return <CollectionPage id={id} name={name} />;
};

export default Collection;
