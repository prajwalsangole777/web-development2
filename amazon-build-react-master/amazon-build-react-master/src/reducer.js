export const initialState = {
  basket: [],
  user: null,
};

export const getTotalPrice = (basket) =>
  basket
    ?.reduce((pre, cur) => {
      return pre + cur.price;
    }, 0)
    .toFixed(2);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...action.item],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
