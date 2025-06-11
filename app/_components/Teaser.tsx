import GlobalSearch from "./GlobalSearch";
import Container from "./shared/Container";

export default function Teaser() {
  return (
    <div className="bg-gray-50 xl:min-h-screen">
      <Container className="flex justify-center items-center min-h-[inherit]">
        <div className="flex flex-col gap-10 w-full text-center py-10 xl:py-0">
          <div className="max-w-[500px] xl:max-w-[690px] mx-auto">
            <h1 className="text-[40px] xl:text-[104px] font-semibold">
              Умный B2B маркетплейс
            </h1>
          </div>
          <div className="max-w-[500px] xl:max-w-[550px] mx-auto">
            <p className="text-sm xl:text-xl">
              Общайтесь с надежными поставщиками и открывайте для себя
              высококачественные продукты и услуги
            </p>
          </div>
          <div className="max-w-[770px] w-full mx-auto">
            <GlobalSearch />
          </div>
        </div>
      </Container>
    </div>
  );
}
