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
  className,
  ...props
}: TCompanyGridItemProps) {
  return (
    <div className={clsx("flex flex-col gap-5", className)} {...props}>
      <div className="flex justify-center">
        {imageProps && (
          <Image shadow="md" {...imageProps} alt={name} width={1200} />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-wrap gap-2">
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
      {endContent}
    </div>
  );
}
