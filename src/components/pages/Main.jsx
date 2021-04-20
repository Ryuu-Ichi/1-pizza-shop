import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import Categories from '../main/Categories';
import SortPopup from '../main/SortPopup';
import PizzaList from '../main/PizzaList';

const Main = () => {
  const dispatch = useDispatch();

  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = (idx) => {
    dispatch(setCategory(idx));
  };

  const onSelectSortBy = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories onSelectCategory={onSelectCategory} category={category} />
          <SortPopup onSelectSortBy={onSelectSortBy} sortBy={sortBy} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaList />
        </div>
      </div>
    </div>
  );
};

export default Main;
