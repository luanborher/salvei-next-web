const LockIcon = ({ onClick, ...rest }: { onClick?: () => void }) => (
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
      d="M3.75977 14.1209C3.75977 12.3809 5.16977 10.9609 6.91977 10.9609H17.0898C18.8298 10.9609 20.2498 12.3709 20.2498 14.1209V18.1109C20.2498 19.8509 18.8398 21.2709 17.0898 21.2709H6.91977C5.16977 21.2709 3.75977 19.8609 3.75977 18.1109V14.1209Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.84961 7.91953C6.84961 5.07953 9.1596 2.76953 11.9996 2.76953C14.8396 2.76953 17.1496 5.07953 17.1496 7.91953V10.9695H6.84961V7.91953Z"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.1777V15.5977"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9997 16.1186C11.4309 16.1186 10.9697 15.6574 10.9697 15.0886C10.9697 14.5197 11.4309 14.0586 11.9997 14.0586C12.5686 14.0586 13.0297 14.5197 13.0297 15.0886C13.0297 15.6574 12.5686 16.1186 11.9997 16.1186Z"
      fill="#FF8500"
      stroke="#FF8500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LockIcon;
