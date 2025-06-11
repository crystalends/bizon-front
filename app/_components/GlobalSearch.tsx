"use client";

import { useEffect, useState } from "react";
import { TButtonProps } from "./ui/Button";
import FormButton from "./ui/FormButton";
import Input, { TInputProps } from "./ui/Input";
import SearchIcon from "./icons/SearchIcon";

type TGlobalSearchProps = {
  inputProps?: TInputProps;
  buttonProps?: TButtonProps;
};

export default function GlobalSearch({
  inputProps,
  buttonProps,
}: TGlobalSearchProps) {
  const [isSmallerThanXl, setIsSmallerThanXl] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1279px)");

    const handleResize = (e: MediaQueryListEvent) => {
      setIsSmallerThanXl(e.matches);
    };

    setIsSmallerThanXl(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full flex-row xl:gap-2">
      <Input
        fullWidth
        classNames={{
          input: "xl:text-xl",
          inputWrapper: "!bg-white shadow-lg rounded-r-none xl:rounded-lg",
        }}
        color="default"
        placeholder="Поиск товара, услуги, компании"
        variant="flat"
        {...inputProps}
      />
      <FormButton
        isIconOnly={isSmallerThanXl}
        className="min-w-[51px] xl:min-w-[166px] shadow-lg xl:shadow-none rounded-l-none xl:rounded-lg"
        {...buttonProps}
      >
        {isSmallerThanXl ? <SearchIcon /> : "Поиск"}
      </FormButton>
    </div>
  );
}
