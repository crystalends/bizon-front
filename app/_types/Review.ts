import TCompany from "./Company";
import TUser from "./User";

type TReview = {
  id: number;
  value: string;
  rating: number;
  userId: number;
  user?: TUser;
  companyId: number;
  company?: TCompany;
  createdAt: Date;
  updatedAt: Date;
};

export default TReview;
