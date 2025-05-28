import { ReactNode } from "react";

type TCompaniesProps = {
  categories: ReactNode;
};

export default function Companies({ categories }: TCompaniesProps) {
  return (
    <div className="flex py-10 flex-col gap-8 xl:gap-16">{categories}</div>
  );
}
