import styled from 'styled-components';

export const LoginForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: start;
  gap: 32px;
  flex-direction: column;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  outline: 0;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 800;
  line-height: 26px;
  color: #ffffff;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
  }
`;

export const Center = styled.div`
  width: 529px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid #e5e5e5;
  border-radius: 20px;
`;

export const TitleForm = styled.h1`
  font-weight: 800;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubtitleForm = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  font-style: 'semi-bold';
  font-family: ${({ theme }) => theme.fonts.area};
  color: ${({ theme }) => theme.colors.secondary3};
`;

export const InputForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Image = styled.img`
  width: 206px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
