"use client";

import { ComponentPropsWithoutRef, useState, useRef, useEffect } from "react";
import { User, UserProps } from "@heroui/user";
import StarsRating from "../ui/StarsRating";
import clsx from "clsx";
import Button from "../ui/Button";

type TReviewProps = {
  userProps: UserProps;
  value: string;
  rating?: number;
  defaultLines?: number;
} & ComponentPropsWithoutRef<"div">;

export default function Review({
  userProps,
  rating,
  value,
  defaultLines = 3,
  className,
  ...props
}: TReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight,
      );
      const maxHeight = lineHeight * defaultLines;
      setIsClamped(textRef.current.scrollHeight > maxHeight);
    }
  }, [value, defaultLines]);

  return (
    <div className={clsx("flex flex-col gap-4", className)} {...props}>
      <User className="justify-start" {...userProps} />
      {rating && <StarsRating value={rating} readOnly />}
      <p
        ref={textRef}
        className={`${isExpanded ? "" : "line-clamp-3 text-ellipsis overflow-hidden"}`}
      >
        {value}
      </p>
      {isClamped && (
        <Button
          className="w-fit text-sm p-2 h-6"
          variant="light"
          color="primary"
          onPress={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Свернуть" : "Читать полностью"}
        </Button>
      )}
    </div>
  );
}
