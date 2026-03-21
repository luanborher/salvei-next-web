import React, { useState, useRef, useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';

import { LocationIcon } from '@/components/Icons/enterprises/CardIcons';

import {
  CardContainer,
  ImageContainer,
  EnterpriseImage,
  StatusBadge,
  MenuButton,
  MenuIcon,
  ContentContainer,
  HeaderRow,
  Title,
  Address,
  AddressText,
  HeaderColumn,
} from './styles';

export interface EnterpriseCardProps {
  title: string;
  description: string;
  status: 'ativo' | 'pendente' | 'em-andamento';
  imageUrl: string;
  platinum?: boolean;
}

const EntretenimentoCard: React.FC<EnterpriseCardProps> = ({
  title,
  description,
  status,
  imageUrl,
  platinum,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'Finalizado';
      case 'pendente':
        return 'Pendente';
      case 'em-andamento':
        return 'Em andamento';
      default:
        return '';
    }
  };

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <CardContainer status={status}>
      <ImageContainer ref={menuRef}>
        <EnterpriseImage src={imageUrl} alt={title} />

        <StatusBadge status={status}>{getStatusLabel(status)}</StatusBadge>

        {platinum && (
          <MenuButton onClick={onMenuClick}>
            <MenuIcon>
              <FaTrophy size={20} color="#000000" />
            </MenuIcon>
          </MenuButton>
        )}

        {/*
        {isMenuOpen && (
          <DropdownMenu>
            <MenuOption onClick={handleDelete}>
              <TrashCardIcon />
              <MenuOptionText $variant="delete">Excluir</MenuOptionText>
            </MenuOption>

            <MenuOption onClick={handleEdit}>
              <EditCardIcon />
              <MenuOptionText $variant="edit">Editar</MenuOptionText>
            </MenuOption>
          </DropdownMenu>
        )} */}
      </ImageContainer>

      <ContentContainer>
        <HeaderRow>
          <HeaderColumn>
            <Title>{title}</Title>

            <Address>
              <LocationIcon />
              <AddressText>{description}</AddressText>
            </Address>
          </HeaderColumn>
        </HeaderRow>
      </ContentContainer>
    </CardContainer>
  );
};

export default EntretenimentoCard;
