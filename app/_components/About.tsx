import Container from "./shared/Container";

export default function About() {
  return (
    <Container className="xl:text-center flex flex-col gap-5">
      <h2 className="font-semibold text-[28px] xl:text-[44px]">
        Что такое BizON?
      </h2>
      <div className="xl:max-w-[770px] mx-auto">
        <p>
          <span className="font-semibold">BizON</span> — это современная
          онлайн-платформа, созданная специально для поддержки малого и среднего
          бизнеса. Мы объединяем продавцов и покупателей, предоставляя все
          необходимые инструменты для эффективного развития вашего дела.
        </p>
      </div>
    </Container>
  );
}
