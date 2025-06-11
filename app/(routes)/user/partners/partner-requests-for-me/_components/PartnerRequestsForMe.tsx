import { format } from "date-fns";
import InfoCard from "@/app/_components/shared/InfoCard";
import RegionChips from "@/app/_components/RegionChips";
import TPartnerRequest from "@/app/_types/PartnerRequest";
import Actions from "./Actions";

type TPartnerRequestsForMeProps = { partnerRequests: TPartnerRequest[] };

export default function PartnerRequestsForMe({
  partnerRequests,
}: TPartnerRequestsForMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, user, region, createdAt }) => (
        <InfoCard
          key={id}
          title={product}
          description={`Ищет: ${user?.company?.name || user?.name}`}
          middleContent={region && <RegionChips regions={[region]} />}
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
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
