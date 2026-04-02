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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const hasImage = Boolean(imageUrl?.trim());
  const showFallbackImage = !hasImage || hasImageError || !isImageLoaded;

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

  useEffect(() => {
    setIsImageLoaded(false);
    setHasImageError(false);
  }, [imageUrl]);

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
        {showFallbackImage && (
          <EnterpriseImage
            src="/ticka_logo.svg"
            alt="Ticka"
            style={{
              objectFit: 'contain',
              padding: '18px',
              background: '#0f1530',
            }}
          />
        )}

        {hasImage && !hasImageError && (
          <EnterpriseImage
            src={imageUrl}
            alt={title}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setHasImageError(true)}
            style={{
              display: isImageLoaded ? 'block' : 'none',
            }}
          />
        )}

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
