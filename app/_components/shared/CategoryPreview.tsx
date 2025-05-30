import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";

type TCategoryPreviewProps<T extends ElementType = "div"> = {
  name: string;
  imageProps?: ImageProps;
  endIcon?: ReactNode;
  cardProps?: TPolymorphicProps<T, CardProps>;
};

export default function CategoryPreview<T extends ElementType = "div">({
  name,
  imageProps,
  endIcon,
  cardProps,
}: TCategoryPreviewProps<T>) {
  return (
    <Card {...cardProps} shadow="none">
      <CardBody className="py-3 px-5">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            {imageProps ? (
              <Image {...imageProps} width={22} height={22} />
            ) : (
              <div className="w-[22px] h-[22px]" />
            )}
            <h3 className="font-semibold text-xl">{name}</h3>
          </div>
          {endIcon}
        </div>
      </CardBody>
    </Card>
  );
}
