import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

import logoSvg from '../assets/img/pizza-logo.svg';

const Header = () => {
  const { allCount, fullPrice } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Link to="/cart" className="header__cart button button--cart">
          <Button allCount={allCount} fullPrice={fullPrice}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
