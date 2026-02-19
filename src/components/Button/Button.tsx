import { StyledButton } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, outline, ...props }: IButtonProps) => {
  return (
    <StyledButton $outline={outline} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
