import TCategory from "./Category";
import TDetails from "./Details";
import TProduct from "./Product";
import TRegion from "./Region";

type TCompany = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  categories?: TCategory[];
  products?: TProduct[];
  rating?: number;
  regions?: TRegion[];
  details?: TDetails;
  isVerified: boolean;
  contactInformation?: TContactInformation;
  _count?: {
    reviews?: number;
    products?: number;
  };
};

export default TCompany;
