import { Card, CardBody, CardProps } from "@heroui/card";
import { Image, ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";

import ArrowRightIcon from "../icons/ArrowRightIcon";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TIconedListItemProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps?: ImageProps;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  endContent?: ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function IconedListItem<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="font-semibold text-xl">{name}</h3>,
  imageProps,
  startIcon,
  endIcon = <ArrowRightIcon />,
  endContent,
  ...props
}: TIconedListItemProps<T>) {
  return (
    <div className="flex flex-col gap-3">
      <Card {...props} shadow="none">
        <CardBody className="py-3 px-5">
          <div className="flex items-center gap-5 justify-between">
            <div className="flex items-center gap-2">
              {startIcon ? (
                <div className="w-[22px] h-[22px] flex items-center justify-center">
                  {startIcon}
                </div>
              ) : imageProps ? (
                <Image {...imageProps} height={22} width={22} />
              ) : (
                <div className="w-[22px] h-[22px]" />
              )}
              {renderName(name)}
            </div>
            {endIcon}
          </div>
        </CardBody>
      </Card>
      {endContent}
    </div>
  );
}
