import { Card, CardBody, CardProps } from "@heroui/card";
import { ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";
import { Image } from "@heroui/image";
import clsx from "clsx";

import DetailIsVerified from "../DetailIsVerified";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TCompanyListItemProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  description?: string;
  isVerified?: boolean;
  categoryChipsSlot?: ReactNode;
  productsPreviewGridSlot?: ReactNode;
  imageProps?: ImageProps;
  ratingSlot?: ReactNode;
  rightContent?: ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;
export default function CompanyListItem<T extends ElementType = "div">({
  name,
  renderName = (name) => <h2 className="text-[32px] font-semibold">{name}</h2>,
  description,
  isVerified,
  categoryChipsSlot,
  productsPreviewGridSlot,
  imageProps,
  ratingSlot,
  rightContent,
  className,
  ...props
}: TCompanyListItemProps<T>) {
  return (
    <Card className={clsx("p-2", className)} shadow="md" {...props}>
      <CardBody>
        <div className="flex flex-wrap justify-center xl:justify-normal xl:flex-nowrap gap-5">
          {(imageProps || ratingSlot) && (
            <div className="flex xl:min-w-[223px] flex-col gap-3">
              <Image {...imageProps} alt={name} width={223} />
              {ratingSlot}
            </div>
          )}
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-5">
              {isVerified && <DetailIsVerified />}
              <div className="flex gap-3 flex-col">
                {renderName(name)}
                {description && <p>{description}</p>}
              </div>
              {categoryChipsSlot}
            </div>
            {productsPreviewGridSlot}
          </div>
          {rightContent}
        </div>
      </CardBody>
    </Card>
  );
}
