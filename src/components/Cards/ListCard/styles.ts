/* eslint-disable default-case */
import styled from 'styled-components';

interface StatusBadgeProps {
  status: 'PENDING' | 'COMPLETED';
}

export const CardContainer = styled.div<StatusBadgeProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 108px;
  background: #1136db1a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 12px 16px 12px 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.99);
  }

  ${({ status }) => {
    switch (status) {
      case 'COMPLETED':
        return ' opacity: 0.3;';
      case 'PENDING':
        return 'opacity: 1;';
    }
  }}
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 140px;
  min-width: 140px;
  height: 82px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
`;

export const EnterpriseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 6px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  background: transparent;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StatusBadge = styled.div<StatusBadgeProps>`
  position: absolute;
  top: 8px;
  left: 14.42px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 12px;
  min-width: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.82);

  ${({ status }) => {
    switch (status) {
      case 'COMPLETED':
        return ' background: #34C447CC;';
      case 'PENDING':
        return ' background: #747373; ';
    }
  }}
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 11px;
  right: 14.42px;
  width: 32px;
  height: 32px;
  background: #deee04e5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.82);
  transition: all 0.3s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.07px;

  span {
    width: 4.12px;
    height: 4.12px;
    background: #ff8500;
    border-radius: 50%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  width: 100%;
`;

export const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #d6d5d3;
  margin: 0;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2dac3e;
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  border-radius: 24px;
  transition: 0.3s;

  &:before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const AddressText = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: #d6d5d3;
  margin: 0;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 10px;
  background: #7473731f;
  border-radius: 12px;
`;

export const InfoText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #747373;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 46px;
  right: 8px;
  background: #ffffff;
  border: 1px solid #d1d0d0;
  border-radius: 20px;
  box-shadow: 0px 2px 20.6px 0px #00000033;
  min-width: 178px;
  width: 178px;
  z-index: 1000;
  overflow: hidden;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const MenuOption = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const MenuOptionText = styled.span<{ $variant: 'delete' | 'edit' }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ $variant }) => ($variant === 'delete' ? '#DC2626' : '#5d574f')};
`;
