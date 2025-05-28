import { CardBody } from "@heroui/card";
import { HTMLHeroUIProps } from "@heroui/system";
import clsx from "clsx";
import { ReactNode } from "react";

export type TAdvantageCardBodyProps = {
  title: string;
  description: string;
  icon?: ReactNode;
} & Omit<HTMLHeroUIProps<"div">, "children">;

export default function AdvantageCardBody({
  title,
  description,
  icon,
  className,
  ...props
}: TAdvantageCardBodyProps) {
  return (
    <CardBody className={clsx("", className)} {...props}>
      <div className="flex flex-col gap-5">
        <div className="flex justify-end">{icon}</div>
        <div className="flex flex-col gap-3">
          <h4 className="text-primary font-medium text-2xl">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </CardBody>
  );
}
