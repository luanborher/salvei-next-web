const EyeIcon = ({ onClick, ...rest }: { onClick?: () => void }) => (
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
      d="M20.45 14.93C18.45 17.34 15.52 18.88 12.25 18.88C8.98001 18.88 6.06 17.35 4.05 14.93C2.65 13.24 2.65 10.64 4.05 8.95C6.05 6.54 8.98001 5 12.25 5C15.52 5 18.44 6.53 20.45 8.95C21.85 10.64 21.85 13.24 20.45 14.93Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.25 15.02C10.549 15.02 9.17004 13.641 9.17004 11.94C9.17004 10.239 10.549 8.86 12.25 8.86C13.9511 8.86 15.33 10.239 15.33 11.94C15.33 13.641 13.9511 15.02 12.25 15.02Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyeIcon;
