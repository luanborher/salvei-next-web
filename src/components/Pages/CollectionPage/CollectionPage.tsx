import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import GridCard from '@/components/Cards/GridCard/GridCard';
import Input from '@/components/Input';

import { useCollectionById } from '@/services/collections/collections';

import Button from '@/components/Button/Button';
import { FaPlus } from 'react-icons/fa';
import AddItemModal from '@/components/Modals/AddItemModal/AddItemModal';
import { ActionsRow, List, NotFoundWrapper } from './styles';

const CollectionPage = ({ id, name }: { id: string; name: string }) => {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const { data: collection, isLoading } = useCollectionById(id);

  const filteredContents =
    collection?.filter(enterprise =>
      enterprise.name.toLowerCase().includes(search.toLowerCase()),
    ) || [];

  const renderActions = () => {
    return (
      <ActionsRow>
        <Input
          placeholder="Pesquise pelo nome"
          isFilter
          value={search}
          onChange={e => setSearch(e?.target?.value || '')}
          style={{ width: '525px', color: '#fff' }}
        />

        {filteredContents?.length > 0 && (
          <Button type="button" onClick={() => setShowAddModal(true)}>
            <FaPlus size={16} />
            Adicionar
          </Button>
        )}
      </ActionsRow>
    );
  };

  return (
    <ContainerPage title={name} rightContent={renderActions()}>
      <List>
        {isLoading ? (
          <Skeleton
            count={5}
            width="100%"
            height={100}
            baseColor="#202020"
            highlightColor="#444"
            borderRadius={12}
          />
        ) : filteredContents?.length > 0 ? (
          filteredContents.map(enterprise => (
            <GridCard
              key={enterprise.id}
              documentId={enterprise.id}
              title={enterprise.name}
              description={enterprise.description}
              status={enterprise.status}
              imageUrl={enterprise.image}
              updating={isLoading}
            />
          ))
        ) : (
          <NotFoundWrapper>
            <p>Nenhum item foi cadastrado ainda</p>

            <Button type="button" onClick={() => setShowAddModal(true)}>
              <FaPlus size={16} />
              Adicionar
            </Button>
          </NotFoundWrapper>
        )}
      </List>

      <AddItemModal
        documentId={id}
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </ContainerPage>
  );
};

export default CollectionPage;
