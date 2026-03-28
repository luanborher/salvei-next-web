'use client';

import { useState } from 'react';

import Input from '@/components/Input';
import ContainerPage from '@/components/ContainerPage/ContainerPage';
import LockIcon from '@/components/Icons/LockIcon';
import Button from '@/components/Button/Button';
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal/ChangePasswordModal';

import {
  ConfigurationContainer,
  InputContainer,
  LockIconWrapper,
  PermissionsSection,
  PermissionsTitle,
  PermissionsContainer,
  ToggleItem,
  ToggleLabel,
  ToggleSwitch,
  ToggleInput,
  ToggleSlider,
  PasswordInput,
} from './styles';

const ConfigurationPage = () => {
  const [canView, setCanView] = useState(true);
  const [canEdit, setCanEdit] = useState(true);
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
              label="E-mail"
              value="exemplo@gmail.com"
              disabled
              styleLabel={{ fontWeight: 600 }}
            />

            <LockIconWrapper>
              <LockIcon />
            </LockIconWrapper>
          </InputContainer>

          <InputContainer style={{ alignItems: 'end' }}>
            <PasswordInput>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </PasswordInput>

            <Button
              type="button"
              onClick={handleChangePassword}
              style={{ padding: '8px 24px', height: '40px' }}
            >
              Alterar senha
            </Button>
          </InputContainer>

          <InputContainer>
            <PermissionsSection>
              <PermissionsTitle>Ações permitidas</PermissionsTitle>

              <PermissionsContainer>
                <ToggleItem>
                  <ToggleLabel>Visualizar</ToggleLabel>

                  <ToggleSwitch>
                    <ToggleInput
                      type="checkbox"
                      checked={canView}
                      onChange={e => setCanView(e.target.checked)}
                    />
                    <ToggleSlider />
                  </ToggleSwitch>
                </ToggleItem>

                <ToggleItem>
                  <ToggleLabel>Editar</ToggleLabel>
                  <ToggleSwitch>
                    <ToggleInput
                      type="checkbox"
                      checked={canEdit}
                      onChange={e => setCanEdit(e.target.checked)}
                    />
                    <ToggleSlider />
                  </ToggleSwitch>
                </ToggleItem>
              </PermissionsContainer>
            </PermissionsSection>
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
