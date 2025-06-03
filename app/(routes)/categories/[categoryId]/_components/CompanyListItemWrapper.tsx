import CompanyListItem from "@/app/_components/shared/CompanyListItem";
import TCompany from "@/app/_types/Company";
import ContactInfrmationCard from "./ContactInformationCard";
import { ReactNode } from "react";
import Link from "@/app/_components/ui/Link";
import Actions from "./Actions";

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
      name={name}
      renderName={(name) => (
        <Link href={`/companies/${id}`}>
          <h2 className="text-[32px] font-semibold">{name}</h2>
        </Link>
      )}
      description={description}
      isVerified={isVerified}
      rightContent={
        <div className="w-full xl:min-w-[487px] xl:w-auto flex gap-5 flex-col">
          {contactInformation && (
            <ContactInfrmationCard contactInformation={contactInformation} />
          )}
          <Actions />
        </div>
      }
      ratingSlot={ratingSlot}
      categoryChipsSlot={categoryChipsSlot}
      imageProps={{ src: image }}
      productsPreviewGridSlot={productsPreviewGridSlot}
    />
  );
}
