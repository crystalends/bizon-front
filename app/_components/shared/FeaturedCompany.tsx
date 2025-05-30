import TPolymorphicProps from "@/app/_types/Polymorphic";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@heroui/card";
import { ElementType, ReactNode } from "react";

type TFeaturedCompanyProps<T extends ElementType = "div"> = {
  name: string;
  ratingSlot?: ReactNode;
  description?: string;
  endContent?: ReactNode;
  cardProps?: TPolymorphicProps<T, CardProps>;
};

export default function FeaturedCompany<T extends ElementType = "div">({
  name,
  ratingSlot,
  description,
  endContent,
  cardProps,
}: TFeaturedCompanyProps<T>) {
  return (
    <Card shadow="sm" className="p-10" {...cardProps}>
      <CardHeader>
        <div className="flex w-full justify-between gap-5">
          <h3 className="font-semibold text-2xl">{name}</h3>
          {ratingSlot}
        </div>
      </CardHeader>
      {description && (
        <CardBody>
          <p>{description}</p>
        </CardBody>
      )}
      {endContent && <CardFooter>{endContent}</CardFooter>}
    </Card>
  );
}
