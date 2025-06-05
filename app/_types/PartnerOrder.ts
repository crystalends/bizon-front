import TUser from "./User";

type TPartnerOrder = {
  id: number;
  product: string;
  userId: number;
  user?: TUser;
  executors: TUser[];
  createdAt: Date;
  updatedAt: Date;
};

export default TPartnerOrder;
