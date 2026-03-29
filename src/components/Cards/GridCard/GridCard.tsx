import React, { useState, useRef, useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';

import { LocationIcon } from '@/components/Icons/enterprises/CardIcons';

import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from 'react-icons/io5';
import handleError from '@/utils/handleToast';
import api from '@/services/api';
import { useQueryClient } from '@tanstack/react-query';
import {
  CardContainer,
  ImageContainer,
  EnterpriseImage,
  MenuButton,
  MenuIcon,
  ContentContainer,
  HeaderRow,
  Title,
  Address,
  AddressText,
  HeaderColumn,
  StatusIcon,
} from './styles';

export interface EnterpriseCardProps {
  title: string;
  description: string;
  status: 'PENDING' | 'COMPLETED';
  imageUrl: string;
  platinum?: boolean;
  documentId: number;
}

const GridCard: React.FC<EnterpriseCardProps> = ({
  title,
  description,
  status,
  imageUrl,
  platinum,
  documentId,
}) => {
  const query = useQueryClient();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onMarkAsCompleted = async () => {
    try {
      await api.patch(`/items/${documentId}`);

      query.invalidateQueries({ queryKey: ['getCollectionById'] });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <CardContainer status={status}>
      <ImageContainer ref={menuRef}>
        <EnterpriseImage src={imageUrl} alt={title} />

        {status === 'PENDING' ? (
          <StatusIcon onClick={onMarkAsCompleted}>
            <IoCheckmarkCircleOutline size={30} color="#00FF0DB0" />
          </StatusIcon>
        ) : (
          <StatusIcon onClick={onMarkAsCompleted}>
            <IoCheckmarkCircle size={30} color="#00FF0DB0" />
          </StatusIcon>
        )}

        {platinum && (
          <MenuButton onClick={onMenuClick}>
            <MenuIcon>
              <FaTrophy size={20} color="#000000" />
            </MenuIcon>
          </MenuButton>
        )}
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

export default GridCard;
