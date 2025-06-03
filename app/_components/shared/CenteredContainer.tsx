import { ComponentPropsWithoutRef, ReactNode } from "react";
import Container from "@/app/_components/shared/Container";
import clsx from "clsx";

type TCenteredContainerProps = {
  maxWidth?: string;
} & ComponentPropsWithoutRef<"div">;

export default function CenteredContainer({
  maxWidth = "max-w-[506px]",
  children,
  className,
  ...props
}: TCenteredContainerProps) {
  return (
    <Container
      className={clsx(
        "pt-10 xl:pt-0 flex items-center justify-center min-h-[calc(100vh-80px)]",
        className,
      )}
      {...props}
    >
      <div className={`mx-auto text-center w-full ${maxWidth} px-4`}>
        {children}
      </div>
    </Container>
  );
}
