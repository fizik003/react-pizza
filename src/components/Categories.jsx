import React, { useState } from "react";

const Categories = ({ items, onClickItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
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
