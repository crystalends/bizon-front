import { format } from "date-fns";

import RegionChips from "@/app/_components/RegionChips";
import Partner from "@/app/_components/shared/Partner";
import TPartnerRequest from "@/app/_types/PartnerRequest";

type TPartnerRequestsForMeProps = {
  partnerRequests: TPartnerRequest[];
};

export default function PartnerRequestsForMe({
  partnerRequests,
}: TPartnerRequestsForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, user, createdAt }) => (
        <Partner
          key={id}
          createdAt={format(createdAt, "dd.MM.yyyy")}
          middleContent={
            user?.company?.regions && (
              <RegionChips regions={user.company.regions} />
            )
          }
          product={product}
          renderSearcher={(searcher) => (
            <p className="text-xl">Ищет: {searcher}</p>
          )}
          searcher={user?.company?.name || user?.name}
        />
      ))}
    </div>
  );
}
