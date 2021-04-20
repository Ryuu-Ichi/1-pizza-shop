import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cart';
import CartEmpty from '../cart/CartEmpty';
import CartItem from '../cart/CartItem';
import { IconBasket, IconClearCart } from '../icons';
import iconBack from '../../assets/img/iconBack.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartPizzas, allCount, fullPrice } = useSelector(({ cart }) => cart);

  const clear = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onClickOrder = () => {
    console.log('Ваш Заказ', cartPizzas);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          {allCount ? (
            <div className="cart">
              <div className="cart__top">
                <h2 className="content__title">
                  <IconBasket />
                  Корзина
                </h2>
                <div onClick={clear} className="cart__clear">
                  <IconClearCart />
                  <span>Очистить корзину</span>
                </div>
              </div>
              <div className="content__items">
                {cartPizzas.map((el, idx) => (
                  <CartItem {...el} key={el.name + idx} idx={idx} dispatch={dispatch} />
                ))}
              </div>
              <div className="cart__bottom">
                <div className="cart__bottom-details">
                  <span>
                    {' '}
                    Всего пицц: <b>{allCount} шт.</b>{' '}
                  </span>
                  <span>
                    {' '}
                    Сумма заказа: <b>{fullPrice} ₽</b>{' '}
                  </span>
                </div>
                <div className="cart__bottom-buttons">
                  <Link to="/" className="button button--outline button--add go-back-btn">
                    <img src={iconBack} alt="" />
                    <span>Вернуться назад</span>
                  </Link>
                  <div onClick={onClickOrder} className="button pay-btn">
                    <span>Оплатить сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
