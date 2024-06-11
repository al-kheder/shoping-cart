import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
export const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="d-flex border mt-3 ">
      <img src={product.thumbnail} alt="" className="w-25 h-25 " />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2 p-1 m-2"
            onClick={() => Decrease(product.id)}
          >
            -
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2 p-1 m-2"
            onClick={() => Increase(product.id)}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning "
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
