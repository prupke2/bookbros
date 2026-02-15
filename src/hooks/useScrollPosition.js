import { useEffect, useRef } from 'react';

const useScrollPosition = (isModalOpen) => {
  /*
   This hook freezes and blurs the background when a modal is open.
   It also stores the current scroll position as a ref to ensure
   the scroll position is restored when the modal closes.
  */
  const scrollPosition = useRef(0);
  
  useEffect(() => {
    const backgroundElement = document.querySelector("main > div");
    if (isModalOpen) {
      scrollPosition.current = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
			backgroundElement.classList.add('blur-background');
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPosition.current);
			backgroundElement.classList.remove('blur-background');
    }
  }, [isModalOpen]);
  return;
}

export default useScrollPosition;
