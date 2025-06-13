import { format } from "date-fns";

import Actions from "./Actions";

import InfoListItem from "@/app/_components/shared/InfoListItem";
import RegionChips from "@/app/_components/RegionChips";
import TOrder from "@/app/_types/Order";

type TMyOrdersForMeProps = { orders: TOrder[] };

export default function OrdersForMe({ orders }: TMyOrdersForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {orders.map(({ id, product, user, createdAt }) => (
        <InfoListItem
          key={id}
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          description={`От кого: ${user?.company?.name || user?.name}`}
          middleContent={
            user?.company?.regions && (
              <RegionChips regions={user.company.regions} />
            )
          }
          rightContent={<Actions className="xl:max-w-[355px]" />}
          title={product}
        />
      ))}
    </div>
  );
}
