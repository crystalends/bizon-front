import Block from "@/app/_components/Block";
import GlobalSearch from "@/app/_components/GlobalSearch";
import TCategory from "@/app/_types/Category";

type TCategoriesProps = {
  categories: TCategory[];
};

export default function Categories({ categories }: TCategoriesProps) {
  return (
    <Block title="Компании">
      <GlobalSearch
        inputProps={{
          classNames: {
            inputWrapper: "border border-primary",
          },
        }}
      />
    </Block>
  );
}
