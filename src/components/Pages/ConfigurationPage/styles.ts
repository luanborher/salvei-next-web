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
  background-color: #000000;
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
