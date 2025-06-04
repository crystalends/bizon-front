import FormButton from "@/app/_components/ui/FormButton";
import Input from "@/app/_components/ui/Input";

export default function RestoreWithPhone() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeholder="Телефон" />
      <FormButton className="h-[66px] px-10 py-4">Далее</FormButton>
    </div>
  );
}
