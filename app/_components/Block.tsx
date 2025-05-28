import { ReactNode } from "react";

type TBlock = {
  title: string;
  children?: ReactNode;
};

export default function Block({ title, children }: TBlock) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-semibold text-[44px]">{title}</h2>
      {children}
    </div>
  );
}
