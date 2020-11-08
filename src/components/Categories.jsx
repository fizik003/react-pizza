import React, { useState } from "react";

const Categories = ({ items, onClickItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItems(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((el, index) => {
            return (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => onSelectItem(index)}
                key={el}
              >
                {el}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
