import React from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button/Button';
import CloseIcon from '@/components/Icons/CloseIcon';

import {
  Overlay,
  Sidebar,
  Header,
  Title,
  Content,
  Field,
  Footer,
} from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
  onClear: () => void;
  onApply: () => void;
}

const FilterSidebar: React.FC<Props> = ({
  open,
  onClose,
  onClear,
  onApply,
}) => {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Sidebar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Header>
          <Title>Filtrar</Title>
          <CloseIcon onClick={onClose} />
        </Header>

        <Content>
          <Field>
            <Input label="Cidade" placeholder="Selecione ou pesquise" />
          </Field>

          <Field>
            <Input label="Bairro" placeholder="Selecione ou pesquise" />
          </Field>
        </Content>

        <Footer>
          <Button onClick={onApply}>Filtrar</Button>
          <Button outline onClick={onClear}>
            Limpar
          </Button>
        </Footer>
      </Sidebar>
    </Overlay>
  );
};

export default FilterSidebar;
