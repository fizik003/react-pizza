const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  priceByType: {},
};

const countPricePizza = (arr) =>
  arr.reduce((sum, pizza) => pizza.price + sum, 0);

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
      const countAllPrice = countPricePizza(arrAllPizzas);
      const priceByType = arrAllPizzas.reduce((acc, pizza) => {
        if (acc[pizza.id]) {
          acc[pizza.id] += pizza.price;
        } else {
          acc[pizza.id] = pizza.price;
        }
        return acc;
      }, {});

      console.log(priceByType);

      return {
        ...state,
        items: newItems,
        totalCount: arrAllPizzas.length,
        totalPrice: countAllPrice,
        priceByType: priceByType,
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "REMOVE_CART_ITEM":
      const newState = {
        ...state,
      };

      const deletePrice = newState.priceByType[action.payload];
      const deleteCountPizza = newState.items[action.payload].length;

      delete newState.items[action.payload];
      return {
        ...newState,
        totalPrice: state.totalPrice - deletePrice,
        totalCount: state.totalCount - deleteCountPizza,
      };

    default:
      return state;
  }
};

export { cartReducer };
