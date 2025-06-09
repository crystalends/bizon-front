import Block, { TBlockProps } from "./Block";

export default function SubBlock({
  renderTitle = (title) => (
    <h3 className="font-semibold text-[40px]">{title}</h3>
  ),
  ...props
}: TBlockProps) {
  return <Block renderTitle={renderTitle} {...props} />;
}
