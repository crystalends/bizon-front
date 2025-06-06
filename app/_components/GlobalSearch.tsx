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
        fullWidth
        classNames={{
          input: "text-xl",
          inputWrapper: "!bg-white shadow-lg",
        }}
        color="default"
        placeholder="Поиск товара, услуги, компании"
        variant="flat"
        {...inputProps}
      />
      <FormButton className="min-w-[166px]" {...buttonProps}>
        Поиск
      </FormButton>
    </div>
  );
}
