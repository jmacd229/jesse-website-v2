export default ({ ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 3H8v4h8V3z" />
  </svg>
);
