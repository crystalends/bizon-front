import { Image, ImageProps } from "@heroui/image";

type TProductPreview = {
  name: string;
  imageProps?: ImageProps;
};

export default function ProductPreview({ name, imageProps }: TProductPreview) {
  return (
    <div className="flex flex-col gap-1">
      {imageProps && (
        <Image {...imageProps} width={112} height={112} alt={name} />
      )}
      <p className="text-xs">{name}</p>
    </div>
  );
}
