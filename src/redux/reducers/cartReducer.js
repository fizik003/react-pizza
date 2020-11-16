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

    case "MINUS_CART_ITEM": {
      let currentState = { ...state };
      if (state.items[action.payload].length > 1) {
        const { price: deletePizzaPrice } = currentState.items[
          action.payload
        ].pop();
        currentState.totalPrice -= deletePizzaPrice;
        currentState.priceByType[action.payload] -= deletePizzaPrice;
        currentState.totalCount -= 1;
      }

      return currentState;
    }

    case "PLUS_CART_ITEM": {
      let curretnState = { ...state };
      const pizza = curretnState.items[action.payload][0];
      curretnState.items[action.payload] = [
        ...curretnState.items[action.payload],
        curretnState.items[action.payload][0],
      ];
      curretnState.priceByType[action.payload] += pizza.price;
      curretnState.totalCount += 1;
      curretnState.totalPrice += pizza.price;

      return curretnState;
    }

    default:
      return state;
  }
};

export { cartReducer };
