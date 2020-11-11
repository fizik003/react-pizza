import axios from "axios";

const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};

const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  const order = sortBy === "name" ? "asc" : "desc";
  axios
    .get(
      `http://localhost:4000/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=${order}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};
const setPizzas = (items) => {
  return {
    type: "SET_PIZZAS",
    payload: items,
  };
};

export { setPizzas, fetchPizzas };
