import Button from "@/app/_components/ui/Button";
import Input from "@/app/_components/ui/Input";

export default function LoginWithPhone() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeholder="Телефон" />
      <Input placeholder="Пароль" />
      <Button className="h-[66px] px-10 py-4">Войти</Button>
    </div>
  );
}
