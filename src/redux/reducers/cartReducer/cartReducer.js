import { changeSortCount, changeState, changeNewItem, addPizzasMainPage } from './utilsCartReducer';

const initialState = {
  cartPizzas: [],
  allCount: 0,
  fullPrice: 0,
  sortCountByName: {},
};

const cartReducer = (state = initialState, { type, payload }) => {
  const { cartPizzas, allCount, fullPrice, sortCountByName } = state;

  switch (type) {
    case 'ADD_PIZZA':
      const idx = cartPizzas.findIndex(
        ({ name, activeType, activeSize }) =>
          name === payload.name &&
          activeType === payload.activeType &&
          activeSize === payload.activeSize,
      );

      const newItem = changeNewItem(cartPizzas[idx], payload);

      return {
        allCount: allCount + 1,
        fullPrice: fullPrice + payload.price,
        sortCountByName: changeSortCount(sortCountByName, payload.name, 1),
        cartPizzas: addPizzasMainPage(idx, cartPizzas, newItem, payload),
      };

    case 'INCREASE_COUNT_PIZZAS':
      return changeState(state, payload, 1);

    case 'DECREASE_COUNT_PIZZAS':
      return changeState(state, payload, -1);

    case 'DELETE_PIZZAS':
      const pizzasLength = cartPizzas[payload].count;
      return changeState(state, payload, -pizzasLength);

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
