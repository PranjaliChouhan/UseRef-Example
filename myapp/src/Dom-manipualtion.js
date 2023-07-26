import React, { useRef } from 'react';
import CharacterCounter from './Example';

const ScrollToTopButton = () => {
  const scrollToTopRef = useRef(null);

  const handleScrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // Show or hide the "Scroll to top" button based on the scroll position
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      scrollToTopRef.current.style.display = 'block';
    } else {
      scrollToTopRef.current.style.display = 'none';
    }
  };

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* A long content to demonstrate the scrolling */}
      <div  style={{ height: '3000px' }}>
        <p className='text'>Scroll down to see the button!</p></div>
      <CharacterCounter  />
      {/* The "Scroll to top" button */}
      <button ref={scrollToTopRef} onClick={handleScrollToTop} style={{ display: 'none' }}>
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTopButton;
