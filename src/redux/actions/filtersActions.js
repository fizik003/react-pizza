const setSortBy = (name) => {
  return {
    type: "SET_SORT_BY",
    payload: name,
  };
};
const setCategory = (catIndex) => {
  return {
    type: "SET_CATEGOTR",
    payload: catIndex,
  };
};

export { setCategory, setSortBy };
