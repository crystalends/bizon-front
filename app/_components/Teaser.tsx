import Container from "./shared/Container";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function Teaser() {
  return (
    <div className="bg-gray-50 min-h-[720px] xl:min-h-[1080px]">
      <Container className="flex pt-36 xl:pt-[232px] justify-center">
        <div className="flex flex-col gap-10 w-full text-center">
          <div className="max-w-[690px] mx-auto">
            <h1 className="text-[104px] font-semibold leading-[1.1]">
              Умный B2B маркетплейс
            </h1>
          </div>
          <div className="max-w-[550px] mx-auto">
            <p className="text-xl ">
              Общайтесь с надежными поставщиками и открывайте для себя
              высококачественные продукты и услуги
            </p>
          </div>
          <div className="max-w-[770px] w-full mx-auto">
            <div className="flex w-full flex-row gap-2">
              <Input fullWidth placeholder="Поиск товара, услуги, компании" />
              <Button className="h-[66px] px-10 py-4">Поиск</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
