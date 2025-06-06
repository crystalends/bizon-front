import { CardBody } from "@heroui/card";
import { ElementType, ReactNode } from "react";
import { HTMLHeroUIProps } from "@heroui/system";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TFeatureCardBodyProps<T extends ElementType = "div"> = {
  title?: string;
  renderTitle?: () => ReactNode;
  description?: string;
  renderDescription?: () => ReactNode;
  icon?: ReactNode;
  renderIcon?: () => ReactNode;
} & TPolymorphicProps<T, Omit<HTMLHeroUIProps<"div">, "children">>;

export default function FeatureCardBody<T extends ElementType = "div">({
  title,
  renderTitle,
  description,
  renderDescription,
  icon,
  renderIcon,
  ...props
}: TFeatureCardBodyProps<T>) {
  return (
    <CardBody {...props}>
      <div className="flex flex-col gap-5">
        {(icon || renderIcon) && (
          <div className="flex justify-end">
            {renderIcon ? renderIcon() : icon}
          </div>
        )}

        {(title || renderTitle || description || renderDescription) && (
          <div className="flex flex-col gap-3">
            {renderTitle
              ? renderTitle()
              : title && (
                  <h4 className="text-primary font-medium text-2xl">{title}</h4>
                )}

            {renderDescription
              ? renderDescription()
              : description && <p>{description}</p>}
          </div>
        )}
      </div>
    </CardBody>
  );
}
