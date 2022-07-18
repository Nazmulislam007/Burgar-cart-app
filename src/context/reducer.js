export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCRIMENT":
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === payload) {
            return {
              ...prod,
              qty: prod.qty + 1,
            };
          }
          return prod;
        }),
      };

    case "DECRIMENT":
      return {
        ...state,
        cart: state.cart
          .map((prod) => {
            if (prod.id === payload) {
              return { ...prod, qty: prod.qty - 1 };
            }
            return prod;
          })
          .filter((prod) => {
            return prod.qty !== 0;
          }),
      };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };

    case "REMOVE_CART_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((cart) => {
          return cart.id !== payload;
        }),
      };

    case "REMOVE_CART":
      return { ...state, cart: [] };

    case "TOTAL":
      let { totalAmounts, totalProducts } = state.cart.reduce(
        (prev, curnt) => {
          let { qty, price } = curnt;
          let updateAmounts = qty * price;
          prev.totalAmounts += updateAmounts;

          prev.totalProducts += qty;
          return prev;
        },
        { totalAmounts: 0, totalProducts: 0 }
      );
      return { ...state, totalAmounts, totalProducts };

    default:
      return state;
  }
};

export const sortReducer = (sorted, { type, payload }) => {
  switch (type) {
    case "SORT_BY_PRICE":
      return { ...sorted, sortByPrice: payload };
    case "FAST_DELIVERY":
      return { ...sorted, byFastDelivery: !payload };
    case "SORT_BY_RATING":
      return { ...sorted, byRating: payload };
    case "CLEAR_FILTER":
      return { sortByPrice: "", byRating: 0, byFastDelivery: false };
    default:
      return sorted;
  }
};
