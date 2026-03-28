import styled from 'styled-components';

export const StyledInput = styled.input<{
  $hasPaddingRight?: boolean;
}>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background: #ffffff31;
  border-radius: 8px;
  border: 1px solid #d6d5d3;
  padding: 12px;
  padding-right: ${({ $hasPaddingRight }) =>
    $hasPaddingRight ? '40px' : '12px'};
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.area};
  color: ${({ theme }) => theme.colors.secondary};
  outline: 0;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.input};
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.placeholder};
    font-family: ${({ theme }) => theme.fonts.area};
  }
`;

export const InputWrapper = styled.div<{ $hasLabel?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  svg {
    position: absolute;
    right: 14px;
    top: ${({ $hasLabel }) => ($hasLabel ? 'calc(50% + 16px)' : 'calc(50%)')};
    transform: translateY(-50%);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary5};
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.label};

  span {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const ErrorMessage = styled.h1`
  position: absolute;
  bottom: -14px;
  left: 4px;
  margin-top: -4px;
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.error};
`;
