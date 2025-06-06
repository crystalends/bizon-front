import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<"label">;

export default function Label({ className, htmlFor, ...props }: LabelProps) {
  return (
    <label
      className={clsx("font-medium text-xl", className)}
      htmlFor={htmlFor}
      {...props}
    />
  );
}
