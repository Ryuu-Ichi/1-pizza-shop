import { IconSortPopup } from '../icons';
import useSortPopup from '../hooks/useSortPopup';

const arrSortBy = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const SortPopup = ({ sortBy, onSelectSortBy }) => {
  const { sortRef, visiblePopup, togglePopup } = useSortPopup();

  const setActiveAndClosePopup = (type) => {
    onSelectSortBy(type);
    togglePopup();
  };

  const active = arrSortBy.find((el) => el.type === sortBy).name;

  const sortList = arrSortBy.map(({ name, type }) => {
    const cls = sortBy === type ? 'active' : '';

    return (
      <li onClick={() => setActiveAndClosePopup(type)} className={cls} key={name}>
        {name}
      </li>
    );
  });

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <IconSortPopup visiblePopup={visiblePopup} />
        <b>Сортировка по:</b>
        <span onClick={togglePopup}>{active}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>{sortList}</ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
