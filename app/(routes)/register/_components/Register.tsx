import Container from "@/app/_components/shared/Container";
import FormButton from "@/app/_components/ui/FormButton";
import Input from "@/app/_components/ui/Input";
import Link from "@/app/_components/ui/Link";

export default function Register() {
  return (
    <Container className="pt-10 xl:pt-0 flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="mx-auto text-center w-full max-w-[506px] px-4">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-[44px] font-semibold">Регистрация</h2>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-3">
              <Input placeholder="Имя и фамилия" />
              <Input placeholder="Телефон" />
              <Input placeholder="Почта" />
              <Input placeholder="Название компании (если есть)" />
              <Input placeholder="ИНН компании (если есть)" />
              <Input placeholder="Придумайте пароль" type="password" />
              <Input placeholder="Подтвердите пароль" type="password" />
              <FormButton className="h-[66px] px-10 py-4">
                Зарегистрироваться
              </FormButton>
            </div>
            <p className="text-xs">
              Нажимая кнопку «Зарегистрироваться», Вы даете согласие на
              обработку персональных данных согласно нашей политике
              конфиденциальности
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <p className="text-xs">Уже зарегистрированы?</p>
            <Link className="font-medium text-xl" color="primary" href="/login">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
