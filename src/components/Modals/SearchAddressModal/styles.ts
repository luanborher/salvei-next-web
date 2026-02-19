import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 24px;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  width: 600px;
  background: #fefefe;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const ModalHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 48px 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.input};
  background: white;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 354px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.text2};
  font-size: 14px;
`;

export const ButtonsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  svg {
    transform: scaleX(-1);
  }
`;
