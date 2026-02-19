/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ theme, checked }) =>
    checked ? theme.colors.success : theme.colors.white};
  border: 1px solid
    ${({ theme, checked }) =>
    checked ? theme.colors.success : theme.colors.border};
  border-radius: 6px;
  position: relative;
  transition: all 150ms;

  &::after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 12px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const Checkbox = ({
  checked,
  onChange,
  children,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxContainer as="label">
      <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
      <StyledCheckbox checked={checked} />
      {children}
    </CheckboxContainer>
  );
};

export default Checkbox;
