import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@heroui/card";
import { ElementType, ReactNode } from "react";
import TPolymorphicProps from "@/app/_types/Polymorphic";
import clsx from "clsx";

type TFeaturedCompanyProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  ratingSlot?: ReactNode;
  description?: string;
  renderDescription?: (description: string) => ReactNode;
  endContent?: ReactNode;
  renderEndContent?: (content: ReactNode) => ReactNode;
} & TPolymorphicProps<T, Omit<CardProps, "children">>;

export default function FeaturedCompany<T extends ElementType = "div">({
  name,
  renderName = (name) => <h3 className="font-semibold text-2xl">{name}</h3>,
  ratingSlot,
  description,
  renderDescription = (description) => <p>{description}</p>,
  endContent,
  renderEndContent = (content) => content,
  className,
  ...props
}: TFeaturedCompanyProps<T>) {
  return (
    <Card shadow="md" className={clsx("p-10", className)} {...props}>
      <CardHeader>
        <div className="flex w-full justify-between gap-5">
          {renderName(name)}
          {ratingSlot}
        </div>
      </CardHeader>
      {description && <CardBody>{renderDescription(description)}</CardBody>}
      {endContent && <CardFooter>{renderEndContent(endContent)}</CardFooter>}
    </Card>
  );
}
