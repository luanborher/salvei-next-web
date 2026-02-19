'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import SearchAddressModal from '@/components/Modals/SearchAddressModal/SearchAddressModal';
import SaveIcon from '@/components/Icons/SaveIcon';
import Button from '@/components/Button/Button';
import ImageIcon from '@/components/Icons/ImageIcon';
import UploadIcon from '@/components/Icons/UploadIcon';
import Input from '@/components/Input';
import MapIcon from '@/components/Icons/MapIcon';
import SearchIcon from '@/components/Icons/SearchIcon';
import HouseOutIcon from '@/components/Icons/HouseOutIcon';
import NextIcon from '@/components/Icons/NextIcon';
import PrevIcon from '@/components/Icons/PrevIcon';
import TowerIcon from '@/components/Icons/TowerIcon';
import ComercialIcon from '@/components/Icons/ComercialIcon';
import Select from '@/components/Select/Select';

import PlusIcon from '@/components/Icons/PlusIcon';
import WarningModal from '@/components/Modals/WarningModal/WarningModal';
import { formatCurrencyMask } from '@/utils/formatCurrency';
import DeleteIcon from '@/components/Icons/enterprises/DeleteIcon';
import PlusImageIcon from '@/components/Icons/enterprises/PlusImageIcon';
import {
  HeaderRight,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  FormContent,
  SectionTitle,
  PhotoUploadSection,
  Label,
  PhotoUploadArea,
  PhotoText,
  PreviewGrid,
  PreviewImage,
  UploadButton,
  UploaderIcon,
  HiddenFileInput,
  FormRow,
  LocationSection,
  LocationText,
  CharacteristicsTitle,
  CounterRow,
  CounterGroup,
  CounterIcon,
  CounterLabel,
  CounterControls,
  CounterValue,
  PageContent,
  CounterInput,
  ShowMoreButton,
  ImageWrapper,
} from './styles';

const EnterpriseForm = ({ isUpdate }: { isUpdate?: boolean }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'empreendimento' | 'servicos'>(
    'empreendimento',
  );
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: isUpdate ? 'Empreendimento 1' : '',
    cnpj: isUpdate ? '12.345.678/0001-90' : '',
    incorporador: '',
    areasComuns: '',
    imoveis: 0,
    torres: 0,
    salasComerciais: 0,
    status: '',
    address: '',
    value: '',
    service: '',
    coordinates: { lat: 0, lng: 0 },
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [visibleImagesCount, setVisibleImagesCount] = useState(4);
  const previewGridRef = useRef<HTMLDivElement>(null);

  const incorporadorOptions = [
    { value: 'incorporador1', label: 'Incorporador 1' },
    { value: 'incorporador2', label: 'Incorporador 2' },
  ];

  const captadorOptions = [
    { value: 'captador1', label: 'Captador 1' },
    { value: 'captador2', label: 'Captador 2' },
  ];

  const areasOptions = [
    { value: 'piscina', label: 'Piscina' },
    { value: 'academia', label: 'Academia' },
    { value: 'churrasqueira', label: 'Churrasqueira' },
  ];

  const statusOptions = [
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' },
    { value: 'em-construcao', label: 'Em construção' },
  ];

  const serviceOptions = [
    { value: 'limpeza', label: 'Limpeza' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'manutencao', label: 'Manutenção' },
  ];

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);

    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...urls]);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    URL.revokeObjectURL(previewUrls[indexToRemove]);

    setPreviewUrls(prev => prev.filter((_, index) => index !== indexToRemove));
    setSelectedImages(prev =>
      prev.filter((_, index) => index !== indexToRemove),
    );

    // Ajusta o contador de imagens visíveis se necessário
    if (visibleImagesCount > 1) {
      setVisibleImagesCount(prev => Math.max(1, prev - 1));
    }
  };

  const handleShowMoreImages = () => {
    setVisibleImagesCount(prev => Math.min(prev + 1, previewUrls.length));

    setTimeout(() => {
      if (previewGridRef.current) {
        previewGridRef.current.scrollTo({
          left: previewGridRef.current.scrollWidth,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  const handleIncrement = (field: 'imoveis' | 'torres' | 'salasComerciais') => {
    setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const handleDecrement = (field: 'imoveis' | 'torres' | 'salasComerciais') => {
    setFormData(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
  };

  const handleSave = () => {
    console.log('Saving:', formData, selectedImages);
    setShowSuccessModal(true);
  };

  const handleCancel = () => {
    setShowAlertModal(true);
  };

  const handleAddressSave = (
    address: string,
    coordinates: { lat: number; lng: number },
  ) => {
    setFormData({ ...formData, address, coordinates });
    setIsAddressModalOpen(false);
  };

  const renderActions = () => {
    return (
      <HeaderRight>
        <Button type="button" outline onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="button" onClick={handleSave}>
          <SaveIcon />
          Salvar
        </Button>
      </HeaderRight>
    );
  };

  console.log(previewUrls.length, visibleImagesCount);

  return (
    <ContainerPage
      title={
        isUpdate
          ? 'Editar empreendimento - Empreendimento 1'
          : 'Adicionar novo empreendimento'
      }
      rightContent={renderActions()}
      backButton
      onBackFunction={() => setShowAlertModal(true)}
      pageStyle={{ overflowY: 'hidden' }}
    >
      <PageContent>
        {isUpdate ? (
          <Breadcrumb>
            <BreadcrumbItem>Empreendimentos</BreadcrumbItem>

            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 12.75L5.75 6.75L0.75 0.75"
                stroke="#85817B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <BreadcrumbItem>Detalhes</BreadcrumbItem>

            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 12.75L5.75 6.75L0.75 0.75"
                stroke="#85817B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <BreadcrumbItem>Editar</BreadcrumbItem>
          </Breadcrumb>
        ) : (
          <Breadcrumb>
            <BreadcrumbItem>Empreendimentos</BreadcrumbItem>

            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 12.75L5.75 6.75L0.75 0.75"
                stroke="#85817B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <BreadcrumbItem>Adicionar</BreadcrumbItem>
          </Breadcrumb>
        )}

        <Tabs>
          <Tab
            $active={activeTab === 'empreendimento'}
            onClick={() => setActiveTab('empreendimento')}
          >
            Empreendimento
          </Tab>
          <Tab
            $active={activeTab === 'servicos'}
            onClick={() => setActiveTab('servicos')}
          >
            Serviços
          </Tab>
        </Tabs>

        <FormContent>
          {activeTab === 'empreendimento' && (
            <>
              <SectionTitle>Informações do empreendimento</SectionTitle>

              <PhotoUploadSection>
                <Label>
                  Fotos <span>*</span>
                </Label>

                <PhotoUploadArea>
                  {previewUrls.length === 0 ? (
                    <>
                      <ImageIcon />
                      <PhotoText>JPEG ou PNG</PhotoText>
                    </>
                  ) : (
                    <PreviewGrid ref={previewGridRef}>
                      {previewUrls
                        .slice(0, visibleImagesCount)
                        .map((url, index) => (
                          <ImageWrapper key={index}>
                            <PreviewImage src={url} alt={`Preview ${index}`} />
                            <DeleteIcon
                              onClick={() => handleRemoveImage(index)}
                            />
                          </ImageWrapper>
                        ))}

                      {(previewUrls?.length || 0) > visibleImagesCount && (
                        <ShowMoreButton onClick={handleShowMoreImages}>
                          <PlusImageIcon />
                        </ShowMoreButton>
                      )}
                    </PreviewGrid>
                  )}
                </PhotoUploadArea>

                <UploadButton>
                  Selecionar imagens
                  <UploaderIcon>
                    <UploadIcon />
                  </UploaderIcon>
                  <HiddenFileInput
                    type="file"
                    accept="image/jpeg,image/png"
                    multiple
                    onChange={handleImageSelect}
                  />
                </UploadButton>
              </PhotoUploadSection>

              <FormRow>
                <Input
                  type="text"
                  label="Nome do empreendimento"
                  placeholder="Digite o nome do empreendimento"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <Input
                  type="text"
                  label="CNPJ"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={e =>
                    setFormData({ ...formData, cnpj: e.target.value })
                  }
                  required
                />
              </FormRow>

              <LocationSection>
                <MapIcon />

                <LocationText>
                  Busque a localização do empreendimento
                </LocationText>

                <Button
                  onClick={() => setIsAddressModalOpen(true)}
                  style={{ height: '50px', minWidth: '171px' }}
                >
                  <SearchIcon color="#ffffff" />
                  Buscar
                </Button>
              </LocationSection>

              <FormRow>
                <Select
                  label="Incorporador (Opcional)"
                  placeholder="Selecione ou pesquise"
                  options={incorporadorOptions || []}
                  value={{
                    value: formData.incorporador,
                    label: formData.incorporador,
                  }}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      incorporador: value?.value || '',
                    })
                  }
                />

                <Select
                  label="Captador (Opcional)"
                  placeholder="Selecione ou pesquise"
                  options={captadorOptions || []}
                  value={{
                    value: formData.areasComuns,
                    label: formData.areasComuns,
                  }}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      areasComuns: value?.value || '',
                    })
                  }
                />
              </FormRow>

              <CharacteristicsTitle>Características</CharacteristicsTitle>

              <CounterRow>
                <CounterGroup>
                  <CounterLabel>Quantidade de imóveis</CounterLabel>

                  <CounterControls>
                    <CounterIcon>
                      <HouseOutIcon />
                    </CounterIcon>

                    <CounterInput>
                      <PrevIcon onClick={() => handleDecrement('imoveis')} />
                      <CounterValue>{formData.imoveis}</CounterValue>
                      <NextIcon onClick={() => handleIncrement('imoveis')} />
                    </CounterInput>
                  </CounterControls>
                </CounterGroup>

                <CounterGroup>
                  <CounterLabel>Quantidade de torres</CounterLabel>

                  <CounterControls>
                    <CounterIcon>
                      <TowerIcon />
                    </CounterIcon>

                    <CounterInput>
                      <PrevIcon onClick={() => handleDecrement('torres')} />
                      <CounterValue>{formData.torres}</CounterValue>
                      <NextIcon onClick={() => handleIncrement('torres')} />
                    </CounterInput>
                  </CounterControls>
                </CounterGroup>

                <CounterGroup>
                  <CounterLabel>Quantidade de salas comerciais</CounterLabel>

                  <CounterControls>
                    <CounterIcon>
                      <ComercialIcon />
                    </CounterIcon>

                    <CounterInput>
                      <PrevIcon
                        onClick={() => handleDecrement('salasComerciais')}
                      />
                      <CounterValue>{formData.salasComerciais}</CounterValue>
                      <NextIcon
                        onClick={() => handleIncrement('salasComerciais')}
                      />
                    </CounterInput>
                  </CounterControls>
                </CounterGroup>
              </CounterRow>

              <FormRow>
                <Select
                  label="Áreas comuns"
                  required
                  placeholder="Selecione ou pesquise"
                  options={areasOptions || []}
                  value={{
                    value: formData.areasComuns,
                    label: formData.areasComuns,
                  }}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      areasComuns: value?.value || '',
                    })
                  }
                />

                <Select
                  label="Status"
                  required
                  placeholder="Selecione"
                  options={statusOptions || []}
                  value={{
                    value: formData.status,
                    label: formData.status,
                  }}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      status: value?.value || '',
                    })
                  }
                />
              </FormRow>
            </>
          )}

          {activeTab === 'servicos' && (
            <>
              <SectionTitle>Serviços</SectionTitle>

              <FormRow>
                <Select
                  label="Serviço"
                  required
                  placeholder="Selecione ou pesquise"
                  options={serviceOptions || []}
                  value={{
                    value: formData.service,
                    label: formData.service,
                  }}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      service: value?.value || '',
                    })
                  }
                />

                <Input
                  label="Valor"
                  required
                  placeholder="R$0"
                  maskFunction={formatCurrencyMask}
                  value={formData.value}
                  onChange={value =>
                    setFormData({
                      ...formData,
                      value: formatCurrencyMask(value.target.value),
                    })
                  }
                />
              </FormRow>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="button" style={{ marginBottom: '24px' }}>
                  <PlusIcon />
                  Adicionar
                </Button>
              </div>
            </>
          )}
        </FormContent>

        <SearchAddressModal
          isOpen={isAddressModalOpen}
          onClose={() => setIsAddressModalOpen(false)}
          onSave={handleAddressSave}
          initialAddress={formData.address}
        />

        <WarningModal
          type="success"
          open={showSuccessModal}
          confirmText="Voltar"
          onConfirm={() => setShowSuccessModal(false)}
        >
          <WarningModal.Message>Sucesso!</WarningModal.Message>
          <WarningModal.ObsInfo>
            Empreendimento adicionado com sucesso!
          </WarningModal.ObsInfo>
        </WarningModal>

        <WarningModal
          type="error"
          open={showAlertModal}
          onCancel={() => setShowAlertModal(false)}
          hasCancelButton
          cancelText="Cancelar"
          confirmText="Descartar"
          onConfirm={() => router.back()}
        >
          <WarningModal.Message>Atenção!</WarningModal.Message>
          <WarningModal.ObsInfo>
            Tem certeza que deseja descartar todas as alterações feitas?
          </WarningModal.ObsInfo>
        </WarningModal>
      </PageContent>
    </ContainerPage>
  );
};

export default EnterpriseForm;
