import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import { CartProduct } from "../components/CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} />
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary text-white p-1 rounded-2">
            <h5>Total Items: {totalItem(cart)}</h5>
            <h5>Total Price:${totalPrice(cart).toFixed(2)}</h5>
            <button className="btn btn-sm btn-warning">Cheakout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
