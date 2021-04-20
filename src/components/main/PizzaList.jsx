import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../../redux/actions/cart';
import PizzaBlock from './PizzaBlock';
import PizzaLoading from './PizzaLoading';

const PizzaList = () => {
  const dispatch = useDispatch();

  const { allPizzas, loading } = useSelector(({ pizzas }) => pizzas);
  const sortCountByName = useSelector(({ cart }) => cart.sortCountByName);

  const handleAddPizza = (obj) => {
    dispatch(addPizza(obj));
  };

  const pizzasList = allPizzas?.map((pizza) => (
    <PizzaBlock
      count={sortCountByName[pizza.name]}
      handleAddPizza={handleAddPizza}
      key={pizza.imageUrl}
      {...pizza}
    />
  ));

  return loading
    ? pizzasList
    : Array(12)
        .fill(0)
        .map((_, idx) => <PizzaLoading key={idx} />);
};

export default PizzaList;
