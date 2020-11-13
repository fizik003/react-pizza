const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const arrAllPizzas = [].concat.apply([], Object.values(newItems));
      const countAllPrice = arrAllPizzas.reduce(
        (sum, pizza) => pizza.price + sum,
        0
      );
      return {
        ...state,
        items: newItems,
        totalCount: arrAllPizzas.length,
        totalPrice: countAllPrice,
      };
    }

    default:
      return state;
  }
};

export { cartReducer };
