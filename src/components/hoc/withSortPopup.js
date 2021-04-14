import { useEffect, useRef, useState } from 'react';

const withSortPopup = (Wrapped) => {
  return (props) => {
    const sortRef = useRef();
    const [visiblePopup, setVisiblePopup] = useState(false);

    useEffect(() => {
      if (visiblePopup) {
        document.body.addEventListener('click', handleOutsideClick);
      }

      return () => {
        document.body.removeEventListener('click', handleOutsideClick);
      };
    }, [visiblePopup]);

    const handleOutsideClick = ({ path }) => {
      if (!path.includes(sortRef.current) && visiblePopup) {
        setVisiblePopup(false);
      }
    };

    const togglePopup = () => {
      setVisiblePopup((visiblePopup) => (visiblePopup = !visiblePopup));
    };

    const setActiveAndClosePopup = (type) => {
      props.onSelectSortBy(type);
      togglePopup();
    };

    return (
      <Wrapped
        {...props}
        sortRef={sortRef}
        togglePopup={togglePopup}
        visiblePopup={visiblePopup}
        setActiveAndClosePopup={setActiveAndClosePopup}
      />
    );
  };
};

export default withSortPopup;
