import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardHeader, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";

type TPopularCategoryProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps: ImageProps;
  cardProps?: TPolymorphicProps<T, CardProps>;
};

export default function PopularCategory<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="text-[32px] font-semibold">{name}</h3>,
  imageProps,
  cardProps,
}: TPopularCategoryProps<T>) {
  return (
    <Card shadow="none" className="bg-gray-50" {...cardProps}>
      <CardHeader className="px-[32px] pt-8">{renderName(name)}</CardHeader>
      <CardBody className="p-0">
        <div className="flex justify-end">
          <Image {...imageProps} alt={name} />
        </div>
      </CardBody>
    </Card>
  );
}
