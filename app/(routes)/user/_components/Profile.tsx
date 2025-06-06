import ProfileCard from "./ProfileCard";

import Input from "@/app/_components/ui/Input";
import FormButton from "@/app/_components/ui/FormButton";
import Label from "@/app/_components/ui/Label";
import ImagePicker from "@/app/_components/ui/ImagePicker";

export default function Profile() {
  return (
    <div className="flex flex-col-reverse xl:flex-row w-full gap-5">
      <div className="flex w-full flex-col gap-5">
        <ProfileCard title="Основная информация">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Имя и фамилия</Label>
            <Input id="name" placeholder="Александр Петров" />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
        <ProfileCard title="Контактная информация">
          <div className="flex flex-col gap-3">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" placeholder="Телефон" />
            <Label htmlFor="email">Почта</Label>
            <Input id="email" placeholder="Почта" />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
        <ProfileCard title="Конфиденциальность">
          <div className="flex flex-col gap-3">
            <Label htmlFor="old-password">Старый пароль</Label>
            <Input
              id="old-password"
              placeholder="Старый пароль"
              type="password"
            />
            <Label htmlFor="new-password">Новый пароль</Label>
            <Input
              id="new-password"
              placeholder="Новый пароль"
              type="password"
            />
            <Label htmlFor="confirm-password">Подтвердите пароль</Label>
            <Input
              id="confirm-password"
              placeholder="Подтвердите пароль"
              type="password"
            />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
      </div>
      <div className="xl:top-10 xl:sticky xl:h-fit xl:self-start flex justify-center">
        <ImagePicker />
      </div>
    </div>
  );
}
