import styled from 'styled-components';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.label};

  span {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
