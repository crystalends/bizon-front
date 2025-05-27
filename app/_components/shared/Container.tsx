import clsx from "clsx";

type TContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...props }: TContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-[1560px] px-[1.5rem]", className)}
      {...props}
    />
  );
}
