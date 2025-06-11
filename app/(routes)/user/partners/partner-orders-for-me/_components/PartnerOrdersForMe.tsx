import { format } from "date-fns";
import InfoCard from "@/app/_components/shared/InfoCard";
import RegionChips from "@/app/_components/RegionChips";
import TPartnerOrder from "@/app/_types/PartnerOrder";
import Actions from "./Actions";

type TMyPartnerOrdersForMeProps = { partnerOrders: TPartnerOrder[] };

export default function PartnerOrdersForMe({
  partnerOrders,
}: TMyPartnerOrdersForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
        <InfoCard
          key={id}
          title={product}
          description={`От кого: ${user?.company?.name || user?.name}`}
          middleContent={
            user?.company?.regions && (
              <RegionChips regions={user.company.regions} />
            )
          }
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          rightContent={<Actions className="xl:max-w-[355px]" />}
        />
      ))}
    </div>
  );
}
