import { useEffect, useRef } from 'react';

const useScrollPosition = (isOpen) => {
  /*
   This hook freezes the background when a modal is open.
   It also stores the current scroll position as a ref to ensure
   it is restored when the modal closes.
  */
  const scrollPosition = useRef(0);
 
  useEffect(() => {
    if (isOpen) {
      scrollPosition.current = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPosition.current);
    }
  }, [isOpen]);
  return;
}

export default useScrollPosition;
