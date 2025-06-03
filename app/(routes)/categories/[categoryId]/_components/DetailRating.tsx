import Rating from "@/app/_components/shared/Rating";
import { pluralize } from "@/app/_utils/pluralize";

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
          {ratingCount}{" "}
          {pluralize(ratingCount, {
            one: "оценка",
            few: "оценки",
            many: "оценок",
          })}
        </p>
      )}
    </div>
  );
}
