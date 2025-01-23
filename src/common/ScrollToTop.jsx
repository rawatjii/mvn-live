import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  console.log('pathname',pathname);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    scrollToTop()
  }, [pathname]);

  return scrollToTop;
}

export default ScrollToTop;