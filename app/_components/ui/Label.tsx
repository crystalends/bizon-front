import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function Label({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label className={clsx("font-medium text-xl", className)} {...props} />
  );
}
