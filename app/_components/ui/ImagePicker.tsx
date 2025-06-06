"use client";

import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import PlusIcon from "../icons/PlusIcon";

type ImagePickerProps = {
  value?: string | File | null;
  onChange?: (file: File | null) => void;
  label?: string;
  width?: number;
  height?: number;
  rounded?: string; // tailwind class: e.g. "rounded-xl"
  className?: string;
};

export default function ImagePicker({
  value = null,
  onChange,
  label = "Выбрать фото",
  width = 192,
  height = 192,
  rounded = "rounded-2xl",
  className = "",
}: ImagePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file && onChange) {
      onChange(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const previewUrl = value instanceof File ? URL.createObjectURL(value) : value;

  return (
    <div>
      <input
        ref={inputRef}
        accept="image/*"
        className="hidden"
        type="file"
        onChange={handleSelect}
      />
      <div
        className={clsx(
          "cursor-pointer flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-300 transition text-gray-700 gap-2",
          rounded,
          className,
        )}
        role="button"
        style={{ width, height }}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {previewUrl ? (
          <Image
            alt="Preview"
            className={clsx("object-cover w-full h-full", rounded)}
            height={height}
            src={previewUrl}
            width={width}
          />
        ) : (
          <>
            <PlusIcon />
            <span className="text-sm font-medium">{label}</span>
          </>
        )}
      </div>
    </div>
  );
}
