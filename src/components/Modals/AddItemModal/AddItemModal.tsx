import { useCallback, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import handleError from '@/utils/handleToast';
import Input from '@/components/Input';
import Modal from '@/components/Modal/Modal';
import WarningModal from '@/components/Modals/WarningModal/WarningModal';
import Button from '@/components/Button/Button';
import api from '@/services/api';

import { useQueryClient } from '@tanstack/react-query';
import {
  ModalContainer,
  ButtonGroup,
  ErrorHeader,
  ModalContent,
  ModalForm,
  LabelCheckbox,
} from './styles';

interface AddItemFormFields {
  name: string;
  description: string;
  image: string;
  highlighted: boolean;
}

interface SuccessModalProps {
  isOpen: boolean;
  documentId: string;
  onClose: () => void;
}

const AddItemModal: React.FC<SuccessModalProps> = ({
  isOpen,
  documentId,
  onClose,
}) => {
  const query = useQueryClient();
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
  } = useForm<AddItemFormFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AddItemFormFields> = async form => {
    try {
      await api.post(`/lists/${documentId}/items`, form);

      await query.invalidateQueries({ queryKey: ['getCollectionById'] });

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
                <span>Adicionar item</span>
              </ErrorHeader>

              <ModalContent>
                <Input
                  label="Nome"
                  placeholder="Digite o nome"
                  error={errors.name?.message}
                  {...register('name', { required: true })}
                />

                <Input
                  label="Descrição"
                  placeholder="Digite a descrição"
                  error={errors.description?.message}
                  {...register('description', { required: true })}
                />

                <Input
                  label="URL da Imagem"
                  placeholder="Cole a URL da imagem"
                  error={errors.image?.message}
                  {...register('image', { required: true })}
                />

                <div style={{ margin: '12px 0' }}>
                  <LabelCheckbox
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <input
                      type="checkbox"
                      style={{ width: 16, height: 16 }}
                      {...register('highlighted')}
                    />
                    Destaque
                  </LabelCheckbox>
                </div>
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
        <WarningModal.ObsInfo>
          Item adicionado com sucesso!
        </WarningModal.ObsInfo>
      </WarningModal>
    </>
  );
};

export default AddItemModal;
