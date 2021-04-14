export const changeSortCount = (sortCountByName, name, num) => {
  if (sortCountByName.hasOwnProperty(name)) {
    return { ...sortCountByName, [name]: sortCountByName[name] + num };
  }

  return { ...sortCountByName, [name]: 1 };
};

export const changeCartPizzas = (cartPizzas, payload, newItem) => {
  if (!newItem.count) {
    return [...cartPizzas.slice(0, payload), ...cartPizzas.slice(payload + 1)];
  }
  return [...cartPizzas.slice(0, payload), newItem, ...cartPizzas.slice(payload + 1)];
};

export const changeState = (state, payload, num) => {
  const { cartPizzas, allCount, fullPrice, sortCountByName } = state;

  const oldItem = cartPizzas[payload];
  const newItem = {
    ...oldItem,
    count: oldItem.count + num,
    price: oldItem.price + (oldItem.price / oldItem.count) * num,
  };

  return {
    allCount: allCount + num,
    fullPrice: fullPrice + (oldItem.price / oldItem.count) * num,
    sortCountByName: changeSortCount(sortCountByName, cartPizzas[payload].name, num),
    cartPizzas: changeCartPizzas(cartPizzas, payload, newItem),
  };
};

export const changeNewItem = (book, payload) => {
  if (!book) {
    return payload;
  } else {
    return { ...book, price: book.price + payload.price, count: book.count + 1 };
  }
};

export const addPizzasMainPage = (idx, cartPizzas, newItem, payload) => {
  if (cartPizzas[idx]) {
    return [...cartPizzas.slice(0, idx), newItem, ...cartPizzas.slice(idx + 1)];
  }
  return [...cartPizzas, payload];
};
