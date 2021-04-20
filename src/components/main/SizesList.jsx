import { setClasses } from '../../utils/index';

const allSizes = [26, 30, 40];

const SizesList = ({ sizes, activeSize, setActiveSize }) => {
  const handleSetActiveSize = ({ target }) => {
    setActiveSize(+target.dataset.size);
  };

  return (
    <ul>
      {allSizes.map((num) => {
        return (
          <li
            key={num}
            data-size={num}
            onClick={handleSetActiveSize}
            className={setClasses(sizes, num, activeSize)}>
            {num} см.
          </li>
        );
      })}
    </ul>
  );
};

export default SizesList;
