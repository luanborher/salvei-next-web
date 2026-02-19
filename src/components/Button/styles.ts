import styled from 'styled-components';

export const StyledButton = styled.button<{ $outline?: boolean }>`
  width: auto;
  height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  outline: 0;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  background: ${({ theme, $outline }) =>
    $outline ? '#ffffff' : theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: ${({ theme, $outline }) =>
    $outline ? theme.colors.primary : '#ffffff'};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, $outline }) =>
      $outline ? '#F7F2F2' : theme.colors.primary2};
  }
`;
