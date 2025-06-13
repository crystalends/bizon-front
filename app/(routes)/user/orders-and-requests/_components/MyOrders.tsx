import { format } from "date-fns";

import Actions from "./Actions";

import InfoListItem from "@/app/_components/shared/InfoListItem";
import Link from "@/app/_components/ui/Link";
import TOrder from "@/app/_types/Order";

type TMyOrdersProps = { orders: TOrder[] };

export default function MyOrders({ orders }: TMyOrdersProps) {
  return (
    <div className="flex flex-col gap-5">
      {orders.map(({ id, product, user, createdAt }) => (
        <InfoListItem
          key={id}
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          description={`Компания: ${user?.company?.name}`}
          middleContent={
            user?.companyId && (
              <Link
                color="primary"
                href={`/companies/${user.companyId}`}
                underline="always"
              >
                Перейти в профиль компании
              </Link>
            )
          }
          rightContent={<Actions className="xl:max-w-[355px]" />}
          title={product}
        />
      ))}
    </div>
  );
}
