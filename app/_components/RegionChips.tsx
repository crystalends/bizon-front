import Chip from "./ui/Chip";

type TRegionChipsProps = {
  regions: TRegion[];
};

export default function RegionChips({ regions }: TRegionChipsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {regions.map(({ id, name }) => (
        <Chip key={id}>{name}</Chip>
      ))}
    </div>
  );
}
