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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RequirementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  color: #aeaba7;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
`;

export const RequirementIcon = styled.div`
  width: 2.5px;
  height: 2.5px;
  border-radius: 50%;
  background-color: #aeaba7;
  margin-left: 10px;
  margin-right: 10px;
`;
