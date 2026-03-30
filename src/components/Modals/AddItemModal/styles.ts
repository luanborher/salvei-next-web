import styled from 'styled-components';

export const ModalContainer = styled.div``;

export const ModalForm = styled.form`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  background-color: #414141;
  padding: 24px;
  box-shadow: 0px 0px 10px 0px #00000040;
`;

export const ErrorHeader = styled.div`
  width: 100%;

  span {
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LabelCheckbox = styled.label`
  color: #85817b;
`;
