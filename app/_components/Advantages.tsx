import { TAdvantageCardProps } from "./AdvantageCard";
import Container from "./shared/Container";

export default function Advantages() {
  const advantages: TAdvantageCardProps[] = [{}];

  return (
    <Container className="text-center flex flex-col gap-5">
      <h2 className="font-semibold text-[24px] xl:text-[44px]">
        Преимущества платформы:
      </h2>
    </Container>
  );
}
