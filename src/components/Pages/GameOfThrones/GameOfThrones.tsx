import { useState } from 'react';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import HomeCircleIcon from '@/components/Icons/notFound/HomeCircle';
import Input from '@/components/Input';

import { gameofthronesMock } from '@/mocks/gameofthrones';
import EntretenimentoCard from '@/components/Cards/EntretenimentoCard/EntretenimentoCard';

import { ActionsRow, List, NotFoundWrapper } from './styles';

const GameOfThrones = () => {
  const [contents] = useState(gameofthronesMock || []);
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
    <ContainerPage title="Game of Thrones" rightContent={renderActions()}>
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
          <HomeCircleIcon />

          <p>Nenhum conteúdo encontrado ainda</p>
        </NotFoundWrapper>
      )}
    </ContainerPage>
  );
};

export default GameOfThrones;
