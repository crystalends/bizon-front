import CompanyGridItem from "@/app/_components/shared/CompanyGridItem";
import TCompany from "@/app/_types/Company";
import Actions from "./Actions";
import { ReactNode } from "react";

type TCompanyGridItemWrapperProps = {
  company: TCompany;
  ratingSlot: ReactNode;
  categoryChipsSlot: ReactNode;
};

export default function CompanyGridItemWrapper({
  company: { name, description, image, isVerified },
  ratingSlot,
  categoryChipsSlot,
}: TCompanyGridItemWrapperProps) {
  return (
    <CompanyGridItem
      name={name}
      description={description}
      isVerified={isVerified}
      endContent={<Actions />}
      ratingSlot={ratingSlot}
      categoryChipsSlot={categoryChipsSlot}
      imageProps={{ src: image }}
    />
  );
}
