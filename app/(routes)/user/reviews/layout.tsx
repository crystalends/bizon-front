import { ReactNode } from "react";

import Reviews from "./_components/Reviews";

type TReviewsLayoutProps = {
  children: ReactNode;
};

export default function ReviewsLayout({ children }: TReviewsLayoutProps) {
  return <Reviews>{children}</Reviews>;
}
