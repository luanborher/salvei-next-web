import { ModalBackground } from './styles';

interface Props {
  children: React.ReactNode;
  modalStyle?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
}

const Modal = ({ children, modalStyle, onMouseDown, onClick }: Props) => {
  return (
    <ModalBackground
      style={modalStyle}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      {children}
    </ModalBackground>
  );
};

export default Modal;
