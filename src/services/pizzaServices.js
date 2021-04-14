export default class PizzaServices {
  getData = (category, sortBy) => {
    const activeCategory = category ? `category=${category - 1}` : '';
    const activeOrder = sortBy === 'rating' ? 'desc' : 'asc';

    return fetch(`/pizzas?${activeCategory}&_sort=${sortBy}&_order=${activeOrder}`).then((res) =>
      res.json(),
    );
  };
}
