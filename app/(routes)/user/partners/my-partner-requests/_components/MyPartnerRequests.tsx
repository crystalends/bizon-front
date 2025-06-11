import { format } from "date-fns";
import InfoCard from "@/app/_components/shared/InfoCard";
import RegionChips from "@/app/_components/RegionChips";
import TPartnerRequest from "@/app/_types/PartnerRequest";
import Actions from "./Actions";

type TMyPartnerRequestsProps = { partnerRequests: TPartnerRequest[] };

export default function MyPartnerRequests({
  partnerRequests,
}: TMyPartnerRequestsProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, region, createdAt }) => (
        <InfoCard
          key={id}
          title={product}
          middleContent={region && <RegionChips regions={[region]} />}
          bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
          rightContent={
            <div className="flex xl:max-w-[355px] w-full flex-col gap-5">
              <Actions />
              <p>Откликнулось: 15</p>
            </div>
          }
        />
      ))}
    </div>
  );
}
