import TRegion from "../_types/Region";
import Chip from "./ui/Chip";

type TRegionChipsProps = {
  regions: TRegion[];
  onClose?: (category: TRegion) => void;
};

export default function RegionChips({ regions, onClose }: TRegionChipsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {regions.map((region) => (
        <Chip
          key={region.id}
          onClose={onClose ? () => onClose(region) : undefined}
        >
          {region.name}
        </Chip>
      ))}
    </div>
  );
}
