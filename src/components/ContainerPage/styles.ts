import styled from 'styled-components';

export const ContainerPageContainer = styled.div`
  padding: 32px 24px 32px 135px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #111111;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;
