"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationProps } from "@heroui/pagination";
import TPaginate from "@/app/_types/Paginate";
import TPolymorphicProps from "@/app/_types/Polymorphic";
import { ElementType } from "react";
import clsx from "clsx";

type TPaginateProps<T extends ElementType = "nav"> = {
  divClassName?: string;
} & TPolymorphicProps<T, Omit<PaginationProps, "initialPage" | "total">> &
  TPaginate;

export default function Paginate({
  total,
  limit,
  classNames = {},
  divClassName,
  ...props
}: TPaginateProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPageCount = Math.ceil(total / limit);
  const point = Number(searchParams.get("page")) || 1;

  const createPageURL = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    return params.toString();
  };

  return (
    <div className={clsx("flex justify-center", divClassName)}>
      <Pagination
        classNames={{
          base: clsx(classNames.base),
          wrapper: clsx("gap-3", classNames.wrapper),
          item: clsx("min-w-[23px] w-fit h-[23px]", classNames.item),
          cursor: clsx("min-w-[23px] w-fit h-[23px]", classNames.cursor),
          prev: clsx("min-w-[23px] w-fit h-[23px]", classNames.prev),
          next: clsx("min-w-[23px] w-fit h-[23px]", classNames.next),
          ellipsis: clsx(classNames.ellipsis),
        }}
        initialPage={point}
        total={totalPageCount}
        onChange={(page: number) =>
          router.push(`?${createPageURL(page.toString())}`)
        }
        showControls
        variant="light"
        {...props}
      />
    </div>
  );
}
