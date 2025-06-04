import { TButtonProps } from "./ui/Button";
import FormButton from "./ui/FormButton";
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
      <FormButton {...buttonProps}>Поиск</FormButton>
    </div>
  );
}
