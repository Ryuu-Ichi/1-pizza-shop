import { combineReducers } from 'redux';
import cart from './cartReducer/cartReducer';
import filters from './filtersReducer';
import pizzas from './pizzasReducer';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducer;
