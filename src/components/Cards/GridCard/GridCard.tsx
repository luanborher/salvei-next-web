import React, { useState, useRef, useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useQueryClient } from '@tanstack/react-query';

import { LocationIcon } from '@/components/Icons/enterprises/CardIcons';
import handleError from '@/utils/handleToast';
import api from '@/services/api';

import Skeleton from 'react-loading-skeleton';
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
  updating?: boolean;
  documentId: number;
}

const GridCard: React.FC<EnterpriseCardProps> = ({
  title,
  description,
  status,
  imageUrl,
  platinum,
  updating,
  documentId,
}) => {
  const query = useQueryClient();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onMarkAsCompleted = async () => {
    setLoading(true);

    try {
      await api.patch(`/items/${documentId}`);
      query.invalidateQueries({
        queryKey: ['getCollectionById'],
        exact: false,
      });
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
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

  if (loading || updating) {
    return (
      <Skeleton
        width={392}
        height={312}
        baseColor="#202020"
        highlightColor="#444"
        borderRadius={12}
      />
    );
  }

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
