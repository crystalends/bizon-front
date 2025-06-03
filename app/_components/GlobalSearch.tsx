import Button, { TButtonProps } from "./ui/Button";
import Input, { TInputProps } from "./ui/Input";

type TGlobalSearchProps = {
  inputProps?: TInputProps;
  buttonProps?: TButtonProps;
};

export default function GlobalSearch({
  inputProps,
  buttonProps,
}: TGlobalSearchProps) {
  return (
    <div className="flex w-full flex-row gap-2">
      <Input
        classNames={{
          input: "text-xl",
          inputWrapper: "!bg-white shadow-lg",
        }}
        variant="flat"
        color="default"
        fullWidth
        placeholder="Поиск товара, услуги, компании"
        {...inputProps}
      />
      <Button className="h-[66px] px-10 py-4" {...buttonProps}>
        Поиск
      </Button>
    </div>
  );
}
