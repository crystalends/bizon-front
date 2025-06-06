import { SVGProps } from "react";

export default function ArrowDown({
  fill = "#2F3742",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_208_7044)">
        <path
          d="M7.99962 10.0783L1.43555 5.38971L0.56369 6.61031L7.99962 11.9217L15.4355 6.61031L14.5637 5.38971L7.99962 10.0783Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_208_7044">
          <rect
            fill="white"
            height="16"
            transform="translate(16) rotate(90)"
            width="16"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
