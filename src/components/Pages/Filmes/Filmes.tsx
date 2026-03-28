import { useState } from 'react';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import Input from '@/components/Input';
import EntretenimentoCard from '@/components/Cards/EntretenimentoCard/EntretenimentoCard';
import { moviesMock } from '@/mocks/filmes';

import { ActionsRow, List, NotFoundWrapper } from './styles';

const Filmes = () => {
  const [contents] = useState(moviesMock || []);
  const [search, setSearch] = useState('');

  const filteredContents = contents.filter(enterprise =>
    enterprise.title.toLowerCase().includes(search.toLowerCase()),
  );

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
    <ContainerPage title="Séries" rightContent={renderActions()}>
      <List>
        {filteredContents?.length > 0 &&
          filteredContents.map(enterprise => (
            <EntretenimentoCard
              key={enterprise.id}
              title={enterprise.title}
              description={enterprise.series}
              status={enterprise.status}
              imageUrl={enterprise.imageUrl}
            />
          ))}
      </List>

      {filteredContents?.length === 0 && (
        <NotFoundWrapper>
          <p>Nenhum conteúdo encontrado ainda</p>
        </NotFoundWrapper>
      )}
    </ContainerPage>
  );
};

export default Filmes;
