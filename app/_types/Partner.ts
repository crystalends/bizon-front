import TUser from "./User";

type TPartner = {
  id: number;
  product: string;
  userId: number;
  user?: TUser;
  createdAt: Date;
  updatedAt: Date;
};

export default TPartner;
