import { Card, CardBody, CardProps } from "@heroui/card";
import { ImageProps } from "@heroui/image";
import { ElementType, ReactNode } from "react";
import { Image } from "@heroui/image";
import TPolymorphicProps from "@/app/_types/Polymorphic";
import clsx from "clsx";
import VerifiedBadgeIcon from "../icons/VerifiedBadgeIcon";

type TCompanyListItemProps<T extends ElementType = "div"> = {
  name: string;
  description?: string;
  isVerified?: boolean;
  categoryChipsSlot?: ReactNode;
  productsPreviewGridSlot?: ReactNode;
  imageProps?: ImageProps;
  ratingSlot?: ReactNode;
  cardProps?: TPolymorphicProps<T, CardProps>;
  rightContent?: ReactNode;
};
export default function CompanyListItem<T extends ElementType = "div">({
  name,
  description,
  isVerified,
  categoryChipsSlot,
  productsPreviewGridSlot,
  imageProps,
  ratingSlot,
  cardProps,
  rightContent,
}: TCompanyListItemProps<T>) {
  const { className, ...restCardProps } = cardProps || {};

  return (
    <Card shadow="sm" className={clsx("p-2", className)} {...restCardProps}>
      <CardBody>
        <div className="flex flex-wrap justify-center xl:justify-normal xl:flex-nowrap gap-5">
          {(imageProps || ratingSlot) && (
            <div className="flex min-w-[223px] flex-col gap-3">
              <Image {...imageProps} width={223} alt={name} />
              {ratingSlot}
            </div>
          )}
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-5">
              {isVerified && (
                <div className="flex flex-wrap gap-2">
                  <VerifiedBadgeIcon />
                  <p className="text-primary">Документы проверены</p>
                </div>
              )}
              <h2 className="text-[32px] font-semibold">{name}</h2>
              {description && <p>{description}</p>}
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
