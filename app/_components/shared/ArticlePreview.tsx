import { Image, ImageProps } from "@heroui/image";
import { ReactNode } from "react";

type TArticlePreviewProps = {
  title: string;
  createdAt: string;
  renderTitle?: (title: string) => ReactNode;
  renderCreatedAt?: (createdAt: string) => ReactNode;
  imageProps?: ImageProps;
};

export default function ArticlePreview({
  title,
  createdAt,
  renderTitle = (title) => <h4 className="text-xl font-semibold">{title}</h4>,
  renderCreatedAt = (createdAt) => <p className="text-gray-300">{createdAt}</p>,
  imageProps,
}: TArticlePreviewProps) {
  return (
    <div className="flex w-fit flex-col gap-4">
      {imageProps && <Image width={600} {...imageProps} />}
      <div className="flex flex-col gap-2">
        {renderCreatedAt(createdAt)}
        {renderTitle(title)}
      </div>
    </div>
  );
}
