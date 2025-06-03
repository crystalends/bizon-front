import { formatRUB } from "@/app/_utils/formatRUB";
import { ImageProps, Image } from "@heroui/image";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type TProductProps = {
  name: string;
  price?: number;
  renderName?: (name: string) => ReactNode;
  imageProps?: ImageProps;
} & ComponentPropsWithoutRef<"div">;

export default function Product({
  name,
  price,
  renderName = (name) => <p>{name}</p>,
  imageProps,
  className,
  ...props
}: TProductProps) {
  return (
    <div className={clsx("flex flex-col gap-[10px]", className)} {...props}>
      <div className="flex justify-center">
        {imageProps && <Image {...imageProps} width={243} alt={name} />}
      </div>
      {renderName(name)}
      <p className="font-semibold text-2xl">
        {price ? formatRUB(price) : "Не указано"}
      </p>
    </div>
  );
}
