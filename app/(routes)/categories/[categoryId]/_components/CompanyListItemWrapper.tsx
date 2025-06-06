import { ReactNode } from "react";

import ContactInfrmationCard from "./ContactInformationCard";
import Actions from "./Actions";

import CompanyListItem from "@/app/_components/shared/CompanyListItem";
import TCompany from "@/app/_types/Company";
import Link from "@/app/_components/ui/Link";

type TCompanyListItemWrapperProps = {
  company: TCompany;
  ratingSlot: ReactNode;
  categoryChipsSlot: ReactNode;
  productsPreviewGridSlot: ReactNode;
};

export default function CompanyListItemWrapper({
  company: { id, name, description, image, isVerified, contactInformation },
  ratingSlot,
  categoryChipsSlot,
  productsPreviewGridSlot,
}: TCompanyListItemWrapperProps) {
  return (
    <CompanyListItem
      categoryChipsSlot={categoryChipsSlot}
      description={description}
      imageProps={{ src: image }}
      isVerified={isVerified}
      name={name}
      productsPreviewGridSlot={productsPreviewGridSlot}
      ratingSlot={ratingSlot}
      renderName={(name) => (
        <Link href={`/companies/${id}`}>
          <h2 className="text-[32px] font-semibold">{name}</h2>
        </Link>
      )}
      rightContent={
        <div className="w-full xl:min-w-[487px] xl:w-auto flex justify-between gap-5 flex-col">
          {contactInformation && (
            <ContactInfrmationCard contactInformation={contactInformation} />
          )}
          <Actions />
        </div>
      }
    />
  );
}
