import Rating from "@/app/_components/shared/Rating";
import getRatingCountWord from "@/app/_utils/getRatingCountWord";

type TDetailRatingProps = { rating: number; ratingCount: number };

export default function DetailRating({
  rating,
  ratingCount,
}: TDetailRatingProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5">
      <Rating rating={rating} />
      {ratingCount && (
        <p className="text-sm">
          {ratingCount} {getRatingCountWord(ratingCount)}
        </p>
      )}
    </div>
  );
}
