import { useState } from 'react';
import SizesList from './SizesList';
import TypesList from './TypesList';
import { IconPizzaBlock } from '../icons';

const typs = ['тонкое', 'традиционное'];

const PizzaBlock = ({ name, imageUrl, price, sizes, types, count, handleAddPizza }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const addToCart = () => {
    const obj = { name, price, activeType: typs[activeType], activeSize, imageUrl };
    handleAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <TypesList types={types} activeType={activeType} setActiveType={setActiveType} />
        <SizesList sizes={sizes} activeSize={activeSize} setActiveSize={setActiveSize} />
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={addToCart} className="button button--outline button--add">
          <IconPizzaBlock />
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
