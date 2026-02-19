import styled, { css } from 'styled-components';

export const ConfirmModalContainer = styled.div`
  width: 470px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 2px 6px 0px #00000040;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-size: 20px;
  font-weight: 600;
  font-style: 'SemiBold';
  color: ${({ theme }) => theme.colors.primary};
  line-height: 30px;

  svg {
    font-size: 4rem;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-style: 'SemiBold';
  color: #282828;
  line-height: 28px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

interface ButtonProps {
  $variant:
    | 'errorOutlined'
    | 'errorPrimary'
    | 'warningOutlined'
    | 'warningPrimary'
    | 'successOutlined'
    | 'successPrimary'
    | 'defaultOutlined'
    | 'defaultPrimary';
}

const errorOutlinedVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.error};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.error};
`;

const errorPrimaryVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.error};
  color: #ffffff;
`;

const warningOutlinedVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.secondary};
`;

const warningPrimaryVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.secondary};
  color: #ffffff;
`;

const successOutlinedVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.success};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.success};
`;

const successPrimaryVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.success};
  background: ${({ theme }) => theme.colors.success};
  color: #ffffff;
`;

const defaultOutlinedVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
`;

const defaultPrimaryVariant = css`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
`;

const variantStyles = {
  errorOutlined: errorOutlinedVariant,
  errorPrimary: errorPrimaryVariant,
  warningOutlined: warningOutlinedVariant,
  warningPrimary: warningPrimaryVariant,
  successOutlined: successOutlinedVariant,
  successPrimary: successPrimaryVariant,
  defaultOutlined: defaultOutlinedVariant,
  defaultPrimary: defaultPrimaryVariant,
};

export const Button = styled.button<ButtonProps>`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  font-weight: 800;
  font-size: 16px;
  line-height: 26px;

  transition: all 0.3s ease;

  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
`;

export const ObsInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #5f6980;
  line-height: 26px;
  text-align: center;
`;
