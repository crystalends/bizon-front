import RegionChips from "@/app/_components/RegionChips";
import Partner from "@/app/_components/shared/Partner";
import Link from "@/app/_components/ui/Link";
import TPartnerOrder from "@/app/_types/PartnerOrder";
import { format } from "date-fns/format";
import { ru } from "date-fns/locale";

type TMyPartnerOrdersForMeProps = { partnerOrders: TPartnerOrder[] };

export default function PartnerOrdersForMe({
  partnerOrders,
}: TMyPartnerOrdersForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
        <Partner
          key={id}
          product={product}
          searcher={user?.company?.name || user?.name}
          renderSearcher={(searcher) => (
            <p className="text-xl">От кого: {searcher}</p>
          )}
          middleContent={
            user?.company?.regions && (
              <RegionChips regions={user.company.regions} />
            )
          }
          createdAt={format(createdAt, "dd.MM.yyyy", {
            locale: ru,
          })}
        />
      ))}
    </div>
  );
}
