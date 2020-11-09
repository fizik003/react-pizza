import axios from "axios";
const fetchPizzas = () => {
  axios.get("http://localhost:4000/pizzas").then(({ data }) => setPizzas(data));
};

const setPizzas = (items) => {
  return {
    type: "SET_PIZZAS",
    payload: items,
  };
};

export { setPizzas, fetchPizzas };
