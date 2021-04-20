import { memo } from 'react';

const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = memo(({ onSelectCategory, category }) => {
  const categoriesList = items.map((el, idx) => {
    const isActive = category === idx ? 'active' : '';

    return (
      <li key={el} className={isActive} onClick={() => onSelectCategory(idx)}>
        {el}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoriesList}</ul>
    </div>
  );
});

export default Categories;
