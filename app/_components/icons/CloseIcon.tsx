import { SVGProps } from "react";

export default function CloseIcon({
  fill = "#1E3A8A",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="10" fill={fill} r="10" />
      <path
        d="M14 6L6.01385 14M6 6L13.9861 14"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
}
