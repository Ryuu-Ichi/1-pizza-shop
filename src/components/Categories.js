import { useState } from 'react';

const Categories = ({ items }) => {
  const [active, setActive] = useState(0);
  const categoriesList = items.map((el, idx) => {
    const isActive = active == idx ? 'active' : '';

    return (
      <li key={el} className={isActive} onClick={() => setActive(idx)}>
        {el}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoriesList}</ul>
    </div>
  );
};

export default Categories;
