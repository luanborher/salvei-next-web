'use client';

import { useState } from 'react';

import Input from '@/components/Input';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import LockIcon from '@/components/Icons/LockIcon';
import Button from '@/components/Button/Button';
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal/ChangePasswordModal';
import { useAuth } from '@/hooks/useAuth';
import { cpfMask, telephoneMask } from '@/utils/marks';

import {
  ConfigurationContainer,
  InputContainer,
  LockIconWrapper,
} from './styles';

const ConfigurationPage = () => {
  const { user } = useAuth();

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleChangePassword = () => {
    setShowChangePasswordModal(true);
  };

  return (
    <>
      <ContainerPage title="Configurações">
        <ConfigurationContainer>
          <InputContainer>
            <Input
              label="Nome completo"
              value={user?.name}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="CPF"
              value={cpfMask(user?.cpf)}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="Telefone"
              value={telephoneMask(user?.phone)}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="E-mail"
              value={user?.email}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
            />

            <LockIconWrapper>
              <LockIcon />
            </LockIconWrapper>
          </InputContainer>

          <InputContainer style={{ alignItems: 'end' }}>
            <div />

            <Button
              type="button"
              onClick={handleChangePassword}
              style={{ padding: '8px 24px', height: '40px' }}
            >
              Alterar senha
            </Button>
          </InputContainer>
        </ConfigurationContainer>
      </ContainerPage>

      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
      />
    </>
  );
};

export default ConfigurationPage;
