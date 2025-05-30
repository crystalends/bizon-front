import { SVGProps } from "react";

export default function ArrowRightIcon({
  fill = "#2F3742",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.78322 6L4 11.2965L4.98489 12L9.27061 6L4.98489 0L4 0.703496L7.78322 6Z"
        fill={fill}
      />
    </svg>
  );
}
