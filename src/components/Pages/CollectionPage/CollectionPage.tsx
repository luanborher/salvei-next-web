import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaListUl, FaPlus, FaThLarge } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import GridCard from '@/components/Cards/GridCard/GridCard';
import ListCard from '@/components/Cards/ListCard/ListCard';
import Input from '@/components/Input';

import {
  useCollectionById,
  useCollectionDetails,
} from '@/services/collections/collections';

import Button from '@/components/Button/Button';
import AddItemModal from '@/components/Modals/AddItemModal/AddItemModal';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import {
  ActionsRow,
  List,
  NotFoundWrapper,
  ViewToggle,
  ViewToggleButton,
} from './styles';

const CollectionPage = ({ id, name }: { id: string; name: string }) => {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [savingView, setSavingView] = useState(false);
  const queryClient = useQueryClient();

  const { data: collection, isLoading } = useCollectionById(id);
  const { data: collectionDetails } = useCollectionDetails(id);

  useEffect(() => {
    if (typeof collectionDetails?.isGrid === 'boolean') {
      setIsGrid(collectionDetails.isGrid);
    }
  }, [collectionDetails?.isGrid]);

  const filteredContents =
    collection?.filter(enterprise =>
      enterprise.name.toLowerCase().includes(search.toLowerCase()),
    ) || [];

  const handleChangeView = async (nextValue: boolean) => {
    if (savingView || nextValue === isGrid) {
      return;
    }

    setIsGrid(nextValue);
    setSavingView(true);

    try {
      await api.patch(`/lists/${id}`, { isGrid: nextValue });
      queryClient.invalidateQueries({
        queryKey: ['getCollectionDetails', id],
      });
      queryClient.invalidateQueries({
        queryKey: ['getCollections'],
        exact: false,
      });
    } catch (error) {
      setIsGrid(!nextValue);
      handleError(error);
    } finally {
      setSavingView(false);
    }
  };

  const renderActions = () => {
    return (
      <ActionsRow>
        {filteredContents?.length > 0 && (
          <ViewToggle>
            <ViewToggleButton
              type="button"
              $active={isGrid}
              disabled={savingView}
              onClick={() => handleChangeView(true)}
            >
              <FaThLarge size={14} />
              Cards
            </ViewToggleButton>

            <ViewToggleButton
              type="button"
              $active={!isGrid}
              disabled={savingView}
              onClick={() => handleChangeView(false)}
            >
              <FaListUl size={14} />
              Linhas
            </ViewToggleButton>
          </ViewToggle>
        )}

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
      <List $isGrid={isGrid}>
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
          filteredContents.map(enterprise =>
            isGrid ? (
              <GridCard
                key={enterprise.id}
                documentId={enterprise.id}
                title={enterprise.name}
                description={enterprise.description}
                status={enterprise.status}
                imageUrl={enterprise.image}
                updating={isLoading}
              />
            ) : (
              <ListCard
                key={enterprise.id}
                documentId={enterprise.id}
                title={enterprise.name}
                description={enterprise.description}
                status={enterprise.status}
                imageUrl={enterprise.image}
                updating={isLoading}
              />
            ),
          )
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
