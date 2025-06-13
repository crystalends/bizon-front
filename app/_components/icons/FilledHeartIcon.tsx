import { SVGProps } from "react";

export default function FilledHeartIcon({
  fill = "#1E3A8A",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="28"
      viewBox="0 0 31 28"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_738_10750)">
        <path
          d="M15.5005 28C15.8105 28 16.2534 27.7933 16.5781 27.6015C24.8879 22.2878 30.1573 16.1033 30.1573 9.81548C30.1573 4.59039 26.5707 0.90036 21.936 0.90036C19.0577 0.90036 16.8437 2.49446 15.5005 4.92987C14.187 2.50922 11.9434 0.90036 9.06514 0.90036C4.43047 0.90036 0.84375 4.59039 0.84375 9.81548C0.84375 16.1033 6.11311 22.2878 14.4379 27.6015C14.7478 27.7933 15.1906 28 15.5005 28Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_738_10750">
          <rect
            fill="white"
            height="28"
            transform="translate(0.84375)"
            width="29.3136"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
