import MyReviews from "./_components/MyReviews";

import TReview from "@/app/_types/Review";

export default function ReviewsPage() {
  const reviews: TReview[] = [
    {
      id: 1,
      value:
        "Отличный сервис! Быстро нашли мне подходящий вариант и помогли с оформлением. Рекомендую!",
      rating: 4,
      userId: 1,
      user: {
        id: 1,
        name: "Александр Петров",
        companyId: 1,
      },
      companyId: 6,
      createdAt: new Date("2024-05-15T10:30:00.000Z"),
      updatedAt: new Date("2024-05-15T10:30:00.000Z"),
    },
    {
      id: 2,
      value:
        "Все понравилось, но немного затянули процесс проверки документов. В целом впечатление положительное.",
      rating: 4,
      userId: 2,
      user: {
        id: 2,
        name: "Екатерина Смирнова",
        companyId: 2,
      },
      companyId: 6,
      createdAt: new Date("2024-05-20T14:45:22.123Z"),
      updatedAt: new Date("2024-05-22T09:15:33.456Z"),
    },
    {
      id: 3,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quisquam quibusdam tempore eum, cumque officia ipsa unde aperiam consequatur minus provident modi quos dignissimos et earum praesentium, fuga vel fugiat at quas neque harum ea dolor! Vero, dolore labore. Voluptatibus qui repellendus accusantium maiores assumenda tenetur fugiat veniam porro tempore odit laboriosam exercitationem impedit iste, officiis eos rerum perferendis ad nemo dolor soluta officia recusandae in veritatis ratione? Fugit neque sapiente mollitia laudantium consequuntur possimus minima placeat iure, necessitatibus dolor voluptatibus delectus tenetur ea soluta qui quis voluptatum porro earum ex dolore libero nobis nam commodi natus? Voluptas eveniet mollitia cumque, optio perferendis velit? Alias accusantium fugit id inventore, minus odit dolores voluptate molestias repudiandae quasi dolore soluta reiciendis accusamus perspiciatis vel! Expedita dolores quae ducimus quo praesentium. Incidunt, sunt excepturi placeat eveniet deserunt sapiente amet eum dolore, enim perspiciatis iusto pariatur odio illo sint ab accusantium, nostrum aspernatur? Fugiat maiores culpa vel facere rem dolore adipisci impedit eaque delectus, porro facilis voluptatem fugit, consectetur deleniti incidunt eum quam obcaecati error laborum, aut deserunt alias voluptatibus. Sequi odio animi quos?",
      rating: 2,
      userId: 5,
      user: {
        id: 5,
        name: "Алена Сорокина",
        companyId: 3,
      },
      companyId: 6,
      createdAt: new Date("2024-05-20T14:45:22.123Z"),
      updatedAt: new Date("2024-05-22T09:15:33.456Z"),
    },
  ];

  return <MyReviews reviews={reviews} />;
}
