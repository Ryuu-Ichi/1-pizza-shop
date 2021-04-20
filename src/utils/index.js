import classNames from 'classnames';

export const setClasses = (arr, el, activeEl) => {
  return classNames({ active: el === activeEl, disabled: !arr.includes(el) });
};
