import Partner from "@/app/_components/shared/Partner";
import Link from "@/app/_components/ui/Link";
import TPartnerOrder from "@/app/_types/PartnerOrder";
import { format } from "date-fns/format";
import { ru } from "date-fns/locale";

type TPartnerOrdersProps = { partnerOrders: TPartnerOrder[] };

export default function PartnerOrders({ partnerOrders }: TPartnerOrdersProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
        <Partner
          key={id}
          product={product}
          searcher={user?.company?.name}
          renderSearcher={(searcher) => (
            <p className="text-xl">Компания: {searcher}</p>
          )}
          middleContent={
            user && (
              <Link
                color="primary"
                href={`/companies/${user.companyId}`}
                underline="always"
              >
                Перейти в профиль компании
              </Link>
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
