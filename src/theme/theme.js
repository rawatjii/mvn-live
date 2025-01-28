import { useState, useEffect } from 'react';

export function useMatches() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is 768px or smaller
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
}
