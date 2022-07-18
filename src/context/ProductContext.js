import React, { createContext, useContext, useEffect, useReducer } from "react";
import burgarDetails from "../constant/BurgarApi";
import { reducer, sortReducer } from "./reducer";

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

  const [sorted, sortdispatch] = useReducer(sortReducer, {
    sortByPrice: "",
    byRating: 0,
    byFastDelivery: false,
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

  const removeCart = () => {
    return dispatch({
      type: "REMOVE_CART",
    });
  };

  useEffect(() => {
    return dispatch({
      type: "TOTAL",
    });
  }, [state.cart]);

  return (
    <createCartContext.Provider
      value={{
        ...state,
        ...sorted,
        incriment,
        decriment,
        addToCart,
        removeCartPorduct,
        removeCart,
        sortdispatch,
      }}
    >
      {children}
    </createCartContext.Provider>
  );
};

export default ProductContext;
