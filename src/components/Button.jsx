import { IconBasket } from './icons';

const Button = ({ allCount, fullPrice }) => {
  return (
    <>
      <span>{fullPrice} ₽</span>
      <div className="button__delimiter"></div>
      <IconBasket />
      <span>{allCount}</span>
    </>
  );
};

export default Button;
