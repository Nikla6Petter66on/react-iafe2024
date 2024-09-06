import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Array of routes to exclude from the scroll-to-top behavior
  const excludeRoutes = [
    '/products/foundation',
    '/products/exploration',
    '/products/development-testing',
    '/products/launch'
  ];

  useEffect(() => {
    // Only scroll to top if the current route is NOT in the excluded routes
    if (!excludeRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
