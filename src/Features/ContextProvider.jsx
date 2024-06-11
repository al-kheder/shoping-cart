import React from "react";
import { useReducer, createContext } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

