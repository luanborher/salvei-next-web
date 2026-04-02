import styled from 'styled-components';

export const List = styled.div<{ $isGrid: boolean }>`
  display: flex;
  flex-wrap: ${({ $isGrid }) => ($isGrid ? 'wrap' : 'nowrap')};
  flex-direction: ${({ $isGrid }) => ($isGrid ? 'row' : 'column')};
  gap: ${({ $isGrid }) => ($isGrid ? '16px' : '12px')};
  row-gap: 24px;
  align-items: ${({ $isGrid }) => ($isGrid ? 'center' : 'stretch')};
  justify-items: center;
  margin-top: 24px;
  justify-content: center;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const ViewToggle = styled.div`
  height: 48px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
  background: #0b1223;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ViewToggleButton = styled.button<{ $active: boolean }>`
  height: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ $active }) => ($active ? '#1f56ff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#d6d5d3')};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
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
