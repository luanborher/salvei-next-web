import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

const expandAnimationLogo = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  background: #000000;
  border-right: 1px solid #d1d0d0d2;
  padding: 2.5px;
  transition: opacity 0.8s ease, max-width 0.8s ease;
  user-select: none;
`;

export const NavbarHeader = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 38px;
  color: ${({ theme }) => theme.colors.secondary5};
  font-size: 18px;
  font-weight: 800;
  gap: 12px;
`;

export const LogoIcon = styled.img`
  object-fit: cover;
  visibility: visible;
  animation: ${expandAnimationLogo} 1s;
`;

interface NavLinkProps {
  selected: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  height: 50px;
  width: 100%;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: transparent;
  text-decoration: none;

  svg {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.secondary5};
  }

  &:hover {
    background: #00000014;
  }
`;

export const NavLinkText = styled.p<{ selected?: boolean }>`
  min-width: 215px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.secondary5};
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 32px;
  height: 32px;
`;

interface NavProps {
  open: boolean;
}

const expandAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavWrapper = styled.nav<NavProps>`
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  ${({ open }: NavProps) =>
    open
      ? css`
          ${NavLinkText} {
            visibility: visible;
            animation: ${expandAnimation} 1s ease forwards;
          }
          ${NavIconsMenu} {
            overflow-y: auto;
          }
        `
      : css`
          ${NavLinkText} {
            visibility: hidden;
            max-width: 0;
            padding: 0;
          }
          ${NavLink} {
            gap: 0;
            justify-content: center;
          }
          ${LogoffButton} {
            gap: 0;
            justify-content: center;
          }
        `}
`;

export const NavIconsMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: calc(100vh - 345px);
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding: 0 21.5px;
  flex-shrink: 0;

  > * {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const LogoffButton = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: 50px;
  min-height: 50px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: transparent;
  text-decoration: none;
  cursor: pointer;

  svg {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.secondary5};
  }

  &:hover {
    background: #00000014;
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 140px;
  max-height: 140px;
  padding: 0 21.5px 32px 21.5px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ArrowBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #d1d0d0;
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;
