import { useState } from 'react';

import EntretenimentoCard from '@/components/Cards/EntretenimentoCard/EntretenimentoCard';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import HomeCircleIcon from '@/components/Icons/notFound/HomeCircle';
import Input from '@/components/Input';

import { gamesMock } from '@/mocks/games';

import { ActionsRow, EnterpriseList, NotFoundWrapper } from './styles';

const EnterprisesPage = () => {
  const [enterprises] = useState(gamesMock || []);
  const [search, setSearch] = useState('');

  const filteredEnterprises = enterprises.filter(enterprise =>
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
    <ContainerPage title="Jogos" rightContent={renderActions()}>
      <EnterpriseList>
        {filteredEnterprises?.length > 0 &&
          filteredEnterprises.map(enterprise => (
            <EntretenimentoCard
              key={enterprise.id}
              title={enterprise.title}
              description={enterprise.series}
              status={enterprise.status}
              imageUrl={enterprise.imageUrl}
              platinum={enterprise.platinum || false}
            />
          ))}
      </EnterpriseList>

      {filteredEnterprises?.length === 0 && (
        <NotFoundWrapper>
          <HomeCircleIcon />

          <p>Nenhum conteúdo encontrado ainda</p>
        </NotFoundWrapper>
      )}
    </ContainerPage>
  );
};

export default EnterprisesPage;
