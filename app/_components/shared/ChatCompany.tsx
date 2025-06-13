import { Card, CardBody, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType } from "react";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TChatCompanyProps<T extends ElementType = "div"> = {
  name: string;
  isOnline: boolean;
  imageProps?: ImageProps;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function ChatCompany<T extends ElementType = "div">({
  name,
  isOnline,
  imageProps,
  ...props
}: TChatCompanyProps<T>) {
  return (
    <Card radius="none" shadow="none" {...props}>
      <CardBody>
        <div className="flex items-center gap-5">
          <Image height={64} width={64} {...imageProps} radius="full" />
          <h3 className="font-semibold text-xl">{name}</h3>
        </div>
      </CardBody>
    </Card>
  );
}
