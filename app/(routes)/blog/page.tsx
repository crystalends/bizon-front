import Blog from "./_components/Blog";

import TArticle from "@/app/_types/Article";

export default function BlogPage() {
  const articles: TArticle[] = [
    {
      id: 1,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      title: "Lorem ipsum",
      image: "https://www.profguide.io/images/article/a/50/9FnL-es52r.webp",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam dolorem consequuntur iusto praesentium cumque nesciunt excepturi harum aut, possimus maxime distinctio natus dignissimos beatae, quod molestiae itaque minima id commodi perspiciatis. Ipsam perspiciatis nostrum et aut dolor. Voluptates ex beatae harum magni ut qui nihil repellat perspiciatis accusantium, fugiat architecto hic facilis molestiae iste fuga corporis officia maxime explicabo et dolorem quasi. Illum error maiores reprehenderit ex eum, maxime iste aspernatur odit rerum beatae qui minima earum ratione cum molestias. Iure doloribus ad adipisci alias vero enim, vel iusto aliquam. Quis sapiente et molestias ducimus, architecto voluptatum nobis commodi!",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <Blog articles={articles} />;
}
