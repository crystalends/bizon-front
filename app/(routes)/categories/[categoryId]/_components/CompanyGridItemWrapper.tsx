import { ReactNode } from "react";

import Actions from "./Actions";

import CompanyGridItem from "@/app/_components/shared/CompanyGridItem";
import TCompany from "@/app/_types/Company";
import Link from "@/app/_components/ui/Link";

type TCompanyGridItemWrapperProps = {
  company: TCompany;
  ratingSlot: ReactNode;
  categoryChipsSlot: ReactNode;
};

export default function CompanyGridItemWrapper({
  company: { id, name, description, image, isVerified },
  ratingSlot,
  categoryChipsSlot,
}: TCompanyGridItemWrapperProps) {
  return (
    <CompanyGridItem
      categoryChipsSlot={categoryChipsSlot}
      description={description}
      endContent={<Actions />}
      imageProps={{ src: image }}
      isVerified={isVerified}
      name={name}
      ratingSlot={ratingSlot}
      renderName={(name) => (
        <Link href={`/companies/${id}`}>
          <h2 className="text-[32px] font-semibold">{name}</h2>
        </Link>
      )}
    />
  );
}
