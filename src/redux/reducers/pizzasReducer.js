const initialState = {
  allPizzas: [],
  loading: false,
};

const pizzasReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PIZZAS_SUCCESS':
      return {
        ...state,
        allPizzas: payload,
        loading: true,
      };
    case 'FETCH_PIZZAS_REQUEST':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
