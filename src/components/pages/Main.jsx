import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';
import PizzaLoading from '../PizzaLoading';

const Main = () => {
  const dispatch = useDispatch();

  const { allPizzas, loading } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const sortCountByName = useSelector(({ cart }) => cart.sortCountByName);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = (idx) => {
    dispatch(setCategory(idx));
  };

  const onSelectSortBy = (type) => {
    dispatch(setSortBy(type));
  };

  const pizzasList = allPizzas?.map((pizza) => (
    <PizzaBlock
      {...pizza}
      dispatch={dispatch}
      key={pizza.imageUrl}
      count={sortCountByName[pizza.name]}
    />
  ));

  const LoadOrPizzas = loading
    ? pizzasList
    : Array(12)
        .fill(0)
        .map((_, idx) => <PizzaLoading key={idx} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories onSelectCategory={onSelectCategory} category={category} />
          <SortPopup onSelectSortBy={onSelectSortBy} sortBy={sortBy} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{LoadOrPizzas}</div>
      </div>
    </div>
  );
};

export default Main;
