import { setClasses } from '../../utils/index';

const typs = ['тонкое', 'традиционное'];

const TypesList = ({ types, activeType, setActiveType }) => {
  const handleSetActiveType = ({ target }) => {
    setActiveType(+target.dataset.idx);
  };

  return (
    <ul>
      {typs.map((str, idx) => {
        return (
          <li
            key={str}
            data-idx={idx}
            onClick={handleSetActiveType}
            className={setClasses(types, idx, activeType)}>
            {str}
          </li>
        );
      })}
    </ul>
  );
};

export default TypesList;
