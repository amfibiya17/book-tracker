import type { SVGProps } from "react";

function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation" {...props}>
      <path
        fill="currentColor"
        d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
      />
    </svg>
  );
}

export default HamburgerIcon;
