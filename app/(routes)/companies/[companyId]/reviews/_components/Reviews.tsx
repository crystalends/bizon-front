"use client";

import { Card, CardBody } from "@heroui/card";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Progress } from "@heroui/progress";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import ArrowDown from "@/app/_components/icons/ArrowDown";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import Block from "@/app/_components/shared/Block";
import Review from "@/app/_components/shared/Review";
import Button from "@/app/_components/ui/Button";
import Modal from "@/app/_components/ui/Modal";
import StarsRating from "@/app/_components/ui/StarsRating";
import Textarea from "@/app/_components/ui/Textarea";
import TReview from "@/app/_types/Review";
import TStats from "@/app/_types/Stats";
import { pluralize } from "@/app/_utils/pluralize";
import "@smastrom/react-rating/style.css";

type TReviewsProps = {
  reviews: TReview[];
  rating: number;
  reviewsCount: number;
  stats: TStats;
};

export default function Reviews({
  reviews,
  rating,
  reviewsCount,
  stats,
}: TReviewsProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Block title="Отзывы">
        <div className="flex flex-col-reverse xl:flex-row gap-5">
          <Card fullWidth>
            <CardBody>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <h1 className="font-medium text-[64px] xl:text-8xl">
                    {rating}
                  </h1>
                  <div className="flex flex-col gap-1">
                    <StarsRating
                      readOnly
                      value={rating}
                      aria-label="Оценки пользователей"
                    />
                    <p>
                      На основании {reviewsCount}{" "}
                      {pluralize(reviewsCount, {
                        one: "оценка",
                        few: "оценки",
                        many: "оценок",
                      })}
                    </p>
                  </div>
                </div>
                {([5, 4, 3, 2, 1] as const).map((star) => {
                  const percentage =
                    reviewsCount > 0
                      ? Math.round((stats[star] / reviewsCount) * 100)
                      : 0;

                  return (
                    <div key={star} className="flex w-full items-center gap-4">
                      <StarsRating
                        readOnly
                        value={star}
                        aria-label="Отображение звезд рейтинга"
                      />
                      <Progress
                        className="max-w-[590]"
                        size="sm"
                        value={percentage}
                        aria-label="Проценное соотношение оценок"
                      />
                      <span className="text-xl xl:text-2xl">{stats[star]}</span>
                    </div>
                  );
                })}
                <Button
                  className="w-fit"
                  color="default"
                  endContent={<ArrowDown />}
                  startContent={<PerpendicularArrows />}
                >
                  Сортировать
                </Button>
                {reviews.map(({ id, user, value, rating, createdAt }) => (
                  <Review
                    key={id}
                    rating={rating}
                    userProps={{
                      avatarProps: {
                        src: user?.image,
                        size: "lg",
                      },
                      name: (
                        <p className="text-xl font-semibold">{user?.name}</p>
                      ),
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
            </CardBody>
          </Card>
          <Card className="w-full h-fit xl:max-w-[507px]">
            <CardBody>
              <div className="flex flex-col gap-5">
                <p className="text-base xl:text-xl">
                  Рейтинг — это среднее арифметическое оценок пользователей.
                </p>
                <Button onPress={onOpen}>Написать отзыв</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </Block>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-2xl">Поставьте оценку</h2>
                    <StarsRating value={5} aria-label="Поставьте оценку" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-2xl">
                      Как вам сотрудничество?
                    </h2>
                    <Textarea
                      placeholder="Общее впечатление"
                      variant="bordered"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button fullWidth onPress={onClose}>
                  Отправить отзыв
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
