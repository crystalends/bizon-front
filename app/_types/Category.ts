type TCategory = {
  id: number;
  name: string;
  parentId?: number;
  parent?: TCategory;
  childs?: TCategory[];
  image?: string;
};

export default TCategory;
