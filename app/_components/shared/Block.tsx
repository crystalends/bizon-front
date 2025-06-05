import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type TBlock = {
  title: string;
  renderTitle?: (title: string) => ReactNode;
  rightContent?: ReactNode;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function Block({
  title,
  renderTitle = (title) => (
    <h2 className="font-semibold text-[44px]">{title}</h2>
  ),
  children,
  rightContent,
  className,
  ...props
}: TBlock) {
  return (
    <div className={clsx("flex flex-col gap-6", className)} {...props}>
      <div className="flex gap-5 items-center flex-wrap justify-between">
        {renderTitle(title)}
        {rightContent}
      </div>
      {children}
    </div>
  );
}
