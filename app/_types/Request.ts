import TRegion from "./Region";
import TUser from "./User";

type TRequest = {
  id: number;
  product: string;
  userId: number;
  user?: TUser;
  region: TRegion;
  customers: TUser[];
  createdAt: Date;
  updatedAt: Date;
};

export default TRequest;
