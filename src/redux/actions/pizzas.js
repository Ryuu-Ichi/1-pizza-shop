import PizzaServices from '../../services/pizzaServices';

const pizzaServices = new PizzaServices();

export const successPizzas = (pizzas) => ({
  type: 'FETCH_PIZZAS_SUCCESS',
  payload: pizzas,
});

export const requestPizzas = () => ({
  type: 'FETCH_PIZZAS_REQUEST',
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(requestPizzas());
  pizzaServices.getData(category, sortBy).then((pizzas) => {
    dispatch(successPizzas(pizzas));
  });
};
