import { Rating, RatingProps, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import clsx from "clsx";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#1E3A8A",
  inactiveFillColor: "#D4D4D4",
};

export default function StarsRating({ className, ...props }: RatingProps) {
  return (
    <Rating
      className={clsx("max-w-[212px]", className)}
      itemStyles={myStyles}
      {...props}
    />
  );
}
