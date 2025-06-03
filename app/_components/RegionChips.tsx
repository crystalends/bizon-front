import Chip from "./ui/Chip";

type TRegionChipsProps = {
  regions: string[];
};

export default function RegionChips({ regions }: TRegionChipsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {regions.map((region, index) => (
        <Chip key={region + index}>{region}</Chip>
      ))}
    </div>
  );
}
