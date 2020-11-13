const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      return {
        ...state,
        items: {
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        },
      };

    default:
      return state;
  }
};

export { cartReducer };
