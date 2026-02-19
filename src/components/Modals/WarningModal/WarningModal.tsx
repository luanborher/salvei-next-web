import Modal from '@/components/Modal/Modal';

import {
  Button,
  ButtonsContainer,
  ConfirmModalContainer,
  Message,
  ModalHeader,
  Icon,
  ObsInfo,
} from './styles';

interface Props {
  open: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
  title?: string;
  confirmText?: string;
  hasCancelButton?: boolean;
  cancelText?: string;
  type: 'warning' | 'info' | 'error' | 'success' | 'default';
  disabled?: boolean;
}

const WarningModal = ({
  open,
  onConfirm,
  onCancel,
  children,
  title = '',
  confirmText = 'Voltar',
  hasCancelButton = false,
  cancelText = 'Cancelar',
  type,
  disabled = false,
}: Props) => {
  const variant = {
    error: 'errorPrimary',
    warning: 'warningPrimary',
    info: 'errorPrimary',
    success: 'successPrimary',
    default: 'defaultPrimary',
  } as any;

  const outlined = {
    error: 'errorOutlined',
    warning: 'warningOutlined',
    info: 'errorOutlined',
    success: 'successOutlined',
    default: 'defaultOutlined',
  } as any;

  if (!open) {
    return null;
  }

  return (
    <Modal>
      <ConfirmModalContainer>
        <ModalHeader>
          {type === 'error' && <Icon src="/icons/alert.svg" />}
          {type === 'warning' && <Icon src="/icons/attention.svg" />}
          {type === 'info' && <Icon src="/icons/alert.svg" />}
          {type === 'success' && <Icon src="/icons/success.svg" />}

          {title}
        </ModalHeader>

        {children}

        <ButtonsContainer>
          {hasCancelButton && (
            <Button
              type="button"
              $variant={outlined[type]}
              onClick={() => {
                onCancel?.();
              }}
            >
              {cancelText}
            </Button>
          )}

          <Button
            type="button"
            $variant={variant[type]}
            onClick={onConfirm}
            disabled={disabled}
          >
            {confirmText}
          </Button>
        </ButtonsContainer>
      </ConfirmModalContainer>
    </Modal>
  );
};

WarningModal.Message = Message;
WarningModal.ObsInfo = ObsInfo;

export default WarningModal;
