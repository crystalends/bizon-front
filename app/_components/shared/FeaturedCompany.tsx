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
  renderName?: (name: string) => ReactNode;
  ratingSlot?: ReactNode;
  description?: string;
  endContent?: ReactNode;
  cardProps?: TPolymorphicProps<T, CardProps>;
};

export default function FeaturedCompany<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="font-semibold text-2xl">{name}</h3>,
  ratingSlot,
  description,
  endContent,
  cardProps,
}: TFeaturedCompanyProps<T>) {
  return (
    <Card shadow="md" className="p-10" {...cardProps}>
      <CardHeader>
        <div className="flex w-full justify-between gap-5">
          {renderName(name)}
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
