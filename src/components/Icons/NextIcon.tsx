const NextIcon = ({ onClick, ...rest }: { onClick?: () => void }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
    {...rest}
  >
    <path
      d="M9 16.6162C9 17.5071 10.0771 17.9533 10.7071 17.3233L15.2929 12.7375C15.6834 12.347 15.6834 11.7138 15.2929 11.3233L10.7071 6.7375C10.0771 6.10754 9 6.5537 9 7.44461V16.6162Z"
      fill="#FFB666"
    />
  </svg>
);

export default NextIcon;
