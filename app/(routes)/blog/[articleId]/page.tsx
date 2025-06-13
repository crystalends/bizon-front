import Article from "./_components/Article";

import TArticle from "@/app/_types/Article";

export default function ArticlePage() {
  const article: TArticle = {
    id: 1,
    title: "Секреты успешного профиля продавца на BizON",
    value:
      "Создание успешного профиля продавца на платформе BizON — это не просто размещение информации о товарах и услугах. Это комплексная работа, направленная на привлечение внимания потенциальных клиентов и повышение доверия к вашему бизнесу. Вот несколько ключевых аспектов, которые помогут вам выделиться среди конкурентов и достичь высоких результатов.",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
  };

  return <Article article={article} />;
}
