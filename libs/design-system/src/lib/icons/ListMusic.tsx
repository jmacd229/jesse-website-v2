export default ({ ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M16 5H3" />
    <path d="M11 12H3" />
    <path d="M11 19H3" />
    <path d="M21 16V5" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
