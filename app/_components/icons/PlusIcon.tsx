import { SVGProps } from "react";

export default function PlusIcon({
  stroke = "#2F3742",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="64" viewBox="0 0 64 64" width="64" {...props}>
      <path
        d="M16 32H48"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M32 48V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}
