import { useState } from 'react';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import Input from '@/components/Input';
import { useCollections } from '@/services/collections/collections';

import { ActionsRow, List, NotFoundWrapper } from './styles';

const HomePage = () => {
  const [search, setSearch] = useState('');

  const { data: collection } = useCollections({});

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
          style={{ width: '525px' }}
        />
      </ActionsRow>
    );
  };

  return (
    <ContainerPage title="Suas coleções" rightContent={renderActions()}>
      <List>
        {filteredContents?.length > 0 &&
          filteredContents.map(enterprise => (
            <div>
              <div>{enterprise.name}</div>
              <div>{enterprise.description}</div>
            </div>
          ))}
      </List>

      {filteredContents?.length === 0 && (
        <NotFoundWrapper>
          <p>Nenhuma coleção cadastrada ainda</p>
        </NotFoundWrapper>
      )}
    </ContainerPage>
  );
};

export default HomePage;
