import React, { useState } from "react";

const Categories = ({ activeItem, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((el, index) => {
            return (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => onClickItem(index)}
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
