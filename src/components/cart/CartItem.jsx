import { increaseCountPizzas, decreaseCountPizzas, deletePizzas } from '../../redux/actions/cart';
import { IconPlus } from '../icons';

const CartItem = ({ name, price, imageUrl, activeSize, activeType, count, idx, dispatch }) => {
  const increase = () => {
    dispatch(increaseCountPizzas(idx));
  };

  const decrease = () => {
    dispatch(decreaseCountPizzas(idx));
  };

  const deletePizz = () => {
    dispatch(deletePizzas(idx));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {activeType}, {activeSize} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={decrease}
          className="button button--outline button--circle cart__item-count-minus">
          <IconPlus />
        </div>
        <b>{count}</b>
        <div
          onClick={increase}
          className="button button--outline button--circle cart__item-count-plus">
          <IconPlus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price}</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={deletePizz} className="button button--outline button--circle">
          <IconPlus />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
