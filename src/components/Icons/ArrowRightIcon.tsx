const ArrowRightIcon = ({
  isColor,
  onClick,
  ...rest
}: {
  isColor?: boolean;
  onClick?: () => void;
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...rest}
  >
    <path
      d="M10 8.20711C10 7.76165 10.5386 7.53857 10.8536 7.85355L14.6464 11.6464C14.8417 11.8417 14.8417 12.1583 14.6464 12.3536L10.8536 16.1464C10.5386 16.4614 10 16.2383 10 15.7929V8.20711Z"
      fill={isColor ? 'currentColor' : '#4D5DBD'}
    />
  </svg>
);

export default ArrowRightIcon;
