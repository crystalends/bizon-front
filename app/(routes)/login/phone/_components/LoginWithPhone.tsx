import FormButton from "@/app/_components/ui/FormButton";
import Input from "@/app/_components/ui/Input";

export default function LoginWithPhone() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeholder="Телефон" />
      <Input placeholder="Пароль" type="password" />
      <FormButton>Войти</FormButton>
    </div>
  );
}
