// To Add Item to cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// To Delete Item from cart

export const deleteItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
