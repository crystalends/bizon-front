import CompanyGridItem from "@/app/_components/shared/CompanyGridItem";
import TCompany from "@/app/_types/Company";
import Actions from "./Actions";
import { ReactNode } from "react";
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
      name={name}
      renderName={(name) => (
        <Link href={`/companies/${id}`}>
          <h2 className="text-[32px] font-semibold">{name}</h2>
        </Link>
      )}
      description={description}
      isVerified={isVerified}
      endContent={<Actions />}
      ratingSlot={ratingSlot}
      categoryChipsSlot={categoryChipsSlot}
      imageProps={{ src: image }}
    />
  );
}
