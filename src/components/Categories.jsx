import React, { useState } from "react";

const Categories = ({ items, onClickItems }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((el, index) => {
            return (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => setActiveItem(index)}
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
