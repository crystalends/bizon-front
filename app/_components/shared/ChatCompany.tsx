import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType } from "react";

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
    <Card shadow="none" radius="none" {...props}>
      <CardBody>
        <div className="flex items-center gap-5">
          <Image width={64} height={64} {...imageProps} radius="full" />
          <h3 className="font-semibold text-xl">{name}</h3>
        </div>
      </CardBody>
    </Card>
  );
}
