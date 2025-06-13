import { format } from "date-fns";

import Actions from "./Actions";

import InfoListItem from "@/app/_components/shared/InfoListItem";
import RegionChips from "@/app/_components/RegionChips";
import TRequest from "@/app/_types/Request";

type TRequestsForMeProps = { requests: TRequest[] };

export default function RequestsForMe({ requests }: TRequestsForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {requests.map(({ id, product, user, region, createdAt }) => (
        <InfoListItem
          key={id}
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          description={`Ищет: ${user?.company?.name || user?.name}`}
          middleContent={region && <RegionChips regions={[region]} />}
          rightContent={
            <div className="flex xl:max-w-[355px] w-full flex-col gap-5">
              <Actions />
              <p>Просмотрено</p>
            </div>
          }
          title={product}
        />
      ))}
    </div>
  );
}
