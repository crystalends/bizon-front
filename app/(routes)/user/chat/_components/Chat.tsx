import { ReactNode } from "react";

type TChatProps = {
  chatCompaniesSlot: ReactNode;
  children: ReactNode;
};

export default function Chat({ chatCompaniesSlot, children }: TChatProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:h-[600px] w-full gap-5">
      {chatCompaniesSlot}
      {children}
    </div>
  );
}
