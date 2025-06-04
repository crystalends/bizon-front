import clsx from "clsx";
import Button, { TButtonProps } from "./Button";
import { ElementType } from "react";

export default function FormButton<T extends ElementType = "button">({
  className,
  ...props
}: TButtonProps<T>) {
  return (
    <Button
      className={clsx("h-[66px] px-10 py-4", className)}
      {...(props as TButtonProps<T>)}
    />
  );
}
