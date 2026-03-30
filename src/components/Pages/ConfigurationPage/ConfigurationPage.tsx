'use client';

import { useState } from 'react';

import Input from '@/components/Input';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import LockIcon from '@/components/Icons/LockIcon';
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal/ChangePasswordModal';
import Button from '@/components/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { cpfMask, telephoneMask } from '@/utils/marks';

import { FaPen } from 'react-icons/fa';
import {
  ConfigurationContainer,
  Image,
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
          <Image src={user?.photo || '/ticka_logo.svg'} />

          <InputContainer>
            <Input
              label="Nome completo"
              value={user?.name || ''}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
              style={{ color: '#F0ECEC' }}
            />

            <Input
              label="CPF"
              value={cpfMask(user?.cpf || '')}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
              style={{ color: '#F0ECEC' }}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="Telefone"
              value={telephoneMask(user?.phone || '')}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
              style={{ color: '#F0ECEC' }}
            />

            <Input
              label="E-mail"
              value={user?.email || ''}
              disabled
              styleLabel={{ fontWeight: 600, color: '#F0ECEC' }}
              style={{ color: '#F0ECEC' }}
            />

            <LockIconWrapper>
              <LockIcon />
            </LockIconWrapper>
          </InputContainer>
        </ConfigurationContainer>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 24px',
          }}
        >
          <Button
            type="button"
            onClick={handleChangePassword}
            style={{
              padding: '8px 24px',
              width: '210px',
              height: '40px',
            }}
          >
            <FaPen />
            Alterar senha
          </Button>
        </div>
      </ContainerPage>

      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
      />
    </>
  );
};

export default ConfigurationPage;
