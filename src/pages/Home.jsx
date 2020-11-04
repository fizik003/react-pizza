import React from "react";

import { Categories, SortPopup, PizzaBlock } from "../components";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClickItems={(index) => setActiveItem(index)}
          items={[
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
        <SortPopup items={["популярности", "цене", "алфавит"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
