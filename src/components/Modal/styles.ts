import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 99999;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: grid;
  place-items: center;
`;
