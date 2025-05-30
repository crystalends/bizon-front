import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type TDetailsProps = {
  INN?: number | null;
  KPP?: number | null;
  OGRN?: number | null;
} & ComponentPropsWithoutRef<"div">;

export default function Details({
  INN,
  KPP,
  OGRN,
  className,
  ...props
}: TDetailsProps) {
  const legalList = [
    {
      label: "ИНН",
      value: INN,
    },
    {
      label: "КПП",
      value: KPP,
    },
    {
      label: "ОГРН",
      value: OGRN,
    },
  ].filter((item) => item.value);

  if (legalList.length === 0) {
    return null;
  }

  return (
    <div className={clsx("flex flex-col gap-3", className)} {...props}>
      {legalList.map(({ label, value }) => (
        <div key={`${label}-${value}`} className="flex gap-2 items-center">
          <span className="text-gray-600">{label}:</span>
          <span className="text-gray-800">{value}</span>
        </div>
      ))}
    </div>
  );
}
