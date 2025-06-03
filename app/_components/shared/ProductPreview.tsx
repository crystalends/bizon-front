import { Image, ImageProps } from "@heroui/image";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type TProductPreview = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps?: ImageProps;
} & ComponentPropsWithoutRef<"div">;

export default function ProductPreview({
  name,
  renderName = (name) => <p className="text-xs">{name}</p>,
  imageProps,
  className,
  ...props
}: TProductPreview) {
  return (
    <div className={clsx("flex flex-col gap-1", className)} {...props}>
      <div className="flex justify-center">
        {imageProps && <Image {...imageProps} width={112} alt={name} />}
      </div>
      {renderName(name)}
    </div>
  );
}
