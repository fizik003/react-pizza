const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",

  payload: id,
});

const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});

export {
  addPizzaToCart,
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
};
