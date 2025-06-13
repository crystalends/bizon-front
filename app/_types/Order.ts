import TUser from "./User";

type TOrder = {
  id: number;
  product: string;
  userId: number;
  user?: TUser;
  executors: TUser[];
  createdAt: Date;
  updatedAt: Date;
};

export default TOrder;
