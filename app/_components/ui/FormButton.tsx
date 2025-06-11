import clsx from "clsx";
import { ElementType } from "react";

import Button, { TButtonProps } from "./Button";

export default function FormButton<T extends ElementType = "button">({
  className,
  ...props
}: TButtonProps<T>) {
  return (
    <Button
      className={clsx("h-[41px] xl:h-[66px] xl:px-10 xl:py-4", className)}
      {...(props as TButtonProps<T>)}
    />
  );
}
