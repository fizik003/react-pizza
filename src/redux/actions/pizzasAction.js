import axios from "axios";

const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};

const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get("http://localhost:4000/pizzas")
    .then(({ data }) => dispatch(setPizzas(data)));
};

const setPizzas = (items) => {
  return {
    type: "SET_PIZZAS",
    payload: items,
  };
};

export { setPizzas, fetchPizzas };
