import styled from 'styled-components';

export const EnterpriseList = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 16px;
  row-gap: 24px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 24px;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 23px;

  p {
    width: 413px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #747373;
  }
`;
