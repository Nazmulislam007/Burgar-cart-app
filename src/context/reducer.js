export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCRIMENT":
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === payload) {
            return { ...prod, qty: prod.qty + 1 };
          }
          return prod;
        }),
      };
    case "DECRIMENT":
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === payload) {
            return { ...prod, qty: prod.qty - 1 };
          }
          return prod;
        }),
      };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    default:
      return state;
  }
};
