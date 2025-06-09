import { ImageProps } from "@heroui/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Image } from "@heroui/image";
import clsx from "clsx";

import VerifiedBadgeIcon from "../icons/VerifiedBadgeIcon";

type TCompanyGridItemProps = {
  name: string;
  renderName?: (name: string) => ReactNode;
  description?: string;
  isVerified?: boolean;
  categoryChipsSlot?: ReactNode;
  regionChipsSlot?: ReactNode;
  imageProps?: ImageProps;
  topRightContent?: ReactNode;
  ratingSlot?: ReactNode;
  endContent?: ReactNode;
} & ComponentPropsWithoutRef<"div">;
export default function CompanyGridItem({
  name,
  renderName = (name) => <h3 className="text-2xl font-semibold">{name}</h3>,
  description,
  isVerified,
  categoryChipsSlot,
  regionChipsSlot,
  imageProps,
  ratingSlot,
  endContent,
  topRightContent,
  className,
  ...props
}: TCompanyGridItemProps) {
  return (
    <div
      className={clsx(
        "flex relative justify-between flex-col gap-5",
        className,
      )}
      {...props}
    >
      {topRightContent && (
        <div className="absolute right-3 top-3 z-50">{topRightContent}</div>
      )}
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          {imageProps && (
            <Image shadow="md" {...imageProps} alt={name} width={1200} />
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center flex-wrap gap-2">
            {isVerified && <VerifiedBadgeIcon />}
            {renderName(name)}
          </div>
          {ratingSlot}
        </div>
        {description && (
          <p className="line-clamp-3 text-ellipsis overflow-hidden">
            {description}
          </p>
        )}
        {categoryChipsSlot}
        {regionChipsSlot}
      </div>
      {endContent}
    </div>
  );
}
