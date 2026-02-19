const ArrowLeftIcon = ({ onClick, ...rest }: { onClick?: () => void }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
    onClick={onClick}
    {...rest}
  >
    <path
      d="M15 16.6162C15 17.5071 13.9229 17.9533 13.2929 17.3233L8.70711 12.7375C8.31658 12.347 8.31658 11.7138 8.70711 11.3233L13.2929 6.7375C13.9229 6.10754 15 6.5537 15 7.44461V16.6162Z"
      fill="#342D23"
    />
  </svg>
);

export default ArrowLeftIcon;
