const DeleteIcon = ({ onClick }: { onClick?: () => void }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <rect x="0.5" y="0.5" width="24" height="24" rx="12" fill="#FEFEFD" />
    <rect x="0.5" y="0.5" width="24" height="24" rx="12" stroke="#DE3737" />
    <path
      d="M17 8L8 17M8 8L17 17"
      stroke="#DE3737"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DeleteIcon;
