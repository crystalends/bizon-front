import { format } from "date-fns";

import RegionChips from "@/app/_components/RegionChips";
import Partner from "@/app/_components/shared/Partner";
import TPartnerRequest from "@/app/_types/PartnerRequest";
import Actions from "./Actions";

type TPartnerRequestsForMeProps = {
  partnerRequests: TPartnerRequest[];
};

export default function PartnerRequestsForMe({
  partnerRequests,
}: TPartnerRequestsForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, user, region, createdAt }) => (
        <Partner
          key={id}
          createdAt={format(createdAt, "dd.MM.yyyy")}
          middleContent={region && <RegionChips regions={[region]} />}
          product={product}
          renderSearcher={(searcher) => <p>Ищет: {searcher}</p>}
          searcher={user?.company?.name || user?.name}
          rightContent={
            <div className="flex xl:max-w-[355px] w-full flex-col gap-5">
              <Actions />
              <p>Просмотрено</p>
            </div>
          }
        />
      ))}
    </div>
  );
}
