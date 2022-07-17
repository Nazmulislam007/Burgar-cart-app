import React, { createContext, useContext, useReducer } from "react";
import burgarDetails from "../constant/BurgarApi";
import { reducer } from "./reducer";

const createCartContext = createContext();

export const useCart = () => {
  return useContext(createCartContext);
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: burgarDetails,
    cart: [],
    totalAmounts: 0,
    totalProducts: 0,
  });
  const incriment = (id) => {
    return dispatch({
      type: "INCRIMENT",
      payload: id,
    });
  };

  const decriment = (id) => {
    return dispatch({
      type: "DECRIMENT",
      payload: id,
    });
  };

  const addToCart = (prod) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const removeCartPorduct = (id) => {
    return dispatch({
      type: "REMOVE_CART_PRODUCT",
      payload: id,
    });
  };

  return (
    <createCartContext.Provider
      value={{ ...state, incriment, decriment, addToCart, removeCartPorduct }}
    >
      {children}
    </createCartContext.Provider>
  );
};

export default ProductContext;
