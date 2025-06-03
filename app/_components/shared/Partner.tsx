import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Card, CardBody, CardProps } from "@heroui/card";
import { ElementType, ReactNode } from "react";

type TPartnerProps<T extends ElementType = "div"> = {
  product?: string;
  user?: string;
  regionChipsSlot?: ReactNode;
  createdAt: string;
  rightContent?: ReactNode;
  renderProduct?: (product: string) => ReactNode;
  renderUser?: (user: string) => ReactNode;
  renderCreatedAt?: (createdAt: string) => ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function Partner<T extends ElementType = "div">({
  product,
  user,
  createdAt,
  regionChipsSlot,
  rightContent,
  renderProduct = (product) => (
    <h3 className="font-semibold text-2xl">{product}</h3>
  ),
  renderUser = (user) => <p className="text-xl">Ищет: {user}</p>,
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
            {user && renderUser(user)}
            {regionChipsSlot}
            {createdAt && renderCreatedAt(createdAt)}
          </div>
          {rightContent && <div>{rightContent}</div>}
        </div>
      </CardBody>
    </Card>
  );
}
