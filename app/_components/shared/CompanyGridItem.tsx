import { ImageProps } from "@heroui/image";
import { ReactNode } from "react";
import { Image } from "@heroui/image";
import VerifiedBadgeIcon from "../icons/VerifiedBadgeIcon";

type TCompanyGridItemProps = {
  name: string;
  renderName?: (name: string) => ReactNode;
  description?: string;
  isVerified?: boolean;
  categoryChipsSlot?: ReactNode;
  imageProps?: ImageProps;
  ratingSlot?: ReactNode;
  endContent?: ReactNode;
};
export default function CompanyGridItem({
  name,
  renderName = (name) => <h3 className="text-2xl font-semibold">{name}</h3>,
  description,
  isVerified,
  categoryChipsSlot,
  imageProps,
  ratingSlot,
  endContent,
}: TCompanyGridItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center">
        {imageProps && (
          <Image shadow="md" {...imageProps} width={1200} alt={name} />
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
      {endContent}
    </div>
  );
}
