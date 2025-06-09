import FeatureCardBody, { TFeatureCardBodyProps } from "./FeatureCardBody";
import FilledDialogIcon from "./icons/FilledDialogIcon";
import StarInCircleIcon from "./icons/StarInCircleIcon";
import CommunityIcon from "./icons/СommunityIcon";
import Container from "./shared/Container";
import FeatureCard from "./ui/FeatureCard";

export default function Advantages() {
  const advantages: TFeatureCardBodyProps[] = [
    {
      key: 1,
      title: "Широкий охват аудитории",
      description:
        "Доступ к миллионам потенциальных клиентов и партнеров по всей стране.",
      icon: <CommunityIcon />,
    },
    {
      key: 2,
      title: "Удобный интерфейс",
      description:
        "Интуитивно понятная система управления, не требующая специальных навыков для работы.",
      icon: <StarInCircleIcon />,
    },
    {
      key: 3,
      title: "Техническая поддержка",
      description:
        "Круглосуточная помощь специалистов, которые оперативно решают любые возникающие вопросы.",
      icon: <FilledDialogIcon />,
    },
  ];

  return (
    <Container className="text-center flex flex-col gap-5">
      <h2 className="font-semibold text-[20px] xl:text-[32px]">
        Преимущества платформы:
      </h2>
      <div className="flex flex-wrap xl:flex-nowrap justify-center gap-5">
        {advantages.map(({ key, ...advantage }) => (
          <FeatureCard key={key}>
            <FeatureCardBody {...advantage} />
          </FeatureCard>
        ))}
      </div>
    </Container>
  );
}
