import TUser from "./User";

type TChatMessage = {
  id: number;
  images?: string[];
  user?: TUser;
  userId: number;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

export default TChatMessage;
