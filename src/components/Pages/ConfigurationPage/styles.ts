import styled from 'styled-components';

export const ConfigurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 667px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
`;

export const LockIconWrapper = styled.div`
  position: absolute;
  right: 32px;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PermissionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PermissionsTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.label};
  margin: 0;
`;

export const PermissionsContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const ToggleItem = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ToggleLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.secondary2};
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

export const PasswordInput = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid #d6d5d3;
  padding: 12px;
  outline: 0;

  span {
    width: 8px;
    height: 8px;
    background-color: #5d574f;
    border-radius: 50%;
    margin-right: 4px;
  }
`;
