import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="120" r="115" />
    <rect x="0" y="260" rx="0" ry="0" width="280" height="26" />
    <rect x="0" y="295" rx="6" ry="6" width="280" height="84" />
    <rect x="0" y="402" rx="3" ry="3" width="91" height="31" />
    <rect x="115" y="283" rx="0" ry="0" width="2" height="4" />
    <rect x="135" y="394" rx="30" ry="30" width="141" height="48" />
  </ContentLoader>
);

export default PizzaLoader;
