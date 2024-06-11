import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

export const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-title">${product.price}</h5>
          {/*  <p className="card-text fw-lighter">{product.description}</p> */}
          <buton
            href="#"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </buton>
        </div>
      </div>
    </>
  );
};
