import Partners from "./_components/Partners";

export default function PartnersPage() {
  const partners: TPartner[] = [
    {
      id: 1,
      searcher: "Иванов Иван Петрович",
      phone: "+79258889898",
      email: "lorem@icloud.com",
      product: "Перевозка крупногабаритных товаров",
      region: "Москва",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      searcher: "Пешков Владимир Алексеевич",
      phone: "+79258889800",
      email: "ipsum@icloud.com",
      product: "Поставщик сварочных материалов",
      region: "Москва",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <Partners partners={partners} />;
}
