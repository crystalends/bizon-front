import { CardBody } from "@heroui/card";
import Container from "./shared/Container";
import PromoCard from "./PromoCard";
import Button from "./ui/Button";

export default function Promo() {
  return (
    <Container className="w-full">
      <div className="flex flex-wrap xl:flex-nowrap gap-5 justify-center">
        <PromoCard className="bg-[url(/images/d083e80aa046a9748c7ca231c7b13ed20430b4b9.png)] bg-cover">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#1E3A8A] opacity-[92%]"
          />
          <CardBody className="p-10 xl:p-20">
            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-8">
                <h2 className="max-w-[521px] text-white font-semibold text-[24px] xl:text-[44px]">
                  Начните расти вместе с BizON
                </h2>
                <p className="text-white text-base xl:text-xl">
                  Присоединяйтесь к тысячам успешных предпринимателей, которые
                  уже используют возможности нашей платформы для развития своего
                  бизнеса.
                </p>
              </div>
              <Button className="h-[64px] w-fit px-9 py-5" color="default">
                Разместить компанию
              </Button>
            </div>
          </CardBody>
        </PromoCard>
        <PromoCard className="bg-[url(/images/558ada7c0e75d7e82408ce27f0040cb3f639a45d.png)] hidden xl:inline bg-cover" />
      </div>
    </Container>
  );
}
