import { format } from "date-fns";

import ArticlePreview from "@/app/_components/shared/ArticlePreview";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import TArticle from "@/app/_types/Article";

type TBlogProps = {
  articles: TArticle[];
};

export default function Blog({ articles }: TBlogProps) {
  return (
    <Container className="pt-10">
      <Block title="Блог BizON">
        <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-5">
          {articles.map(({ id, title, image, createdAt }) => {
            return (
              <ArticlePreview
                key={id}
                createdAt={format(createdAt, "dd.MM.yyyy")}
                imageProps={{
                  src: image,
                }}
                title={title}
              />
            );
          })}
        </div>
      </Block>
    </Container>
  );
}
