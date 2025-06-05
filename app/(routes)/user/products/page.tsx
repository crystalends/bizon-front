import TProduct from "@/app/_types/Product";
import Products from "./_components/Products";

export default function ProductsPage() {
  const products: TProduct[] = [
    {
      id: 1,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
    {
      id: 2,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
    {
      id: 3,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
    {
      id: 4,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
    {
      id: 5,
      name: "Example product",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
    },
    {
      id: 6,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
    {
      id: 7,
      name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
      image:
        "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
      price: 1234,
    },
  ];

  return <Products products={products} />;
}
