import { format } from "date-fns";
import { ru } from "date-fns/locale";

import Review from "@/app/_components/shared/Review";
import TReview from "@/app/_types/Review";

type TCreatedWithMeProps = {
  reviews: TReview[];
};

export default function CreatedWithMe({ reviews }: TCreatedWithMeProps) {
  return (
    <div className="flex flex-col gap-5">
      {reviews.map(({ id, user, value, rating, createdAt }) => (
        <Review
          key={id}
          rating={rating}
          userProps={{
            avatarProps: {
              src: user?.image,
              size: "lg",
            },
            name: <p className="text-xl font-semibold">{user?.name}</p>,
            description: (
              <p className="text-sm text-black">
                {format(createdAt, "d MMMM yyyy", {
                  locale: ru,
                })}
              </p>
            ),
          }}
          value={value}
        />
      ))}
    </div>
  );
}
