import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [breakpoints, setBreakpoints] = useState({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isMobileOrTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const md = 768;
      const lg = 1024;

      setBreakpoints({
        isDesktop: width >= lg,
        isTablet: width >= md && width < lg,
        isMobile: width < md,
        isMobileOrTablet: width < lg,
      });
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
};

export default useScreenSize;
