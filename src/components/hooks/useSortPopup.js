import { useEffect, useRef, useState } from 'react';

const useSortPopup = () => {
  const sortRef = useRef();
  const [visiblePopup, setVisiblePopup] = useState(false);

  useEffect(() => {
    if (visiblePopup) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, [visiblePopup]);

  const handleOutsideClick = ({ path }) => {
    if (!path.includes(sortRef.current) && visiblePopup) {
      setVisiblePopup(false);
    }
  };

  const togglePopup = () => {
    setVisiblePopup((visiblePopup) => (visiblePopup = !visiblePopup));
  };

  return {
    sortRef,
    visiblePopup,
    togglePopup,
  };
};

export default useSortPopup;
