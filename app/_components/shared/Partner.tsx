import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardProps } from "@heroui/card";
import { ElementType, ReactNode } from "react";
import GeoIcon from "../icons/GeoIcon";

type TPartnerProps<T extends ElementType = "div"> = {
  product?: string;
  searcher?: string;
  region?: string;
  createdAt: string;
  rightContent?: ReactNode;
  renderProduct?: (product: string) => ReactNode;
  renderSearcher?: (searcher: string) => ReactNode;
  renderRegion?: (region: string) => ReactNode;
  renderCreatedAt?: (createdAt: string) => ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function Partner<T extends ElementType = "div">({
  product,
  searcher,
  region,
  createdAt,
  rightContent,
  renderProduct = (product) => (
    <h3 className="font-semibold text-2xl">{product}</h3>
  ),
  renderSearcher = (searcher) => <p className="text-xl">Ищет: {searcher}</p>,
  renderRegion = (region) => (
    <div className="flex items-center gap-1">
      <GeoIcon />
      <p>{region}</p>
    </div>
  ),
  renderCreatedAt = (createdAt) => (
    <p className="text-gray-300">Опубликовано: {createdAt}</p>
  ),
  className,
  ...props
}: TPartnerProps<T>) {
  return (
    <Card {...props}>
      <CardBody>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col gap-4 flex-1">
            {product && renderProduct(product)}
            {searcher && renderSearcher(searcher)}
            <div>
              {region ? (
                renderRegion(region)
              ) : (
                <div className="invisible">
                  <GeoIcon />
                </div>
              )}
            </div>
            {createdAt && renderCreatedAt(createdAt)}
          </div>
          {rightContent && <div>{rightContent}</div>}
        </div>
      </CardBody>
    </Card>
  );
}
