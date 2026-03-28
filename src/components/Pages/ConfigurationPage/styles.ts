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
