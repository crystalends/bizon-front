import TCategory from "./Category";
import TProduct from "./Product";

type TCompany = {
  id: number;
  name: string;
  description: string;
  image?: string;
  categories?: TCategory[];
  products?: TProduct[];
  rating: number;
  isVerified: boolean;
  contactInformation?: TContactInformation;
  _count?: {
    ratings?: number;
    products?: number;
  };
};

export default TCompany;
