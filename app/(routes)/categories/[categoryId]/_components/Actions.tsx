import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

import Button, { TButtonProps } from "@/app/_components/ui/Button";

type TActionsProps = ComponentPropsWithoutRef<"div">;

export default function Actions({ className, ...props }: TActionsProps) {
  const actions: TButtonProps[] = [
    {
      key: 1,
      color: "secondary",
      variant: "bordered",
      children: "Оставить заявку",
    },
    {
      key: 2,
      children: "Партнерство",
    },
  ];

  return (
    <div className={clsx("flex flex-col gap-3", className)} {...props}>
      {actions.map(({ key, ...action }) => (
        <Button key={key} {...action} />
      ))}
    </div>
  );
}
