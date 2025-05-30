import RatingIcon from "../icons/RatingIcon";

type TRatingProps = {
  rating: number;
};

export default function Rating({ rating }: TRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <RatingIcon />
      <span className="text-primary">{rating}</span>
    </div>
  );
}
