import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type TContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({ className, ...props }: TContainerProps) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-[1560px] px-[1.5rem]", className)}
      {...props}
    />
  );
}
