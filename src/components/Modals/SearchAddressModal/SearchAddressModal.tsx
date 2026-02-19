import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import Button from '@/components/Button/Button';
import SaveIcon from '@/components/Icons/SaveIcon';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  MapContainer,
  MapPlaceholder,
  ButtonsRow,
} from './styles';

interface SearchAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (address: string, coordinates: { lat: number; lng: number }) => void;
  initialAddress?: string;
}

const SearchAddressModal = ({
  isOpen,
  onClose,
  onSave,
  initialAddress = '',
}: SearchAddressModalProps) => {
  const [selectedPosition, setSelectedPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Configuração do Google Maps
  // NOTA: Substitua 'YOUR_GOOGLE_MAPS_API_KEY' pela sua chave da API do Google Maps
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  // Coordenadas padrão (São Paulo)
  const defaultCenter = {
    lat: -23.5505,
    lng: -46.6333,
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setSelectedPosition({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  }, []);

  const handleSave = () => {
    if (onSave && selectedPosition) {
      onSave('', selectedPosition);
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ArrowLeftIcon onClick={onClose} />
          <ModalTitle>Buscar empreendimento</ModalTitle>
        </ModalHeader>

        {/* <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="Pesquise no Google Maps"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </SearchInputWrapper> */}

        <MapContainer>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={selectedPosition || defaultCenter}
              zoom={13}
              onClick={handleMapClick}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {selectedPosition && <Marker position={selectedPosition} />}
            </GoogleMap>
          ) : (
            <MapPlaceholder>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 26C26.2091 26 28 24.2091 28 22C28 19.7909 26.2091 18 24 18C21.7909 18 20 19.7909 20 22C20 24.2091 21.7909 26 24 26Z"
                  stroke="#CECECE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 40C28 34 36 28.9706 36 22C36 15.3726 30.6274 10 24 10C17.3726 10 12 15.3726 12 22C12 28.9706 20 34 24 40Z"
                  stroke="#CECECE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Carregando mapa...</span>
            </MapPlaceholder>
          )}
        </MapContainer>

        <ButtonsRow>
          <Button type="button" outline onClick={onClose}>
            Cancelar
          </Button>
          <Button type="button" onClick={handleSave}>
            <SaveIcon />
            Salvar
          </Button>
        </ButtonsRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SearchAddressModal;
