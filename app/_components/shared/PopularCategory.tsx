import { Card, CardBody, CardHeader, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import clsx from "clsx";
import { ElementType, ReactNode } from "react";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TPopularCategoryProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps: ImageProps;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function PopularCategory<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="text-[32px] font-semibold">{name}</h3>,
  imageProps,
  className,
  ...props
}: TPopularCategoryProps<T>) {
  return (
    <Card className={clsx("bg-gray-50", className)} shadow="none" {...props}>
      <CardHeader className="px-[32px] pt-8">{renderName(name)}</CardHeader>
      <CardBody className="p-0">
        <div className="flex justify-end">
          <Image {...imageProps} alt={name} />
        </div>
      </CardBody>
    </Card>
  );
}
