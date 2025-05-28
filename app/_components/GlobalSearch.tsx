import Button from "./ui/Button";
import Input from "./ui/Input";

export default function GlobalSearch() {
  return (
    <div className="flex w-full flex-row gap-2">
      <Input fullWidth placeholder="Поиск товара, услуги, компании" />
      <Button className="h-[66px] px-10 py-4">Поиск</Button>
    </div>
  );
}
