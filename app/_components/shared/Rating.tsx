import { ComponentPropsWithoutRef } from "react";
import RatingIcon from "../icons/RatingIcon";
import clsx from "clsx";

type TRatingProps = {
  rating: number;
} & ComponentPropsWithoutRef<"div">;

export default function Rating({ rating, className, ...props }: TRatingProps) {
  return (
    <div className={clsx("flex items-center gap-1", className)} {...props}>
      <RatingIcon />
      <span className="text-primary">{rating}</span>
    </div>
  );
}
