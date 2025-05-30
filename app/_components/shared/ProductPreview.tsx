import { Image, ImageProps } from "@heroui/image";
import { ReactNode } from "react";

type TProductPreview = {
  name: string;
  renderName?: (name: string) => ReactNode;
  imageProps?: ImageProps;
};

export default function ProductPreview({
  name,
  renderName = (name) => <p className="text-xs">{name}</p>,
  imageProps,
}: TProductPreview) {
  return (
    <div className="flex flex-col gap-1">
      {imageProps && (
        <Image {...imageProps} width={112} height={112} alt={name} />
      )}
      {renderName(name)}
    </div>
  );
}
