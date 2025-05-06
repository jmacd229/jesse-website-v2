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
    aria-hidden="true"
    {...rest}
  >
    <path d="M10 9.5 8 12l2 2.5" />
    <path d="m14 9.5 2 2.5-2 2.5" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);
