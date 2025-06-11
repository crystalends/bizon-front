import { Card, CardBody, CardProps } from "@heroui/card";
import { ElementType, ReactNode } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TFeaturedCompanyProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  ratingSlot?: ReactNode;
  description?: string;
  renderDescription?: (description: string) => ReactNode;
  endContent?: ReactNode;
  renderEndContent?: (content: ReactNode) => ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function FeaturedCompany<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="font-semibold text-2xl">{name}</h3>,
  ratingSlot,
  description,
  renderDescription = (description) => <p>{description}</p>,
  endContent,
  renderEndContent = (content) => content,
  className,
  ...props
}: TFeaturedCompanyProps<T>) {
  return (
    <Card className={clsx("p-4 xl:p-10", className)} shadow="md" {...props}>
      <CardBody className="h-full flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-5">
          <div className="flex w-full justify-between gap-5">
            {renderName(name)}
            {ratingSlot}
          </div>
          {description && renderDescription(description)}
        </div>
        {endContent && (
          <div className="pt-4">{renderEndContent(endContent)}</div>
        )}
      </CardBody>
    </Card>
  );
}
