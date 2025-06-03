import TCompany from "./Company";

type TUser = {
  id: number;
  name: string;
  image?: string;
  companyId?: number;
  company?: TCompany;
};

export default TUser;
