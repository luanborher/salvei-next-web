const EyeClosedIcon = ({ onClick, ...rest }: { onClick?: () => void }) => (
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
      d="M14.52 18.63C13.71 18.84 12.87 18.94 12 18.94C8.73 18.94 5.8 17.41 3.8 14.99C2.4 13.3 2.4 10.69 3.8 9.00999C3.96 8.80999 4.14 8.61999 4.32 8.42999"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3998 17.41L6.58984 6.59C8.17984 5.61 10.0198 5.06 11.9998 5.06C15.2698 5.06 18.1998 6.59 20.1998 9.01C21.5998 10.69 21.5998 13.31 20.1998 14.99C19.3998 15.95 18.4498 16.77 17.3998 17.41Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1801 14.18L9.82007 9.81998C10.3701 9.25998 11.1501 8.91998 12.0001 8.91998C13.7101 8.91998 15.0801 10.29 15.0801 12C15.0801 12.85 14.7301 13.62 14.1801 14.18Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 2.75L6.59 6.59L9.82 9.82L14.18 14.18L17.41 17.41L21.25 21.25"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyeClosedIcon;
