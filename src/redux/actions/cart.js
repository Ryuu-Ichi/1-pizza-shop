export const addPizza = (obj) => ({
  type: 'ADD_PIZZA',
  payload: { ...obj, count: 1 },
});

export const increaseCountPizzas = (idx) => ({
  type: 'INCREASE_COUNT_PIZZAS',
  payload: idx,
});

export const decreaseCountPizzas = (idx) => ({
  type: 'DECREASE_COUNT_PIZZAS',
  payload: idx,
});

export const deletePizzas = (idx) => ({
  type: 'DELETE_PIZZAS',
  payload: idx,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
