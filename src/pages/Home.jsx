import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../redux/actions/filtersActions";
import { Categories, SortPopup, PizzaBlock } from "../components";

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return { items: state.pizzas.items, filters: state.filters };
  });
  const { items, filters } = state;

  // const pizzas = items.filter(
  //   (pizza) => !filters.category || pizza.category === filters.category
  // );

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItems={onSelectCategory}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавит", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
