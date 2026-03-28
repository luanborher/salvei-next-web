import { useCallback, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import handleError from '@/utils/handleToast';
import Input from '@/components/Input';
import Modal from '@/components/Modal/Modal';
import WarningModal from '@/components/Modals/WarningModal/WarningModal';
import {
  ChangePasswordSchema,
  IChangePasswordSchema,
} from '@/validations/LoginSchema';
import Button from '@/components/Button/Button';

import {
  ModalContainer,
  ButtonGroup,
  ErrorHeader,
  ModalContent,
  InputWrapper,
  ModalForm,
  RequirementsList,
  RequirementItem,
  RequirementIcon,
} from './styles';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalBoxRef = useRef<HTMLDivElement>(null);

  const [successModal, setSuccessModal] = useState(false);
  const [mouseDownTarget, setMouseDownTarget] = useState<EventTarget | null>(
    null,
  );

  const {
    reset,
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IChangePasswordSchema>({
    resolver: yupResolver(ChangePasswordSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IChangePasswordSchema> = async form => {
    try {
      console.log(form);
      reset({});
      setSuccessModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setMouseDownTarget(e.target);
  }, []);

  const handleClickOutside = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && mouseDownTarget === e.target) {
        onClose();
      }
      setMouseDownTarget(null);
    },
    [onClose, mouseDownTarget],
  );

  if (!isOpen) return null;

  return (
    <>
      {!successModal && (
        <Modal onMouseDown={handleMouseDown} onClick={handleClickOutside}>
          <ModalContainer ref={modalBoxRef}>
            <ModalForm onSubmit={handleSubmit(onSubmit)}>
              <ErrorHeader>
                <span>Alterar senha</span>
              </ErrorHeader>

              <ModalContent>
                <Input
                  isPassword
                  label="Senha atual"
                  placeholder="Digite sua senha atual"
                  error={errors.currentPassword?.message}
                  {...register('currentPassword')}
                />

                <Input
                  isPassword
                  label="Nova senha"
                  placeholder="Digite a nova senha"
                  error={errors.password?.message}
                  {...register('password')}
                />

                <InputWrapper>
                  <RequirementsList>
                    <RequirementItem>
                      <RequirementIcon /> Mínimo 8 caracteres
                    </RequirementItem>
                    <RequirementItem>
                      <RequirementIcon /> 1 letra minúscula
                    </RequirementItem>
                    <RequirementItem>
                      <RequirementIcon /> 1 letra maiúscula
                    </RequirementItem>
                    <RequirementItem>
                      <RequirementIcon /> 1 número
                    </RequirementItem>
                    <RequirementItem>
                      <RequirementIcon /> 1 caractere especial
                    </RequirementItem>
                  </RequirementsList>
                </InputWrapper>

                <Input
                  isPassword
                  label="Confirme a nova senha"
                  placeholder="Confirme a nova senha"
                  error={errors.confirmPassword?.message}
                  {...register('confirmPassword')}
                />
              </ModalContent>

              <ButtonGroup>
                <Button
                  type="button"
                  outline
                  style={{ width: '100%' }}
                  onClick={() => {
                    clearErrors();
                    onClose();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" style={{ width: '100%' }}>
                  Salvar
                </Button>
              </ButtonGroup>
            </ModalForm>
          </ModalContainer>
        </Modal>
      )}

      <WarningModal
        open={successModal}
        type="success"
        confirmText="Voltar"
        onConfirm={() => {
          setSuccessModal(false);
          onClose();
        }}
      >
        <WarningModal.Message>Sucesso!</WarningModal.Message>
        <WarningModal.ObsInfo>Senha alterada com sucesso!</WarningModal.ObsInfo>
      </WarningModal>
    </>
  );
};

export default ChangePasswordModal;
