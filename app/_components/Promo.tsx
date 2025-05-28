import { CardBody, CardFooter, CardHeader } from "@heroui/card";
import Container from "./shared/Container";
import Button from "./ui/Button";
import PromoCard from "./PromoCard";

export default function Promo() {
  return (
    <Container className="w-full">
      <div className="flex flex-wrap xl:flex-nowrap gap-4 justify-center">
        <PromoCard>
          <CardHeader>
            <h2 className="font-semibold text-[24px] xl:text-[44px]">
              Начните расти вместе с BizON
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-base xl:text-xl">
              Присоединяйтесь к тысячам успешных предпринимателей, которые уже
              используют возможности нашей платформы для развития своего
              бизнеса.
            </p>
          </CardBody>
          <CardFooter>
            <Button color="default">Разместить компанию</Button>
          </CardFooter>
        </PromoCard>
        <PromoCard>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium maxime laborum expedita quia ea error? Nemo doloribus
            explicabo laborum reiciendis beatae repellat, error aut mollitia!
            Perferendis error harum minus.
          </CardBody>
        </PromoCard>
      </div>
    </Container>
  );
}
