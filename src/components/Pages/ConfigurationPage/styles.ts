import styled from 'styled-components';

export const ConfigurationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InputContainer = styled.div`
  width: 100%;
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

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
