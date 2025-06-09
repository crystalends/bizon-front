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
      children: "Отменить запрос",
    },
    {
      key: 2,
      children: "Перейти в чат",
    },
  ];

  return (
    <div className={clsx("flex w-full flex-col gap-3", className)} {...props}>
      {actions.map(({ key, ...action }) => (
        <Button key={key} {...action} />
      ))}
    </div>
  );
}
