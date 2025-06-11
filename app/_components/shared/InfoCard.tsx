import { Card, CardBody, CardProps } from "@heroui/card";
import { ElementType, ReactNode } from "react";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TInfoCardProps<T extends ElementType = "div"> = {
  title?: string;
  description?: string;
  middleContent?: ReactNode;
  bottom?: string;
  rightContent?: ReactNode;
  renderTitle?: (title: string) => ReactNode;
  renderDescription?: (description: string) => ReactNode;
  renderBottom?: (bottom: string) => ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function InfoCard<T extends ElementType = "div">({
  title,
  description,
  bottom,
  middleContent,
  rightContent,
  renderTitle = (title) => (
    <h3 className="font-semibold text-base xl:text-2xl">{title}</h3>
  ),
  renderDescription = (description) => (
    <p className="text-[11px] xl:text-base">{description}</p>
  ),
  renderBottom = (bottom) => (
    <p className="text-gray-300 text-[11px] xl:text-base">{bottom}</p>
  ),
  className,
  ...props
}: TInfoCardProps<T>) {
  return (
    <Card {...props}>
      <CardBody className="p-5">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex justify-between flex-col gap-4 flex-1">
            <div className="flex flex-col gap-4">
              {title && renderTitle(title)}
              {description && renderDescription(description)}
              {middleContent}
            </div>
            {bottom && (
              <div className="flex flex-col gap-4">{renderBottom(bottom)}</div>
            )}
          </div>
          {rightContent}
        </div>
      </CardBody>
    </Card>
  );
}
