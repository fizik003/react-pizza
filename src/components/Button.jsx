import React from "react";
import cn from "classnames";

const Button = ({ outline, children, className, onClick }) => {
  return (
    <button
      className={cn("button", { "button--outline": outline }, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
