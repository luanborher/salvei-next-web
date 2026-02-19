import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 1090px) {
    grid-template-columns: 450px 1fr;
  }

  @media (max-width: 990px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageCOntainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 228.16px;
  height: 142.23px;
`;
