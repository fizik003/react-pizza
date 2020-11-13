import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filtersActions";
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from "../components";
import { fetchPizzas } from "../redux/actions/pizzasAction";
import { addPizzaToCart } from "../redux/actions/cartAction";

const Home = () => {
  const dispatch = useDispatch();

  // const state = useSelector((state) => {
  //   return {
  //     items: state.pizzas.items,
  //     filters: state.filters,
  //     status: state.pizzas.isLoaded,
  //   };
  // });

  // const { items, status } = state;

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    // fetch("http://localhost:3000/db.json")
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data.pizzas));
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSort = (type) => {
    dispatch(setSortBy(type));
  };

  const handleAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          activeItem={category}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавит", type: "name" },
          ]}
          onSelectSort={onSelectSort}
          sortBy={sortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={item.id}
                {...item}
              />
            ))
          : Array(10)
              .fill(0)
              .map((el, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  );
};

export default Home;
