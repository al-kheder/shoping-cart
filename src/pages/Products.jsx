import { useState } from "react";
import { Product } from "../components/Product";
import Data from "../../Data.json";
import "../App.css";
export const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="d-flex gap-3 p-4">
      {products.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
};
