import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";

type TCategoryPreviewProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps?: ImageProps;
  endIcon?: ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function CategoryPreview<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="font-semibold text-xl">{name}</h3>,
  imageProps,
  endIcon,
  ...props
}: TCategoryPreviewProps<T>) {
  return (
    <Card {...props} shadow="none">
      <CardBody className="py-3 px-5">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            {imageProps ? (
              <Image {...imageProps} width={22} height={22} />
            ) : (
              <div className="w-[22px] h-[22px]" />
            )}
            {renderName(name)}
          </div>
          {endIcon}
        </div>
      </CardBody>
    </Card>
  );
}
