import { format } from "date-fns";
import InfoCard from "@/app/_components/shared/InfoCard";
import Link from "@/app/_components/ui/Link";
import TPartnerOrder from "@/app/_types/PartnerOrder";
import Actions from "./Actions";

type TMyPartnerOrdersProps = { partnerOrders: TPartnerOrder[] };

export default function MyPartnerOrders({
  partnerOrders,
}: TMyPartnerOrdersProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
        <InfoCard
          key={id}
          title={product}
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
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          rightContent={<Actions className="xl:max-w-[355px]" />}
        />
      ))}
    </div>
  );
}
