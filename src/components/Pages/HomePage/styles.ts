import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  gap: 16px;
  row-gap: 24px;
  justify-items: center;
  flex-direction: column;
  margin-top: 24px;
  justify-content: center;

  color: #fff;
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
