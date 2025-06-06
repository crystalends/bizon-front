import { format } from "date-fns/format";

import RegionChips from "@/app/_components/RegionChips";
import Partner from "@/app/_components/shared/Partner";
import TPartnerOrder from "@/app/_types/PartnerOrder";

type TMyPartnerOrdersForMeProps = { partnerOrders: TPartnerOrder[] };

export default function PartnerOrdersForMe({
  partnerOrders,
}: TMyPartnerOrdersForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
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
            <p className="text-xl">От кого: {searcher}</p>
          )}
          searcher={user?.company?.name || user?.name}
        />
      ))}
    </div>
  );
}
